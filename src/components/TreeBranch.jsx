import React from 'react';

const styles = {
  line: { width: '1px', background: 'rgba(255,255,255,0.1)', height: '30px' },
  row: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '900px' },
  nodeBtn: { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', color: '#86868b', padding: '10px 24px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.25s cubic-bezier(0.25, 1, 0.5, 1)', outline: 'none' },
  nodeBtnActive: { background: '#ffffff', borderColor: '#ffffff', color: '#000000', fontWeight: '600', boxShadow: '0 4px 12px rgba(255,255,255,0.1)' }
};

export default function TreeBranch({ items, activeId, onClick, type = 'normal' }) {
  return (
    <>
      <div style={styles.line}></div>
      <div style={styles.row}>
        {items.map(item => {
          const id = type === 'cat' ? item.id : item;
          const label = type === 'cat' ? item.name : item;
          const isActive = activeId === id;

          return (
            <button
              key={id}
              style={{ ...styles.nodeBtn, ...(isActive ? styles.nodeBtnActive : {}) }}
              onClick={() => onClick(id)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </>
  );
}
