interface Env {
  RESEND_API_KEY?: string;
  LEAD_EMAIL?: string;
}

// In-memory rate limiter per edge worker instance
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 4;

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    // 1. IP-based rate limiting
    const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    if (ip !== 'unknown') {
      const userLimit = rateLimitMap.get(ip) || { count: 0, lastReset: now };
      if (now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
        userLimit.count = 1;
        userLimit.lastReset = now;
      } else {
        userLimit.count += 1;
        if (userLimit.count > MAX_REQUESTS_PER_WINDOW) {
          return new Response(
            JSON.stringify({ error: 'Too many requests. Please try again later.' }),
            { status: 429, headers: corsHeaders }
          );
        }
      }
      rateLimitMap.set(ip, userLimit);
    }

    const body: any = await request.json();
    const { name, phone, project, email, message, source, intent, honey } = body;

    // Honeypot spam check
    if (honey) {
      return new Response(JSON.stringify({ success: true, note: 'Filtered' }), {
        status: 200,
        headers: corsHeaders,
      });
    }

    const sanitize = (str: string) => str ? str.replace(/<[^>]*>?/gm, '').trim() : '';
    const cleanName = sanitize(name);
    const cleanMessage = sanitize(message);
    const cleanProject = sanitize(project);
    const cleanSource = sanitize(source);
    const cleanIntent = sanitize(intent);
    const cleanPhone = phone ? phone.replace(/[^\d+]/g, '') : '';

    if (!cleanName || !cleanPhone || cleanPhone.length < 10) {
      return new Response(
        JSON.stringify({ error: 'Valid Name and Phone are required' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(cleanPhone)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid 10-digit Indian mobile number.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    if (cleanMessage.includes('http') || cleanMessage.includes('www.')) {
      return new Response(
        JSON.stringify({ error: 'Links are not allowed in messages.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    // Resend API key resolution from Cloudflare Pages environment variables
    const apiKey = env.RESEND_API_KEY;
    const recipientEmail = env.LEAD_EMAIL || 'propsmartrealty@gmail.com';

    const leadId = `NC-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    if (!apiKey) {
      console.warn('RESEND_API_KEY is not configured in Cloudflare Pages environment.');
      return new Response(
        JSON.stringify({ success: true, note: 'Lead registered', vaultId: leadId }),
        { status: 200, headers: corsHeaders }
      );
    }

    const leadHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #0f172a; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Nanded City Pune Lead</h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">Source: ${cleanSource || 'Official Website'}</p>
        </div>

        <div style="padding: 40px; background-color: #ffffff;">
          <div style="margin-bottom: 30px;">
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Prospect Name</p>
            <p style="color: #0f172a; font-size: 20px; font-weight: 700; margin: 0;">${cleanName}</p>
          </div>
          
          <div style="margin-bottom: 30px; display: flex; gap: 20px;">
            <div style="flex: 1;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Mobile Number</p>
              <a href="tel:${cleanPhone}" style="color: #0f172a; font-size: 18px; font-weight: 700; text-decoration: none;">${cleanPhone}</a>
            </div>
            <div style="flex: 1;">
              <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Project Interest</p>
              <p style="color: #0f172a; font-size: 18px; font-weight: 700; margin: 0;">${cleanProject || 'General Township Enquiry'}</p>
            </div>
          </div>

          ${cleanIntent ? `
          <div style="margin-bottom: 30px;">
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Prospect Intent</p>
            <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin: 0;">${cleanIntent}</p>
          </div>
          ` : ''}

          ${email ? `
          <div style="margin-bottom: 30px;">
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Email Address</p>
            <p style="color: #0f172a; font-size: 16px; margin: 0;">${email}</p>
          </div>
          ` : ''}

          ${cleanMessage ? `
          <div style="margin-bottom: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p style="color: #64748b; font-size: 12px; text-transform: uppercase; margin-bottom: 8px;">Message / Notes</p>
            <p style="color: #1e293b; font-size: 16px; line-height: 1.6; margin: 0;">${cleanMessage}</p>
          </div>
          ` : ''}

          <div style="margin-top: 40px; display: flex; gap: 12px;">
            <a href="https://wa.me/${cleanPhone.replace(/\D/g, '')}" style="flex: 1; text-align: center; background-color: #25D366; color: #ffffff; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
              📱 WhatsApp Now
            </a>
            <a href="tel:${cleanPhone}" style="flex: 1; text-align: center; background-color: #0f172a; color: #ffffff; padding: 16px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
              📞 Call Now
            </a>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 12px; margin: 0;">PropSmart Realty · Lead ID: ${leadId} · Cloudflare Edge</p>
        </div>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Nanded City Leads <onboarding@resend.dev>',
        to: recipientEmail,
        subject: `New Lead: ${cleanName} — ${cleanProject || 'Nanded City'}`,
        html: leadHtml,
        reply_to: email || undefined,
      }),
    });

    const resendData: any = await resendRes.json();

    if (!resendRes.ok) {
      console.error('Resend dispatch error:', resendData);
      return new Response(
        JSON.stringify({ success: true, warning: 'Email dispatch delayed', vaultId: leadId }),
        { status: 200, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData?.id, vaultId: leadId }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err: any) {
    console.error('Edge Contact API Error:', err);
    return new Response(
      JSON.stringify({ error: err.message || 'Internal Server Error' }),
      { status: 500, headers: corsHeaders }
    );
  }
}
