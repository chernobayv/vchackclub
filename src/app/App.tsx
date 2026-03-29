import img6110SuT8RtLAcUf8941000Ql801 from "figma:asset/a0b79572e3ab20f90f163e3869b3b3343bad538f.png";
import imgRectangle1 from "figma:asset/041b2ecc686b9b8a941df9633a61ba324ba20b7f.png";
import imgRectangle3 from "figma:asset/23c8ce0ed56ad1c46fc082b99ab21776b5998244.png";
import imgRectangle4 from "figma:asset/8fec549ee59961956bb06e58cfd6ac09bbbc05a5.png";
import imgRectangle5 from "figma:asset/bfffe657676548c91148732c2616f59cc8a94456.png";
import imgRectangle8 from "figma:asset/1e3fdb351c2f0fbc6f6451b2fc1fa69c7e5a7ab5.png";
import imgRectangle9 from "figma:asset/a58cecb386e2cf2be3cf37a6c8f4cc3b1249b548.png";
import imgRectangle10 from "figma:asset/1dbf2924a56d181236b26e0d9f822d17920c0816.png";
import imgRectangle11 from "figma:asset/cf81a5e82ecb23f56a2d306060bcd71ba7a6dd13.png";
import imgRectangle12 from "figma:asset/76b00779a96dacfb5f3ace14cbe44a8b57ac8c6e.png";
import imgRectangle6 from "figma:asset/bbdca5405b5ec315b0b5cac0283212740f925695.png";
import imgRectangle7 from "figma:asset/2c265214322b426384d1d8c38ff6415679b2d0dd.png";
import imgOrpheusGoesToFirstRobotics1 from "figma:asset/dda44f08c2f529dc432b51c3a4e99c5c59607f08.png";
import imgFirstCoBrandedNoEarsSticker11 from "figma:asset/f162ddb621d38e78a00fbf851850bf9fa945961e.png";
import imgRectangle13 from "figma:asset/43d7500486bcea0a03cf77bc5cadb2a6977e4fd5.png";
import imgImage1 from "figma:asset/8da636cd48757d7d2dfc98cf320facd8a339fad9.png";
import imgRectangle15 from "figma:asset/d43ea4e36fb5faeae13cd4fd494284c83b434eb4.png";
import imgRectangle22 from "figma:asset/07a1428728f3386f87417370f84b746ef950a690.png";
import { Minesweeper } from './components/Minesweeper';
import { VictoriaAI } from './components/VictoriaAI';
import { ProjectsGrid } from './components/ProjectsGrid';
import { DraggableImageGrid, PhotoItem } from './components/DraggableImageGrid';

const GRID_LEFT = 108;
const GRID_TOP = 748;
const GRID_W = 597;
const GRID_H = 620;

const photos: PhotoItem[] = [
  { id:'r3', src:imgRectangle3, alt:'FRC photo', initialX:0, initialY:0, outerW:247.977, outerH:171.764, rotation:-4.01, innerW:237.69, innerH:155.537, hasBg:true, imgH:'95.04%', imgL:'1.35%', imgT:'2.42%', imgW:'97.31%' },
  { id:'r4', src:imgRectangle4, alt:'FRC photo', initialX:364, initialY:14, outerW:233, outerH:165.657, rotation:3.45, innerW:224.235, innerH:152.443, hasBg:true, imgH:'95.04%', imgL:'1.35%', imgT:'2.42%', imgW:'97.31%' },
  { id:'r5', src:imgRectangle5, alt:'FRC photo', initialX:79, initialY:255, outerW:182.158, outerH:232.181, rotation:3.45, innerW:169.084, innerH:222.411, hasBg:true, imgH:'94.64%', imgL:'3.82%', imgT:'2.91%', imgW:'93.79%' },
  { id:'r8', src:imgRectangle8, alt:'FRC photo', initialX:23, initialY:136, outerW:216.706, outerH:169.475, rotation:-7.21, innerW:200.022, innerH:145.519, hasBg:true, imgH:'95.04%', imgL:'1.35%', imgT:'2.42%', imgW:'97.31%' },
  { id:'r9', src:imgRectangle9, alt:'FRC photo', initialX:184.78, initialY:20.17, outerW:194.644, outerH:151.096, rotation:6.39, innerW:181.103, innerH:131.755, hasBg:true, imgH:'95.04%', imgL:'1.35%', imgT:'2.42%', imgW:'97.31%' },
  { id:'r10', src:imgRectangle10, alt:'FRC photo', initialX:262.46, initialY:323.34, outerW:156.37, outerH:118.219, rotation:6.39, innerW:145.854, innerH:102.621, hasBg:true, useCover:true, borderPx:3, borderInset:'-3px' },
  { id:'r11', src:imgRectangle11, alt:'FRC photo', initialX:263, initialY:443, outerW:119.595, outerH:122.61, rotation:-8.49, innerW:104.753, innerH:108.336, hasBg:true, imgH:'242.41%', imgL:'-6.31%', imgT:'-90.41%', imgW:'115.94%', borderPx:3, borderInset:'0px' },
  { id:'r12', src:imgRectangle12, alt:'FRC photo', initialX:350, initialY:165, outerW:246.79, outerH:186.764, rotation:-3.72, innerW:236.13, innerH:171.788, hasBg:true, imgH:'228.07%', imgL:'-0.19%', imgT:'-108.58%', imgW:'124.39%', borderPx:5, borderInset:'0px' },
  { id:'r6', src:imgRectangle6, alt:'FRC photo', initialX:389, initialY:384, outerW:198.98, outerH:207.046, rotation:6.62, innerW:178.52, innerH:187.708, hasBg:true, imgH:'211%', imgL:'2.01%', imgT:'-38.28%', imgW:'96%' },
  { id:'r7', src:imgRectangle7, alt:'FRC photo', initialX:3, initialY:416, outerW:205.94, outerH:168.79, rotation:-12.85, innerW:181.166, innerH:131.801, hasBg:true, imgH:'95.04%', imgL:'1.35%', imgT:'2.42%', imgW:'97.31%' },
  { id:'orpheus', src:imgOrpheusGoesToFirstRobotics1, alt:'Orpheus sticker', initialX:170, initialY:443, outerW:119.2, outerH:129.935, rotation:9.27, innerW:102, innerH:115, isSticker:true },
  { id:'first', src:imgFirstCoBrandedNoEarsSticker11, alt:'FIRST sticker', initialX:289, initialY:131, outerW:115.713, outerH:117.282, rotation:11.31, innerW:98, innerH:100, isSticker:true },
];

