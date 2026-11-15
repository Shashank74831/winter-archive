import { useRef } from 'react';
import './ChromaGrid.css';

const ChromaGrid = ({ items, className = '', radius = 300, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
  const rootRef = useRef(null);
  const setX = (el, x) => el.style.setProperty('--x', `${x}px`);
  const setY = (el, y) => el.style.setProperty('--y', `${y}px`);

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    rootRef.current.querySelectorAll('.chroma-card').forEach(card => {
      const cr = card.getBoundingClientRect();
      const cx = cr.left - r.left + cr.width / 2;
      const cy = cr.top - r.top + cr.height / 2;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist / radius);
      card.style.setProperty('--opacity', (t * fadeOut).toFixed(2));
      setX(card, dx * damping);
      setY(card, dy * damping);
    });
  };

  return (
    <div ref={rootRef} onMouseMove={handleMove} className={`chroma-grid ${className}`}>
      {items.map((c, i) => (
        <article key={i} className="chroma-card" style={{ '--border': c.borderColor || '#fff', '--gradient': c.gradient }}>
          <div className="chroma-img-wrapper"><img src={c.image} alt={c.title} loading="lazy" /></div>
          <footer className="chroma-info"><h3>{c.title}</h3><p>{c.subtitle}</p><span>{c.handle}</span></footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;