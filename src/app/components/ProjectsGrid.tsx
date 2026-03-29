import { useState } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year?: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'FRC 9262',
    description: "Founded & led a 100+ person student robotics team for 3 years. Managed electrical, computer vision, and strategy. Rookie of the Year '23, 10th in province '24.",
    tags: ['Robotics', 'Java', 'Computer Vision', 'Leadership'],
    link: 'https://github.com',
    year: '2022–25',
  },
  {
    id: '2',
    title: 'Computer Vision System',
    description: 'Built autonomous target-detection and robot navigation using OpenCV for FRC competition robots.',
    tags: ['Python', 'OpenCV', 'ML'],
    year: '2024',
  },
  {
    id: '3',
    title: 'Girls in STEM Event',
    description: 'Organized and ran workshops for 150+ attendees, promoting STEM education and hands-on robotics.',
    tags: ['Community', 'Education'],
    year: '2024',
  },
  {
    id: '4',
    title: 'TD Synnex Gala',
    description: 'Spoke at a major fundraising gala that raised $300,000 for FIRST Robotics and Kids Help Phone.',
    tags: ['Public Speaking', 'Fundraising'],
    year: '2024',
  },
  {
    id: '5',
    title: 'Interactive Portfolio',
    description: 'Built this custom portfolio with draggable photos, a Java code shell, and Victoria AI — designed in Figma.',
    tags: ['React', 'TypeScript', 'Figma'],
    link: '#',
    year: '2025',
  },
  {
    id: '6',
    title: 'Team Swag & Branding',
    description: 'Designed all team branding: hoodies, stickers, marketing materials. Created a recognizable visual identity for FRC 9262.',
    tags: ['Design', 'Figma', 'Marketing'],
    year: '2023',
  },
];

export function ProjectsGrid() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#1c1c1c', border: '2px solid #0055ff', borderRadius: 0, position: 'relative' }}>

      {/* Tab header bar */}
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
            projects.tsx
          </span>
        </div>
        <div style={{ padding: '10px 20px', borderRight: '1px solid #0055ff22', opacity: 0.35 }}>
          <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, color: '#0055ff' }}>
            resume.pdf
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
          projects i'm working on
        </p>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 11, color: '#0055ff', opacity: 0.5, margin: '3px 0 0 0' }}>
          click a card to learn more
        </p>
      </div>

      {/* Grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {projects.map(project => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                textAlign: 'left',
                background: hovered === project.id ? '#202020' : '#181818',
                border: `1px solid ${hovered === project.id ? '#0055ff' : '#0055ff2a'}`,
                borderRadius: 0,
                padding: '12px 14px',
                cursor: 'pointer',
                transition: 'border-color 0.15s, background 0.15s',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                  {project.title}
                </p>
                {project.link && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0055ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                )}
              </div>

              {project.year && (
                <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 10, color: '#0055ff', opacity: 0.65, margin: 0 }}>
                  {project.year}
                </p>
              )}

              <p style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 10,
                color: '#777',
                margin: 0,
                lineHeight: 1.6,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 2 }}>
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} style={{ background: 'transparent', border: '1px solid #0055ff44', color: '#0055ff', fontFamily: "'Libre Baskerville', serif", fontSize: 9, borderRadius: 0, padding: '1px 6px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.82)' }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{ position: 'relative', background: '#1c1c1c', border: '2px solid #0055ff', borderRadius: 0, padding: '30px 32px', maxWidth: 480, width: '90%' }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: 14, right: 14, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0055ff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {selected.year && <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 11, color: '#0055ff', opacity: 0.65, margin: '0 0 4px 0' }}>{selected.year}</p>}
            <p style={{ fontFamily: "'Micro 5', sans-serif", fontSize: 26, lineHeight: 'normal', color: '#0055ff', margin: '0 0 12px 0' }}>{selected.title}</p>
            <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 13, color: '#ccc', lineHeight: 1.65, margin: '0 0 18px 0' }}>{selected.description}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {selected.tags.map((tag, i) => (
                <span key={i} style={{ background: 'transparent', border: '1px solid #0055ff44', color: '#0055ff', fontFamily: "'Libre Baskerville', serif", fontSize: 11, borderRadius: 0, padding: '3px 10px' }}>{tag}</span>
              ))}
            </div>

            {selected.link && (
              <a href={selected.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0055ff', color: '#fff', fontFamily: "'Libre Baskerville', serif", fontSize: 12, borderRadius: 0, padding: '9px 20px', textDecoration: 'none' }}>
                view project
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
