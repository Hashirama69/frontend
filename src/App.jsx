import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { embeddedHardwareDatabase, availableCategories, embeddedGamesDatabase } from './data/hardware';
import TreeBranch from './components/TreeBranch';
import HardwareCard from './components/HardwareCard';
import ProductPage from './components/ProductPage';

import ThemeToggle from './components/ThemeToggle';
import LanguageSelector, { fullRegistry } from './components/LanguageSelector';
import AiAssistant from './components/AiAssistant';

const styles = {
  body: { backgroundColor: 'var(--apple-body-bg)', color: 'var(--apple-text-primary)', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', margin: 0, padding: 0, background: 'var(--apple-bg)', transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' },
  header: { backgroundColor: 'var(--apple-header-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--apple-border)', padding: '18px 40px', position: 'sticky', top: 0, zIndex: 50, transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)' },
  container: { maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { fontSize: '16px', fontWeight: '600', letterSpacing: '3px', color: 'var(--apple-text-primary)', textTransform: 'uppercase', textDecoration: 'none' },
  controlsRow: { display: 'flex', gap: '12px', alignItems: 'center' },
  treeContainer: { maxWidth: '1100px', margin: '50px auto', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  rootBtn: { background: 'var(--apple-btn-bg)', border: '1px solid var(--apple-border)', color: 'var(--apple-text-primary)', padding: '14px 44px', borderRadius: '24px', fontSize: '13px', fontWeight: '500', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.25s' },
  rootBtnActive: { background: 'var(--apple-text-primary)', color: 'var(--apple-body-bg)', borderColor: 'var(--apple-text-primary)' },
  line: { width: '1px', backgroundColor: 'var(--apple-border)', height: '30px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', width: '100%', marginTop: '20px' },
  searchBox: { position: 'relative', width: '100%', maxWidth: '400px' },
  searchInput: { width: '100%', backgroundColor: 'var(--apple-input-bg)', border: '1px solid var(--apple-border)', padding: '10px 18px', borderRadius: '18px', color: 'var(--apple-text-primary)', fontSize: '13px', outline: 'none' },
  dropdown: { position: 'absolute', top: '44px', left: 0, width: '100%', backgroundColor: 'var(--apple-dropdown-bg)', border: '1px solid var(--apple-border)', borderRadius: '12px', zIndex: 60, boxShadow: '0 20px 40px rgba(0,0,0,0.7)', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  dropItem: { padding: '12px 18px', color: 'var(--apple-text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--apple-border)', fontSize: '13px' },
  vsWrapper: { width: '100%', maxWidth: '850px', background: 'var(--apple-card-bg)', border: '1px solid var(--apple-border)', borderRadius: '16px', padding: '24px', marginBottom: '40px', backdropFilter: 'blur(20px)', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  vsSlots: { display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '16px' },
  vsSlot: { width: '42%', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--apple-border)', borderRadius: '10px', padding: '16px', textAlign: 'center', fontSize: '13.5px', fontWeight: '500', color: 'var(--apple-text-primary)' },
  vsCircle: { background: 'var(--apple-text-primary)', color: 'var(--apple-body-bg)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '700', fontSize: '13px' },
  verdict: { background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid var(--apple-text-primary)', padding: '14px 18px', borderRadius: '6px', width: '100%', boxSizing: 'border-box', fontSize: '13px', lineHeight: '1.6', color: 'var(--apple-text-secondary)' },
  gameSection: { width: '100%', maxWidth: '850px', background: 'var(--apple-card-bg)', border: '1px solid var(--apple-border)', borderRadius: '16px', padding: '24px', marginTop: '50px', backdropFilter: 'blur(20px)' },
  gameTitle: { fontSize: '16px', fontWeight: '600', color: 'var(--apple-text-primary)', marginBottom: '16px', letterSpacing: '-0.2px' },
  gameGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', width: '100%' },
  gameCard: { background: 'rgba(255,255,255,0.01)', border: '1px solid var(--apple-border)', borderRadius: '10px', padding: '16px', cursor: 'pointer' }
};
function MainShopView({ lang }) {
  const [isRootActive, setIsRootActive] = useState(false);
  const [chosenCat, setChosenCategory] = useState(null);
  const [chosenBrand, setChosenBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [compLeft, setCompLeft] = useState(null);
  const [compRight, setCompRight] = useState(null);
  
  const t = fullRegistry[lang];

  const availableBrands = [...new Set(embeddedHardwareDatabase.filter(p => p.category === chosenCat).map(p => p.brand))];
  const finalHardware = embeddedHardwareDatabase.filter(p => p.category === chosenCat && p.brand === chosenBrand);

  const filteredSuggestions = searchQuery.trim() === '' ? [] : embeddedHardwareDatabase.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.sysId.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleAddToCompare = (product) => {
    if (!compLeft) setCompLeft(product);
    else if (!compRight) {
      if (compLeft.category !== product.category) return alert(t.alertCompare);
      setCompRight(product);
    } else {
      setCompLeft(product); setCompRight(null);
    }
  };

  const calculateVerdict = () => {
    if (!compLeft || !compRight) return null;
    const powerDiff = Math.abs(compLeft.power - compRight.power);
    const techWinner = compLeft.power > compRight.power ? compLeft.name : compRight.name;
    const yearWinner = compLeft.year > compRight.year ? compLeft : compRight;

    return (
      <div style={styles.verdict}>
        <span style={{color:'var(--apple-text-primary)', fontWeight:'600'}}>ANALYTICS:</span><br />
        Линейка <strong>{techWinner}</strong> опережает оппонента на {powerDiff} пунктов.<br />
        Модель <strong>{yearWinner.name}</strong> является более современным инженерным решением (Релиз: {yearWinner.year} г.).
      </div>
    );
  };

  const handleTestGame = (game) => {
    if (!compLeft) return alert("Выберите чип для левого слота VS!");
    if (compLeft.category !== 'processors' && compLeft.category !== 'videocards') return alert("Выберите Процессор или Видеокарту!");

    if (compLeft.power >= game.reqPower) {
      alert(`🎮 ${game.name}\n\n100% готов. Ожидается: 90-120 FPS.`);
    } else {
      alert(`⚠️ ${game.name}\n\nОжидается: 35-50 FPS.`);
    }
  };
  return (
    <div style={styles.treeContainer}>
      {(compLeft || compRight) && (
        <div style={styles.vsWrapper}>
          <div style={styles.vsSlots}>
            <div style={styles.vsSlot}>{compLeft ? compLeft.name : t.vsSlotA}</div>
            <div style={styles.vsCircle}>VS</div>
            <div style={styles.vsSlot}>{compRight ? compRight.name : t.vsSlotB}</div>
          </div>
          {calculateVerdict()}
          <button style={{background:'none', border:'none', color:'var(--apple-text-secondary)', fontSize:'12px', marginTop:'12px', cursor:'pointer', textDecoration:'underline'}} onClick={()=>{setCompLeft(null); setCompRight(null);}}>{t.reset}</button>
        </div>
      )}

      <div style={styles.searchBox}>
        <input type="text" style={styles.searchInput} placeholder={t.search} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        {filteredSuggestions.length > 0 && (
          <div style={styles.dropdown}>
            {filteredSuggestions.map(p => (
              <Link key={p.id} to={`/product/${p.id}?lang=${lang}`} style={styles.dropItem} onClick={() => setSearchQuery('')}>
                <strong>{p.brand}</strong> {p.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div style={{height:'35px'}}></div>

      <button style={{...styles.rootBtn, ...(isRootActive ? styles.rootBtnActive : {})}} onClick={() => { setIsRootActive(!isRootActive); setChosenCategory(null); setChosenBrand(null); }}>
        {t.catalog}
      </button>

      {isRootActive && (
        <TreeBranch items={availableCategories} activeId={chosenCat} type="cat" onClick={(id) => { setChosenCategory(id); setChosenBrand(null); }} />
      )}
      {chosenCat && availableBrands.length > 0 && (
        <TreeBranch items={availableBrands} activeId={chosenBrand} onClick={(id) => setChosenBrand(id)} />
      )}

      {chosenBrand && <div style={styles.line}></div>}
      {chosenBrand && (
        <div style={styles.grid}>
          {finalHardware.map(p => (
            <HardwareCard key={p.id} p={p} onAddToCompare={handleAddToCompare} lang={lang} />
          ))}
        </div>
      )}

      <div style={styles.gameSection}>
        <div style={styles.gameTitle}>{t.testGame}</div>
        <div style={{fontSize:'12px', color:'var(--apple-text-secondary)', marginBottom:'14px'}}>{t.gameDesc}</div>
        <div style={styles.gameGrid}>
          {embeddedGamesDatabase.map(game => (
            <div key={game.id} style={styles.gameCard} onClick={() => handleTestGame(game)}>
              <div style={{fontSize:'13px', fontWeight:'600', color:'var(--apple-text-primary)', marginBottom:'4px'}}>{game.name}</div>
              <div style={{fontSize:'11.5px', color:'var(--apple-text-secondary)'}}>{game.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <AiAssistant />
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('ru');

  return (
    <BrowserRouter>
      <div style={styles.body}>
        <header style={styles.header}>
          <div style={styles.container}>
            <Link to="/" style={styles.logo}>CORE INDEX</Link>
            <div style={styles.controlsRow}>
              <ThemeToggle />
              <LanguageSelector currentLang={lang} onLangChange={(l) => setLang(l)} />
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<MainShopView lang={lang} />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
