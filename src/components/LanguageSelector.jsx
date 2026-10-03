import React, { useState } from 'react';

export const translations = {
  ru: { 
    flag: "🇷🇺", name: "Русский", 
    search: "Поиск по ТЗ (intel-u200s, psu-atx31, camm2, hdd...)", catalog: "📁 Инженерный Каталог", 
    reset: "Сбросить slots", vsSlotA: "Слот Аппарата A", vsSlotB: "Слот Аппарата B", 
    testGame: "🎮 ТЕСТ ИГРОВОЙ СОВМЕСТИМОСТИ", gameDesc: "Выберите игру ниже, чтобы оценить производительность чипа:", 
    specBtn: "Спецификация", vendor: "Вендор:", year: "Год выпуска:", powerIndex: "Индекс мощности:", 
    alertCompare: "Сравнение возможно только внутри одной категории хардвера!", back: "← Вернуться в инвентарь", 
    grCat: "Группа каталога", brand: "Производитель / Бренд", yearAnn: "Год официального анонса", 
    techIndex: "Индекс технологического веса", notFound: "Компонент не найден.", placeholderSelect: "Задать вопрос ИИ...",
    processors: "Процессоры", gpu: "Видеокарты", ram: "Оперативная память", storage: "Накопители данных", motherboard: "Материнские платы (Чипсеты)", cases: "Периферия и Корпуса"
  },
  en: { 
    flag: "🇺🇸", name: "English", 
    search: "Search specs (intel-u200s, psu-atx31, camm2, hdd...)", catalog: "📁 Engineering Catalog", 
    reset: "Reset slots", vsSlotA: "Hardware Slot A", vsSlotB: "Hardware Slot B", 
    testGame: "🎮 GAMING COMPATIBILITY TEST", gameDesc: "Select a game below to evaluate chip performance:", 
    specBtn: "Specification", vendor: "Vendor:", year: "Release Year:", powerIndex: "Power Index:", 
    alertCompare: "Comparison is only possible within the same hardware category!", back: "← Back to Inventory", 
    grCat: "Catalog Group", brand: "Manufacturer / Brand", yearAnn: "Official Announcement Year", 
    techIndex: "Technological Weight Index", notFound: "Component not found.", placeholderSelect: "Ask AI a question...",
    processors: "Processors", gpu: "Graphics Cards", ram: "RAM", storage: "Data Storage", motherboard: "Motherboards (Chipsets)", cases: "Peripherals & Cases"
  },
  zh: { 
    flag: "🇨🇳", name: "中文", 
    search: "搜索规格 (intel-u200s, psu-atx31...)", catalog: "📁 工程目录", 
    reset: "重置插槽", vsSlotA: "硬件插槽 A", vsSlotB: "硬件插槽 B", 
    testGame: "🎮 游戏兼容性测试", gameDesc: "在下方选择一款游戏以评估芯片性能：", 
    specBtn: "技术规格", vendor: "厂商：", year: "发布年份：", powerIndex: "性能指数：", 
    alertCompare: "只能在相同硬件类别内进行比较！", back: "← 返回库存", 
    grCat: "目录组", brand: "制造商 / 品牌", yearAnn: "官方发布年份", 
    techIndex: "技术权重指数", notFound: "未找到组件。", placeholderSelect: "向人工智能提问...",
    processors: "处理器", gpu: "显卡", ram: "内存", storage: "数据存储", motherboard: "母板 (芯片组)", cases: "外设与机箱"
  },
  de: { 
    flag: "🇩🇪", name: "Deutsch", 
    search: "Сhip-Suche (intel-u200s, psu-atx31, camm2, hdd...)", catalog: "📁 Ingenieurkatalog", 
    reset: "Slots zurücksetzen", vsSlotA: "Hardware-Slot A", vsSlotB: "Hardware-Slot B", 
    testGame: "🎮 SPIELKOMPATIBILITÄTSTEST", gameDesc: "Wählen Sie unten ein Spiel aus, um die Chip-Leistung zu bewerten:", 
    specBtn: "Spezifikation", vendor: "Hersteller:", year: "Erscheinungsjahr:", powerIndex: "Leistungsindex:", 
    alertCompare: "Ein Vergleich ist nur innerhalb derselben Hardwarekategorie möglich!", back: "← Zurück zum Inventar", 
    grCat: "Kataloggruppe", brand: "Hersteller / Marke", yearAnn: "Offizielles Ankündigungsjahr", 
    techIndex: "Technologischer Gewichtsindex", notFound: "Komponente nicht gefunden.", placeholderSelect: "Fragen Sie die KI...",
    processors: "Prozessoren", gpu: "Grafikkarten", ram: "Arbeitsspeicher", storage: "Datenspeicher", motherboard: "Mainboards (Chipsätze)", cases: "Peripherie & Gehäuse"
  },
  es: { 
    flag: "🇪🇸", name: "Español", 
    search: "Buscar especificaciones (intel-u200s, psu-atx31...)", catalog: "📁 Catálogo de Ingeniería", 
    reset: "Reiniciar ranuras", vsSlotA: "Ranura de Hardware A", vsSlotB: "Ranura de Hardware B", 
    testGame: "🎮 PRUEBA DE COMPATIBILIDAD DE JUEGOS", gameDesc: "Seleccione un juego a continuación para evaluar el rendimiento:", 
    specBtn: "Especificación", vendor: "Proveedor:", year: "Año de lanzamiento:", powerIndex: "Índice de potencia:", 
    alertCompare: "¡La comparación solo es posible dentro de la misma categoría de hardware!", back: "← Volver al Inventario", 
    grCat: "Grupo de Catálogo", brand: "Fabricante / Marca", yearAnn: "Año de Anuncio Oficial", 
    techIndex: "Índice de Peso Tecnológico", notFound: "Componente no encontrado.", placeholderSelect: "Pregúntale a la IA...",
    processors: "Procesadores", gpu: "Tarjetas Gráficas", ram: "Memoria RAM", storage: "Almacenamiento", motherboard: "Placas Base (Chipsets)", cases: "Periféricos y Cajas"
  }
};
export const translationsExtended = {
  fr: { 
    flag: "🇫🇷", name: "Français", 
    search: "Rechercher des specs (intel-u200s, psu-atx31...)", catalog: "📁 Catalogue d'Ingénierie", 
    reset: "Réinitialiser", vsSlotA: "Slot Matériel A", vsSlotB: "Slot Matériel B", 
    testGame: "🎮 TEST DE COMPATIBILITÉ JEUX", gameDesc: "Sélectionnez un jeu ci-dessous pour évaluer les performances:", 
    specBtn: "Spécification", vendor: "Vendeur:", year: "Année de sortie:", powerIndex: "Indice de puissance:", 
    alertCompare: "La comparaison n'est possible qu'au sein d'une même catégorie de matériel!", back: "← Retour à l'inventaire", 
    grCat: "Groupe de Catalogue", brand: "Fabricant / Marque", yearAnn: "Année d'Annonce Officielle", 
    techIndex: "Indice de Poids Technologique", notFound: "Composant introuvable.", placeholderSelect: "Poser une question à l'IA...",
    processors: "Processeurs", gpu: "Cartes Graphiques", ram: "Mémoire RAM", storage: "Stockage de Données", motherboard: "Cartes Mères (Chipsets)", cases: "Périphériques & Boîtiers"
  },
  jp: { 
    flag: "🇯🇵", name: "日本語", 
    search: "スペック検索 (intel-u200s, psu-atx31, camm2...)", catalog: "📁 エンジニアリングカタログ", 
    reset: "スロットをリセット", vsSlotA: "ハードウェアスロット A", vsSlotB: "ハードウェアスロット B", 
    testGame: "🎮 ゲーム互換性テスト", gameDesc: "チップのパフォーマンスを評価するには、以下からゲームを選択してください：", 
    specBtn: "仕様書", vendor: "ベンダー:", year: "発売年:", powerIndex: "電力指数:", 
    alertCompare: "比較は同じハードウェアカテゴリ内でのみ可能です！", back: "← インベントリに戻る", 
    grCat: "カタロググループ", brand: "製造元 / ブランド", yearAnn: "公式発表年", 
    techIndex: "技術重量指数", notFound: "コンポーネントが見つかりません。", placeholderSelect: "AIに質問する...",
    processors: "プロセッサ", gpu: "グラフィックカード", ram: "RAMメモリ", storage: "データストレージ", motherboard: "マザーボード (チップセット)", cases: "周辺機器 & ケース"
  },
  kr: { 
    flag: "🇰🇷", name: "한국어", 
    search: "스펙 검색 (intel-u200s, psu-atx31, camm2, hdd...)", catalog: "📁 엔지니어링 카탈로그", 
    reset: "슬롯 초기화", vsSlotA: "하드웨어 슬롯 A", vsSlotB: "하드웨어 슬롯 B", 
    testGame: "🎮 게임 호환성 테스트", gameDesc: "칩 성능을 평가하려면 아래에서 게임을 선택하십시오:", 
    specBtn: "상세 스펙", vendor: "공급업체:", year: "출시 연도:", powerIndex: "성능 지수:", 
    alertCompare: "동일한 하드웨어 카테고리 내에서만 비교할 수 있습니다!", back: "← 인벤토리로 돌아가기", 
    grCat: "카탈로그 그룹", brand: "제조업체 / 브랜드", yearAnn: "공식 발표 연도", 
    techIndex: "기술 가중치 지수", notFound: "구성 요소를 찾을 수 없습니다.", placeholderSelect: "AI에게 질문하기...",
    processors: "프로세서", gpu: "그래픽 카드", ram: "RAM 메모리", storage: "데이터 스토리지", motherboard: "메인보드 (칩셋)", cases: "주변기기 & 케이스"
  },
  it: { 
    flag: "🇮🇹", name: "Italiano", 
    search: "Cerca specifiche (intel-u200s, psu-atx31, camm2...)", catalog: "📁 Catalogo di Ingegneria", 
    reset: "Ripristina slot", vsSlotA: "Slot Hardware A", vsSlotB: "Slot Hardware B", 
    testGame: "🎮 TEST DI COMPATIBILITÀ GIOCHI", gameDesc: "Seleziona un gioco qui sotto per valutare le prestazioni:", 
    specBtn: "Specifica", vendor: "Fornitore:", year: "Anno di rilascio:", powerIndex: "Indice di potenza:", 
    alertCompare: "Il confronto è possibile solo all'interno della stessa categoria hardware!", back: "← Torna all'inventario", 
    grCat: "Gruppo di Catalogo", brand: "Produttore / Marchio", yearAnn: "Anno di Annuncio Ufficiale", 
    techIndex: "Indice di Peso Tecnológico", notFound: "Componente non trovato.", placeholderSelect: "Fai una domanda all'IA...",
    processors: "Processori", gpu: "Carte Grafiche", ram: "Memoria RAM", storage: "Archiviazione Dati", motherboard: "Schede Madri (Chipset)", cases: "Periferiche e Case"
  },
  ae: { 
    flag: "🇦🇪", name: "العربية", 
    search: "بحث عن المواصفات (intel-u200s, psu-atx31...)", catalog: "📁 كتالوج الهندسة", 
    reset: "إعادة تعيين", vsSlotA: "فتحة الأجهزة أ", vsSlotB: "فتحة الأجهزة ب", 
    testGame: "🎮 اختبار توافق الألعاب", gameDesc: "اختر لعبة أدناه لتقييم أداء الشريحة:", 
    specBtn: "المواصفات", vendor: "المورد:", year: "سنة الإصدار:", powerIndex: "مؤشر الطاقة:", 
    alertCompare: "المقارنة ممكنة فقط داخل نفس فئة الأجهزة!", back: "← العودة إلى المخزون", 
    grCat: "مجموعة الكتالوج", brand: "الشركة المصنعة / العلامة التجارية", yearAnn: "سنة الإعلان الرسمي", 
    techIndex: "مؤشر الوزن التكنولوجي", notFound: "المكون غير موجود.", placeholderSelect: "اسأل الذكاء الاصطناعي...",
    processors: "المعالجات", gpu: "بطاقات الشاشة", ram: "ذاكرة الوصول العشوائي", storage: "تخزين البيانات", motherboard: "اللوحات الأم", cases: "الملحقات والهياكل"
  }
};

