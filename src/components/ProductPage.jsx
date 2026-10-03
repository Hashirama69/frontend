import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { embeddedHardwareDatabase } from '../data/hardware';
import { fullRegistry } from './LanguageSelector';

const styles = {
  wrapper: { padding: '40px', maxWidth: '750px', margin: '60px auto', background: 'var(--apple-card-bg)', border: '1px solid var(--apple-border)', borderRadius: '18px', backdropFilter: 'blur(30px)' },
  backLink: { color: 'var(--apple-text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: '500' },
  title: { fontSize: '26px', fontWeight: '600', color: 'var(--apple-text-primary)', marginTop: '24px', marginBottom: '8px' },
  sub: { fontSize: '13px', color: 'var(--apple-text-secondary)', fontWeight: '500', marginBottom: '32px' },
  table: { display: 'flex', flexDirection: 'column' },
  row: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--apple-border)', padding: '14px 0', fontSize: '14px' },
  label: { color: 'var(--apple-text-secondary)' },
  val: { color: 'var(--apple-text-primary)', fontWeight: '500' }
};

export default function ProductPage() {
  const { id } = useParams();
  const location = useLocation();
  
  const searchParams = new URLSearchParams(location.search);
  const lang = searchParams.get('lang') || 'ru';
  const t = fullRegistry[lang];

  const product = embeddedHardwareDatabase.find(p => p.id === parseInt(id));

  if (!product) {
    return <div style={{color:'var(--apple-text-primary)', textAlign:'center', marginTop:'100px'}}><h2>{t.notFound}</h2><Link to="/">Назад</Link></div>;
  }

  return (
    <div style={styles.wrapper}>
      <Link to="/" style={styles.backLink}>{t.back}</Link>
      <h2 style={styles.title}>{product.name}</h2>
      <div style={styles.sub}>{t.brand}: {product.brand} | ID: {product.sysId}</div>
      
      <div style={styles.table}>
        <div style={styles.row}><span style={styles.label}>{t.grCat}</span><span style={styles.val}>{product.category.toUpperCase()}</span></div>
        <div style={styles.row}><span style={styles.label}>{t.brand}</span><span style={styles.val}>{product.brand}</span></div>
        <div style={styles.row}><span style={styles.label}>{t.yearAnn}</span><span style={styles.val}>{product.year} г.</span></div>
        <div style={{...styles.row, borderBottom:'none'}}><span style={styles.label}>{t.techIndex}</span><span style={styles.val}>{product.power} / 120</span></div>
      </div>
    </div>
  );
}
