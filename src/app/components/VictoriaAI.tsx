import { useState, useRef, useEffect } from 'react';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const botResponses = {
  resume: "I've got experience founding FRC 9262, leading 100+ people, running electrical + computer vision + strategy, and building this very portfolio. I've also spoken at galas and run STEM events. Want specifics? 👀",
  projects: "Biggest one: FRC 9262 — rookie of the year in '23, 10th in province in '24. Also built computer vision systems, organized Girls in STEM (150 attendees), designed team swag, and made this interactive portfolio!",
  skills: "Java · JavaScript · HTML/CSS · React · TypeScript · Python · OpenCV · robotics programming · electrical systems · team leadership · event management · marketing · Figma · graphic design",
  frc: "FRC 9262 is my baby 🤖 I founded it from scratch, ran it for 3 years, handled electrical, computer vision, and strategy — and even spoke at the TD Synnex Gala that raised $300,000 for FIRST + Kids Help Phone.",
  hack: "I love building things that actually matter. Whether it's robots, web apps, or community events — I dive deep, lead teams, and ship stuff. Hack Club feels like exactly my kind of people!",
  default: "Hey! I'm Victoria AI 👋 I'm trained on Victoria's resume, projects, and experience. Try asking me about: resume, projects, skills, FRC, or hack club!",
};

const suggestedQuestions = ['What are your skills?', 'Tell me about FRC', 'Why Hack Club?', 'What projects?'];

export function VictoriaAI() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '0', text: "Hey! I'm Victoria AI 👋 Ask me anything about Victoria's experience, skills, or projects!", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [hoveredQ, setHoveredQ] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const getBotResponse = (msg: string): string => {
    const m = msg.toLowerCase();
    if (m.includes('resume') || m.includes('experience')) return botResponses.resume;
    if (m.includes('project')) return botResponses.projects;
    if (m.includes('skill')) return botResponses.skills;
    if (m.includes('frc') || m.includes('robot')) return botResponses.frc;
    if (m.includes('hack') || m.includes('club')) return botResponses.hack;
    return botResponses.default;
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), text: getBotResponse(text), sender: 'bot' };
      setMessages(prev => [...prev, botMsg]);
    }, 420);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#1c1c1c', border: '2px solid #0055ff' }}>

      {/* Tab header bar — matching ProjectsGrid */}
      <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '2px solid #0055ff', flexShrink: 0, background: '#161616' }}>
        <div style={{
          padding: '10px 20px',
          borderRight: '1px solid #0055ff44',
          background: '#1c1c1c',
          borderBottom: '2px solid #1c1c1c',
          marginBottom: '-2px',
          position: 'relative',
        }}>
          <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, color: '#0055ff', letterSpacing: 0.3 }}>
            victoria.ai
          </span>
        </div>
        <div style={{ padding: '10px 20px', borderRight: '1px solid #0055ff22', opacity: 0.35 }}>
          <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, color: '#0055ff' }}>
            chat.log
          </span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 14 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid #0055ff22', flexShrink: 0 }}>
        <p style={{ fontFamily: "'Micro 5', sans-serif", fontSize: 28, lineHeight: 'normal', color: '#0055ff', margin: 0 }}>
          victoria.ai
        </p>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 11, color: '#0055ff', opacity: 0.5, margin: '3px 0 0 0' }}>
          trained on my resume, projects &amp; job descriptions
        </p>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 16px 8px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={msg.sender === 'bot' ? {
              background: '#1e1e1e',
              border: '1px solid #0055ff2a',
              color: '#cfcfcf',
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 12,
              borderRadius: 0,
              padding: '9px 13px',
              maxWidth: '88%',
              lineHeight: 1.65,
            } : {
              background: '#0055ff',
              color: '#fff',
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 12,
              borderRadius: 0,
              padding: '9px 13px',
              maxWidth: '88%',
              lineHeight: 1.65,
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 2 && (
        <div style={{ padding: '0 16px 10px', display: 'flex', flexWrap: 'wrap', gap: 6, flexShrink: 0 }}>
          {suggestedQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              onMouseEnter={() => setHoveredQ(i)}
              onMouseLeave={() => setHoveredQ(null)}
              style={{
                background: hoveredQ === i ? '#0055ff14' : 'transparent',
                border: '1px solid #0055ff44',
                color: '#0055ff',
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 10,
                borderRadius: 0,
                padding: '4px 10px',
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding: '10px 14px', borderTop: '1px solid #0055ff2a', display: 'flex', gap: 8, flexShrink: 0 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
          placeholder="ask me anything..."
          style={{
            flex: 1,
            background: '#181818',
            border: '1px solid #0055ff33',
            borderRadius: 0,
            padding: '8px 12px',
            color: '#d0d0d0',
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 12,
            outline: 'none',
          }}
        />
        <button
          onClick={() => sendMessage(input)}
          style={{ background: '#0055ff', border: 'none', borderRadius: 0, padding: '8px 13px', cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
