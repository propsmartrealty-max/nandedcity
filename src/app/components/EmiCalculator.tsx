"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEnquiryModal, ENQUIRY_CONTEXTS } from '../context/ModalContext';
import { SITE_CONFIG } from '@/config/site';

interface Preset {
  name: string;
  price: number;
  bhk: string;
  isReady: boolean;
}

const PRESETS: Preset[] = [
  { name: 'Bageshree (2 BHK)', price: 6800000, bhk: '2 BHK', isReady: true },
  { name: 'Aalaap (2.5 BHK)', price: 8800000, bhk: '2.5 BHK', isReady: false },
  { name: 'Saajgiri (3 BHK Luxury)', price: 14500000, bhk: '3 BHK', isReady: false },
  { name: 'Harmony (4.5 BHK)', price: 19500000, bhk: '4.5 BHK', isReady: false },
  { name: 'Melody Villa Plot', price: 22000000, bhk: 'NA Plot', isReady: false },
  { name: 'Asawari (Resale 2 BHK)', price: 7500000, bhk: '2 BHK', isReady: true }
];

export default function EmiCalculator() {
  const { openEnquiry } = useEnquiryModal();
  const [propertyPrice, setPropertyPrice] = useState<number>(14500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [isReadyProperty, setIsReadyProperty] = useState<boolean>(false);

  // Financial calculations
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyEmi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalRepayment = monthlyEmi * totalMonths;
  const totalInterest = totalRepayment - loanAmount;

  // Maharashtra Government Charges
  const stampDutyRate = 0.06; // 6% Maharashtra Stamp Duty
  const metroCessRate = 0.01; // 1% Pune Metro Cess
  const totalStampDutyPercent = 7; // Total 7%
  const stampDutyAndCess = Math.round(propertyPrice * (stampDutyRate + metroCessRate));
  const registrationFee = propertyPrice > 3000000 ? 30000 : Math.round(propertyPrice * 0.01);
  const gstRate = isReadyProperty ? 0 : 0.05; // 0% on RTM, 5% on ongoing under-construction
  const gstAmount = Math.round(propertyPrice * gstRate);
  const totalAcquisitionCost = propertyPrice + stampDutyAndCess + registrationFee + gstAmount;

  const formatINR = (val: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08)', overflow: 'hidden' }}>
      
      {/* Cluster Quick Presets Bar */}
      <div style={{ backgroundColor: '#0f172a', padding: '20px 24px', color: '#fff' }}>
        <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '12px' }}>
          Select Cluster Pre-Calibration
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => {
                setPropertyPrice(p.price);
                setIsReadyProperty(p.isReady);
              }}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '600',
                border: propertyPrice === p.price ? '1.5px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)',
                backgroundColor: propertyPrice === p.price ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.05)',
                color: propertyPrice === p.price ? 'var(--accent-gold)' : '#fff',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {p.name} · {formatINR(p.price)}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
        
        {/* Left: Input Sliders */}
        <div>
          <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: '800', marginBottom: '24px' }}>
            Customize Loan Parameters
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Property Price */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: '700', color: '#475569' }}>Property Value</label>
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-green)' }}>{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min="4500000"
                max="30000000"
                step="250000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px' }}>
                <span>₹45 Lakh</span>
                <span>₹1.5 Cr</span>
                <span>₹3.0 Cr</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: '700', color: '#475569' }}>Down Payment ({downPaymentPercent}%)</label>
                <span style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>{formatINR(downPaymentAmount)}</span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-gold)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px' }}>
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate & Tenure */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.05"
                  min="6.5"
                  max="14.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontWeight: '700', color: '#0f172a' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: '#475569', marginBottom: '8px' }}>
                  Loan Tenure
                </label>
                <select
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', backgroundColor: '#fff' }}
                >
                  {[5, 10, 15, 20, 25, 30].map(y => (
                    <option key={y} value={y}>{y} Years ({y * 12} mo)</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Property Status Toggle */}
            <div style={{ padding: '16px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>
                Project Stage (Determines GST)
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setIsReadyProperty(false)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    border: !isReadyProperty ? '2px solid var(--accent-gold)' : '1px solid #cbd5e1',
                    backgroundColor: !isReadyProperty ? 'rgba(212, 175, 55, 0.1)' : '#fff',
                    color: !isReadyProperty ? '#0f172a' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  Under Construction (5% GST)
                </button>
                <button
                  type="button"
                  onClick={() => setIsReadyProperty(true)}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    border: isReadyProperty ? '2px solid #16a34a' : '1px solid #cbd5e1',
                    backgroundColor: isReadyProperty ? 'rgba(22, 163, 74, 0.1)' : '#fff',
                    color: isReadyProperty ? '#16a34a' : '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  Ready to Move / Resale (0% GST)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Results Dashboard */}
        <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#64748b', fontWeight: '700' }}>
              Estimated Monthly Outgo
            </span>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary-green)', margin: '8px 0 16px', lineHeight: 1.1 }}>
              {formatINR(monthlyEmi)} <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#64748b' }}>/ month</span>
            </div>

            {/* Loan Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sanctioned Loan</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a' }}>{formatINR(loanAmount)}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Total Interest</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#e11d48' }}>{formatINR(totalInterest)}</div>
              </div>
            </div>

            {/* Maharashtra Government & Total Cost Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', marginBottom: '24px' }}>
              <div style={{ fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
                Maharashtra Government Registration Breakdown:
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Base Agreement Value:</span>
                <span style={{ fontWeight: '600' }}>{formatINR(propertyPrice)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Stamp Duty (6%) + Pune Metro Cess (1%) [7%]:</span>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>{formatINR(stampDutyAndCess)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>Government Registration Fee (Flat):</span>
                <span style={{ fontWeight: '600', color: '#0f172a' }}>{formatINR(registrationFee)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                <span>GST ({isReadyProperty ? '0% Exempt' : '5%'}):</span>
                <span style={{ fontWeight: '600', color: isReadyProperty ? '#16a34a' : '#0f172a' }}>{formatINR(gstAmount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1.5px dashed #cbd5e1', fontSize: '0.95rem', fontWeight: '800', color: '#0f172a' }}>
                <span>Total Acquisition Cost:</span>
                <span style={{ color: 'var(--primary-green)' }}>{formatINR(totalAcquisitionCost)}</span>
              </div>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => openEnquiry(`EMI Calculator (${formatINR(propertyPrice)})`, ENQUIRY_CONTEXTS.GENERAL)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontWeight: '800',
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.35)',
                transition: 'transform 0.2s ease'
              }}
            >
              Get Bank Pre-Approval & Pricing Assistance →
            </button>
            <p style={{ fontSize: '0.72rem', color: '#94a3b8', textAlign: 'center', marginTop: '10px', marginBottom: 0 }}>
              *SBI, HDFC, ICICI approved projects. Pre-approved loans subject to applicant credit profile.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
