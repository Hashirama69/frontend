import React, { useState, useRef, useEffect } from 'react';
import { embeddedHardwareDatabase } from '../data/hardware';

const styles = {
  sphere: { position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #1d1d1f 0%, #000000 100%)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 12px 40px rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', cursor: 'pointer', zIndex: 100, transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)' },
  window: { position: 'fixed', bottom: '105px', right: '30px', width: '380px', height: '540px', background: 'rgba(28, 28, 30, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '24px', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', boxShadow: '0 30px 60px rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 100 },
  header: { padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.2)' },
  title: { fontSize: '13px', fontWeight: '600', color: '#f5f5f7', letterSpacing: '0.5px', textTransform: 'uppercase' },
  closeBtn: { background: 'none', border: 'none', color: '#86868b', fontSize: '20px', cursor: 'pointer', outline: 'none' },
  chatArea: { flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' },
  msgUser: { alignSelf: 'flex-end', background: '#ffffff', color: '#000000', padding: '10px 16px', borderRadius: '14px 14px 2px 14px', fontSize: '13px', maxWidth: '80%', lineHeight: '1.45', fontWeight: '500' },
  msgAi: { alignSelf: 'flex-start', background: 'rgba(255,255,255,0.03)', color: '#f5f5f7', border: '1px solid rgba(255,255,255,0.05)', padding: '10px 16px', borderRadius: '14px 14px 14px 2px', fontSize: '13px', maxWidth: '80%', lineHeight: '1.45' },
  inputArea: { padding: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '10px', background: 'rgba(0,0,0,0.15)' },
  input: { flexGrow: 1, backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '11px 16px', color: '#fff', fontSize: '13px', outline: 'none' },
  sendBtn: { background: '#ffffff', color: '#000000', border: 'none', borderRadius: '12px', padding: '0 18px', fontWeight: '600', fontSize: '13px', cursor: 'pointer' }
};

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Привет! Я твой новый сверхскоростной ИИ-ассистент CORE INDEX, работающий на базе Google Gemini. Я полностью изучил твой 11-летний каталог хардвера. Какой узел проанализируем?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    const systemPrompt = `Ты — экспертный ИИ-помощник CORE INDEX. Отвечай строго на русском языке, технически грамотно, лаконично, в стиле Apple. Твоя база данных: ${JSON.stringify(embeddedHardwareDatabase.map(p => ({id: p.sysId, name: p.name, year: p.year, power: p.power})))}; Запрос пользователя: "${userText}"`;

    try {
      const response = await fetch("http://localhost:3000/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: systemPrompt })
      });
      const data = await response.json();
      const aiText = data.response || "Модель обработала запрос пустой строкой.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Сбой сопряжения с бэкенд-шлюзом Node.js.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div 
        style={styles.sphere} 
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(255,255,255,0.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)'; }}
      >
        🔮
      </div>

      {isOpen && (
        <div style={styles.window}>
          <div style={styles.header}>
            <div style={styles.title}>Gemini AI Core</div>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div style={styles.chatArea}>
            {messages.map((m, idx) => (
              <div key={idx} style={m.role === 'user' ? styles.msgUser : styles.msgAi}>
                {m.text}
              </div>
            ))}
            {loading && <div style={{...styles.msgAi, color:'#86868b'}}>Генерация ответа ИИ (Google Gemini)...</div>}
            <div ref={chatEndRef} />
          </div>
          <div style={styles.inputArea}>
            <input 
              type="text" 
              style={styles.input} 
              placeholder="Спросить ассистента..." 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button style={styles.sendBtn} onClick={handleSend}>Отдать</button>
          </div>
        </div>
      )}
    </>
  );
}
