interface Env {
  VAULT_PASSPHRASE?: string;
  LEADS_KV?: any;
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  const authHeader = request.headers.get('Authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim();
  const validPassphrase = env.VAULT_PASSPHRASE || 'propsmart2026';

  if (!token || token !== validPassphrase) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Invalid Passphrase' }), {
      status: 401,
      headers: corsHeaders,
    });
  }

  try {
    let leads: any[] = [];

    // If Cloudflare KV is bound, fetch recorded leads
    if (env.LEADS_KV) {
      const list = await env.LEADS_KV.list({ prefix: 'lead:' });
      for (const key of list.keys) {
        const val = await env.LEADS_KV.get(key.name, 'json');
        if (val) leads.push(val);
      }
      leads.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }

    // If KV has no records yet, provide clean system status ledger
    if (leads.length === 0) {
      leads = [
        {
          id: 'NC-LEDGER-INIT',
          timestamp: new Date().toISOString(),
          name: 'System Audit',
          phone: '+91 7744009295',
          email: 'propsmartrealty@gmail.com',
          project: 'Nanded City Township (700 Acres)',
          message: 'Cloudflare Edge Vault Initialized. Ready to store incoming leads.',
          source: 'System Sovereign Vault',
          intent: 'Ready for Live Inquiries',
          status: 'Active'
        }
      ];
    }

    return new Response(JSON.stringify(leads), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Vault Error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
}
