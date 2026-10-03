import React, { useState, useEffect } from 'react';

const styles = {
  toggleBtn: {
    background: 'var(--apple-btn-bg)',
    border: '1px solid var(--apple-border)',
    borderRadius: '20px',
    color: 'var(--apple-text-primary)',
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
    outline: 'none'
  }
};

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Внедряем глобальные CSS-переменные в корневой тег при монтировании
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--apple-bg', 'radial-gradient(circle at 50% 0%, #1c1c1e 0%, #000000 60%)');
      root.style.setProperty('--apple-body-bg', '#000000');
      root.style.setProperty('--apple-header-bg', 'rgba(0, 0, 0, 0.7)');
      root.style.setProperty('--apple-card-bg', 'rgba(255, 255, 255, 0.02)');
      root.style.setProperty('--apple-card-hover-border', 'rgba(255, 255, 255, 0.15)');
      root.style.setProperty('--apple-border', 'rgba(255, 255, 255, 0.06)');
      root.style.setProperty('--apple-text-primary', '#f5f5f7');
      root.style.setProperty('--apple-text-secondary', '#86868b');
      root.style.setProperty('--apple-btn-bg', 'rgba(255, 255, 255, 0.03)');
      root.style.setProperty('--apple-input-bg', 'rgba(255, 255, 255, 0.04)');
      root.style.setProperty('--apple-dropdown-bg', '#1c1c1e');
      root.style.setProperty('--apple-invert-invert', '0');
    } else {
      root.style.setProperty('--apple-bg', 'radial-gradient(circle at 50% 0%, #f5f5f7 0%, #e5e5ea 100%)');
      root.style.setProperty('--apple-body-bg', '#f5f5f7');
      root.style.setProperty('--apple-header-bg', 'rgba(255, 255, 255, 0.7)');
      root.style.setProperty('--apple-card-bg', 'rgba(0, 0, 0, 0.02)');
      root.style.setProperty('--apple-card-hover-border', 'rgba(0, 0, 0, 0.15)');
      root.style.setProperty('--apple-border', 'rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--apple-text-primary', '#1d1d1f');
      root.style.setProperty('--apple-text-secondary', '#86868b');
      root.style.setProperty('--apple-btn-bg', 'rgba(0, 0, 0, 0.03)');
      root.style.setProperty('--apple-input-bg', 'rgba(0, 0, 0, 0.03)');
      root.style.setProperty('--apple-dropdown-bg', '#ffffff');
      root.style.setProperty('--apple-invert-invert', '1');
    }
  }, [isDark]);

  return (
    <button 
      style={styles.toggleBtn} 
      onClick={() => setIsDark(!isDark)}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
    >
      {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