export const fullRegistry = { ...translations, ...translationsExtended };
const styles = {
  container: { position: 'relative' },
  triggerBtn: { background: 'var(--apple-btn-bg)', border: '1px solid var(--apple-border)', borderRadius: '20px', color: 'var(--apple-text-primary)', padding: '8px 16px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)', outline: 'none' },
  overlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(25px)', WebkitBackdropFilter: 'blur(25px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200 },
  panel: { background: 'var(--apple-dropdown-bg)', border: '1px solid var(--apple-border)', borderRadius: '24px', padding: '32px', width: '90%', maxWidth: '440px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: '10px', margin: '15% auto' },
  title: { fontSize: '14px', fontWeight: '600', color: 'var(--apple-text-primary)', marginBottom: '12px', textAlign: 'center', letterSpacing: '-0.2px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  langBtn: { background: 'var(--apple-btn-bg)', border: '1px solid var(--apple-border)', borderRadius: '14px', color: 'var(--apple-text-primary)', padding: '12px 16px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s', width: '100%', boxSizing: 'border-box' },
  langBtnActive: { background: 'var(--apple-text-primary)', color: 'var(--apple-body-bg)', borderColor: 'var(--apple-text-primary)' }
};

export default function LanguageSelector({ currentLang, onLangChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    onLangChange(code);
    setIsOpen(false);
  };

  return (
    <div style={styles.container}>
      <button style={styles.triggerBtn} onClick={() => setIsOpen(true)}>
        <span>{fullRegistry[currentLang].flag}</span>
        <span>{fullRegistry[currentLang].name}</span>
      </button>

      {isOpen && (
        <div style={styles.overlay} onClick={() => setIsOpen(false)}>
          <div style={styles.panel} onClick={(e) => e.stopPropagation()}>
            <div style={styles.title}>SELECT LANGUAGE / ВЫБЕРИТЕ ЯЗЫК</div>
            <div style={styles.grid}>
              {Object.keys(fullRegistry).map((code) => (
                <button
                  key={code}
                  style={{ ...styles.langBtn, ...(currentLang === code ? styles.langBtnActive : {}) }}
                  onClick={() => handleSelect(code)}
                >
                  <span style={{ fontSize: '18px' }}>{fullRegistry[code].flag}</span>
                  <span>{fullRegistry[code].name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