export default function App() {
  return (
    <div style={{ background: '#1c1c1c', width: '100%', maxWidth: '100vw', position: 'relative', overflowX: 'hidden' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 673, overflow: 'hidden' }}>
        {/* Rotated banner accent strip */}
        <div style={{ position: 'absolute', left: '50%', top: 87, transform: 'translateX(80px)', width: 609, height: 525, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ transform: 'rotate(90deg)' }}>
            <div style={{ height: 609, width: 525, position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <img alt="" style={{ position: 'absolute', height: '145.94%', left: '-44.19%', maxWidth: 'none', top: '-17.67%', width: '225.68%' }} src={imgRectangle1} />
              </div>
            </div>
          </div>
        </div>

        {/* Intro text — right side, clamped for desktop */}
        <div style={{ position: 'absolute', left: '50%', top: 279, width: 'min(426px, 44vw)', fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(16px, 1.4vw, 20px)', color: '#0055ff', lineHeight: 1.55 }}>
          <p style={{ margin: 0 }}>After the hack club interview, I knew I needed to send links to my projects. What better way than to show you what I can do and send them in a custom portfolio?</p>
          <br />
          <p style={{ margin: 0 }}>Scroll to learn more about why im the perfect hacker for the job! :)</p>
        </div>
      </div>

      {/* ── FRC SECTION ──────────────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 700 }}>
        {/* Laptop image */}
        <div style={{ position: 'absolute', height: 739, left: 47, top: 0, width: 738, pointerEvents: 'none' }}>
          <img alt="" style={{ position: 'absolute', inset: 0, maxWidth: 'none', objectFit: 'cover', width: '100%', height: '100%' }} src={img6110SuT8RtLAcUf8941000Ql801} />
        </div>

        {/* Draggable photo grid */}
        <DraggableImageGrid photos={photos} gridLeft={GRID_LEFT} gridTop={0} gridW={GRID_W} gridH={GRID_H} />

        {/* FRC text block — desktop: anchored to right half */}
        <div style={{ position: 'absolute', left: 'calc(55%)', top: 26, width: 'min(430px, 42vw)', fontFamily: "'Libre Baskerville', serif", color: '#0055ff', fontSize: 0 }}>
          <p style={{ fontFamily: "'Micro 5', sans-serif", fontSize: 'clamp(36px, 3.5vw, 48px)', lineHeight: 'normal', margin: '0 0 0 0', color: '#0055ff' }}>FRC 9262:</p>
          <br />
          <p style={{ fontSize: 'clamp(15px, 1.3vw, 20px)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
            One of my biggest (and favorite) projects would be frc 9262, I single-handedly ran and managed a student-led robotics team with 100+ people in and out, winning rookie of the year in 23' and 10th in the province in 24'
          </p>
          <p style={{ fontSize: 'clamp(15px, 1.3vw, 20px)', margin: '0 0 8px 0' }}>what did I do?</p>
          <ul style={{ fontSize: 'clamp(15px, 1.3vw, 20px)', lineHeight: 1.75, paddingLeft: 22, margin: 0, listStyleType: 'disc', listStylePosition: 'outside' }}>
            <li>founder &amp; president for 3 years</li>
            <li>ran electrical, computer vision, strategy</li>
            <li>created swag including hoodie design</li>
            <li>marketing for club &amp; team meeting</li>
            <li>helped run the Girls in STEM event running workshops with 150 attendees</li>
            <li>spoke at the TD Synnex Gala raising $300,000 for FIRST + Kids Help Phone</li>
          </ul>
          <p style={{ fontSize: 'clamp(13px, 1.1vw, 17px)', margin: '16px 0 0 0', opacity: 0.7 }}>{'< move around the images :)'}</p>
        </div>
      </div>

      {/* ── MINESWEEPER SECTION ───────────────────────────────────── */}
      <div style={{ position: 'relative', minHeight: 940 }}>
        {/* Game background */}
        <div style={{ position: 'absolute', height: 874, left: '50%', top: 40, transform: 'translateX(-50%)', width: 804, overflow: 'hidden' }}>
          <img alt="" style={{ position: 'absolute', height: '100%', left: '-26.89%', maxWidth: 'none', top: 0, width: '154.61%', pointerEvents: 'none' }} src={imgRectangle13} />
        </div>

        {/* Minesweeper shell + GitHub button — grouped together, centered */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 74, gap: 0 }}>
          {/* Outer frame that holds both minesweeper and button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '3px solid #0055ff', background: '#111' }}>
            {/* Minesweeper */}
            <div style={{ width: 566, height: 392 }}>
              <Minesweeper />
            </div>

            {/* Divider */}
            <div style={{ width: '100%', height: 1, background: '#0055ff44' }} />

            {/* GitHub button — attached to bottom of minesweeper frame */}
            <a
              href="https://github.com/chernobayv/minesweeper/blob/main/ChernobayVictoriaInstructionManual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 52,
                textDecoration: 'none',
                background: 'transparent',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0055ff18'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <span style={{ fontFamily: "'Libre Baskerville', serif", color: '#0055ff', fontSize: 18, lineHeight: 'normal' }}>
                open github
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── PROJECTS + VICTORIA AI ───────────────────────────────── */}
      <div style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* Section title */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ width: 'min(462px, 80vw)', height: 62 }}>
            <img alt="" style={{ maxWidth: 'none', objectFit: 'cover', width: '100%', height: '100%', pointerEvents: 'none' }} src={imgImage1} />
          </div>
        </div>

        {/* Two columns — responsive, centered with max-width */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          paddingLeft: 40,
          paddingRight: 40,
          maxWidth: 1200,
          margin: '0 auto',
          boxSizing: 'border-box',
        }}>
          <div style={{ flex: '0 0 613px', maxWidth: 613, height: 675 }}>
            <ProjectsGrid />
          </div>
          <div style={{ flex: '0 0 402px', maxWidth: 402, height: 675 }}>
            <VictoriaAI />
          </div>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 48,
        paddingBottom: 60,
        width: '100%',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 20, color: 'white', marginBottom: 32, textAlign: 'center', width: '100%' }}>
          where else can you find me?
        </p>

        {/* Social icon row — centered */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 48, width: '100%' }}>
          {[
            { h: '750.87%', l: '-79.33%', t: '-96.58%', w: '1001.16%' },
            { h: '671.78%', l: '-275.31%', t: '-94.16%', w: '895.7%' },
            { h: '478.95%', l: '-328.24%', t: '-46.77%', w: '638.6%' },
            { h: '358.05%', l: '-349.04%', t: '-38.91%', w: '477.4%' },
          ].map((s, i) => (
            <div key={i} style={{ width: 75, height: 75, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
              <img alt="" style={{ position: 'absolute', height: s.h, left: s.l, maxWidth: 'none', top: s.t, width: s.w, pointerEvents: 'none' }} src={imgRectangle15} />
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 20, color: 'white', textAlign: 'center', maxWidth: 969, lineHeight: 1.6, marginBottom: 40, padding: '0 20px' }}>
          Portfolio made with figma, java, html, css &amp; handdrawn by me! With some help from figma make and framer
        </p>

        <div style={{ width: 'min(592px, 90vw)', height: 217, position: 'relative', overflow: 'hidden' }}>
          <img alt="" style={{ position: 'absolute', height: '280.75%', left: '-7.68%', maxWidth: 'none', top: '-145.49%', width: '131.91%', pointerEvents: 'none' }} src={imgRectangle22} />
        </div>
      </footer>

    </div>
  );
}
