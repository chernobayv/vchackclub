import { useState, useEffect, useCallback, useRef } from 'react';

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  // Outer flex container position, relative to grid origin
  initialX: number;
  initialY: number;
  outerW: number;
  outerH: number;
  // Inner element (rotated)
  rotation: number;
  innerW: number;
  innerH: number;
  // Stickers: just a plain <img>, no bg/border
  isSticker?: boolean;
  // Regular photos: bg + overflow + percentage-positioned img
  hasBg?: boolean;
  imgH?: string;
  imgL?: string;
  imgT?: string;
  imgW?: string;
  useCover?: boolean; // fallback when Figma export percentages are broken
  // Optional border overlay on top of image
  borderPx?: number;
  borderInset?: string; // e.g. '0px' or '-3px'
};

type Props = {
  photos: PhotoItem[];
  gridLeft: number;
  gridTop: number;
  gridW: number;
  gridH: number;
};

export function DraggableImageGrid({ photos, gridLeft, gridTop, gridW, gridH }: Props) {
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const init: Record<string, { x: number; y: number }> = {};
    photos.forEach(p => { init[p.id] = { x: p.initialX, y: p.initialY }; });
    return init;
  });

  const [zOrder, setZOrder] = useState<string[]>(photos.map(p => p.id));

  const dragRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    outerW: number;
    outerH: number;
  } | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent, photo: PhotoItem) => {
    e.preventDefault();
    const pos = positions[photo.id];
    dragRef.current = {
      id: photo.id,
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
      outerW: photo.outerW,
      outerH: photo.outerH,
    };
    setZOrder(prev => [...prev.filter(id => id !== photo.id), photo.id]);
  }, [positions]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const { id, startX, startY, origX, origY, outerW, outerH } = dragRef.current;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const x = Math.max(0, Math.min(origX + dx, gridW - outerW));
      const y = Math.max(0, Math.min(origY + dy, gridH - outerH));
      setPositions(prev => ({ ...prev, [id]: { x, y } }));
    };
    const onUp = () => { dragRef.current = null; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [gridW, gridH]);

  return (
    <div
      style={{
        position: 'absolute',
        left: gridLeft,
        top: gridTop,
        width: gridW,
        height: gridH,
        overflow: 'hidden',
      }}
    >
      {zOrder.map((id, zIdx) => {
        const p = photos.find(ph => ph.id === id)!;
        const pos = positions[id];
        return (
          <div
            key={id}
            onMouseDown={e => handleMouseDown(e, p)}
            style={{
              position: 'absolute',
              left: pos.x,
              top: pos.y,
              width: p.outerW,
              height: p.outerH,
              zIndex: zIdx + 1,
              cursor: 'grab',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
            }}
          >
            {/* Rotated inner element — matches Figma's flex-none rotate-[X] wrapper */}
            <div style={{ flexShrink: 0, transform: `rotate(${p.rotation}deg)` }}>
              {p.isSticker ? (
                /* Sticker: plain image, no bg, no border */
                <div style={{ position: 'relative', width: p.innerW, height: p.innerH }}>
                  <img
                    src={p.src}
                    alt={p.alt}
                    draggable={false}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                      maxWidth: 'none',
                    }}
                  />
                </div>
              ) : (
                /* Regular photo: bg + overflow-hidden + percentage-positioned img + optional border */
                <div style={{ position: 'relative', width: p.innerW, height: p.innerH }}>
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    {p.hasBg && (
                      <div style={{ position: 'absolute', inset: 0, background: '#d9d9d9' }} />
                    )}
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
                      {p.useCover ? (
                        <img
                          src={p.src}
                          alt={p.alt}
                          draggable={false}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                        />
                      ) : (
                        <img
                          src={p.src}
                          alt={p.alt}
                          draggable={false}
                          style={{
                            position: 'absolute',
                            height: p.imgH,
                            left: p.imgL,
                            top: p.imgT,
                            width: p.imgW,
                            maxWidth: 'none',
                            pointerEvents: 'none',
                          }}
                        />
                      )}
                    </div>
                  </div>
                  {/* Optional border overlay — matches Figma's `border-N border-[#d9d9d9]` overlay div */}
                  {p.borderPx != null && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: p.borderInset ?? '0px',
                        border: `${p.borderPx}px solid #d9d9d9`,
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
