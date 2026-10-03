import React from 'react';
import { Link } from 'react-router-dom';
import { fullRegistry } from './LanguageSelector';

const cardStyles = {
  card: { background: 'var(--apple-card-bg)', border: '1px solid var(--apple-border)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)', backdropFilter: 'blur(20px)', width: '100%', boxSizing: 'border-box' },
  top: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' },
  name: { fontSize: '18px', fontWeight: '600', color: 'var(--apple-text-primary)', margin: 0, letterSpacing: '-0.3px' },
  badge: { display: 'inline-block', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' },
  specsTable: { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', background: 'rgba(255,255,255,0.01)', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--apple-border)' },
  specRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' },
  specLabel: { color: 'var(--apple-text-secondary)', fontWeight: '400' },
  specValue: { color: 'var(--apple-text-primary)', fontWeight: '500' },
  powerBarWrapper: { width: '100%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px', height: '4px', marginTop: '4px', overflow: 'hidden' },
  powerBarFill: { backgroundColor: 'var(--apple-text-primary)', height: '100%', borderRadius: '4px' },
  actions: { display: 'flex', gap: '8px', marginTop: 'auto' },
  linkBtn: { flexGrow: 1, textAlign: 'center', background: 'var(--apple-btn-bg)', border: '1px solid var(--apple-border)', color: 'var(--apple-text-primary)', fontWeight: '500', fontSize: '12px', padding: '11px 0', borderRadius: '8px', cursor: 'pointer', textDecoration: 'none' },
  vsBtn: { background: 'var(--apple-text-primary)', color: 'var(--apple-body-bg)', border: 'none', fontWeight: '600', fontSize: '12px', padding: '11px 18px', borderRadius: '8px', cursor: 'pointer' }
};

export default function HardwareCard({ p, onAddToCompare, lang }) {
  const t = fullRegistry[lang];

  const getBadgeStyle = (brand) => {
    const base = { ...cardStyles.badge };
    if (brand.toLowerCase() === 'nvidia') return { ...base, background: 'rgba(118, 185, 0, 0.1)', color: '#76b900', border: '1px solid rgba(118, 185, 0, 0.2)' };
    if (brand.toLowerCase() === 'amd') return { ...base, background: 'rgba(255, 56, 56, 0.1)', color: '#ff3838', border: '1px solid rgba(255, 56, 56, 0.2)' };
    if (brand.toLowerCase() === 'intel') return { ...base, background: 'rgba(0, 102, 204, 0.1)', color: '#0066cc', border: '1px solid rgba(0, 102, 204, 0.2)' };
    return { ...base, background: 'var(--apple-btn-bg)', color: 'var(--apple-text-secondary)', border: '1px solid var(--apple-border)' };
  };

  return (
    <div 
      style={cardStyles.card}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--apple-card-hover-border)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--apple-border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div>
        <div style={cardStyles.top}>
          <h3 style={cardStyles.name}>{p.name}</h3>
        </div>
        <div style={getBadgeStyle(p.brand)}>{p.brand}</div>
        <div style={cardStyles.specsTable}>
          <div style={cardStyles.specRow}>
            <span style={cardStyles.specLabel}>{t.year}</span>
            <span style={cardStyles.specValue}>{p.year}</span>
          </div>
          <div style={cardStyles.specRow}>
            <span style={cardStyles.specLabel}>{t.powerIndex}</span>
            <span style={cardStyles.specValue}>{p.power}%</span>
          </div>
          <div style={cardStyles.powerBarWrapper}>
            <div style={{ ...cardStyles.powerBarFill, width: `${Math.min(p.power, 100)}%`, backgroundColor: p.brand.toLowerCase() === 'nvidia' ? '#76b900' : p.brand.toLowerCase() === 'amd' ? '#ff3838' : '#0066cc' }}></div>
          </div>
        </div>
      </div>
      <div style={cardStyles.actions}>
        <Link to={`/product/${p.id}?lang=${lang}`} style={cardStyles.linkBtn}>{t.specBtn}</Link>
        <button style={cardStyles.vsBtn} onClick={() => onAddToCompare(p)}>VS</button>
      </div>
    </div>
  );
}
