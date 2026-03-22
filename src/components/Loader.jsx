// src/components/Loader.jsx
import React, { useEffect, useRef } from 'react';

/**
 * M-shape light trail loader
 * A light head races along the M letterform, leaving a
 * purple→teal gradient tail. Three orbiting glow dots and
 * an outer particle ring complete the effect.
 *
 * Props:
 *   size     {number}  Canvas size in px        (default 200)
 *   speed    {number}  Trail speed multiplier    (default 1)
 *   label    {string}  Status text below loader  (default 'Loading...')
 *   labels   {Array}   Cycling label array       (overrides label)
 *   labelInterval {number} ms between label changes (default 1800)
 *   className {string} Extra classes on wrapper
 */
export default function Loader({
  size          = 100,
  speed         = 6,
  label         = 'Loading...',
  labels        = null,
  labelInterval = 1800,
  className     = '',
}) {
  const canvasRef = useRef(null);
  const labelRef  = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W   = canvas.width  = size;
    const H   = canvas.height = size;
    const cx  = W / 2;
    const cy  = H / 2;

    /* ── Palette ──────────────────────────────────────────── */
    const PURPLE = [168, 85,  247];
    const TEAL   = [45,  212, 191];
    const PINK   = [236, 72,  153];

    /* ── M shape: 5 control points ───────────────────────── */
    const S  = size * 0.36;          // shape scale
    const raw = [
      [-S,  S],   // bottom-left
      [-S, -S],   // top-left
      [ 0,  0],   // mid-dip
      [ S, -S],   // top-right
      [ S,  S],   // bottom-right
    ];
    const pts = raw.map(([x, y]) => [cx + x, cy + y]);

    /* ── Polyline interpolation ───────────────────────────── */
    function polyPoint(t) {
      const segs  = pts.length - 1;
      const total = t * segs;
      const idx   = Math.min(Math.floor(total), segs - 1);
      const frac  = total - idx;
      const [ax, ay] = pts[idx];
      const [bx, by] = pts[idx + 1];
      return [ax + (bx - ax) * frac, ay + (by - ay) * frac];
    }

    /* ── Config ───────────────────────────────────────────── */
    const TRAIL_LEN = 60;
    const BASE_SPEED = 0.0038 * speed;
    const RING_N     = 20;
    const RING_R     = size * 0.46;
    const ORBIT_R    = size * 0.25;

    /* ── Outer ring particles ─────────────────────────────── */
    const ring = Array.from({ length: RING_N }, (_, i) => ({
      angle: (i / RING_N) * Math.PI * 2,
      spd:   0.007 + Math.random() * 0.005,
      sz:    0.9 + Math.random() * 1.3,
      col:   [PURPLE, TEAL, PINK][i % 3],
      phase: Math.random() * Math.PI * 2,
    }));

    /* ── Three orbiting glow dots ─────────────────────────── */
    const orbits = [
      { r: ORBIT_R, spd:  0.024, col: PURPLE, a: 0                  },
      { r: ORBIT_R, spd: -0.019, col: TEAL,   a: Math.PI * 0.667    },
      { r: ORBIT_R, spd:  0.016, col: PINK,   a: Math.PI * 1.333    },
    ];

    let t     = 0;
    let trail = [];
    let frame = 0;
    let raf;

    /* ── Label cycling ────────────────────────────────────── */
    let labelTimer;
    if (labels && labels.length > 1 && labelRef.current) {
      let li = 0;
      labelTimer = setInterval(() => {
        li = (li + 1) % labels.length;
        if (labelRef.current) labelRef.current.textContent = labels[li];
      }, labelInterval);
    }

    /* ── Draw ─────────────────────────────────────────────── */
    function draw() {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      frame++;

      /* Ghost M path */
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.strokeStyle = 'rgba(32, 0, 61, 0.26)';
      ctx.lineWidth   = 2.5;
      ctx.lineJoin    = 'round';
      ctx.lineCap     = 'round';
      ctx.stroke();

      /* Advance head */
      t = (t + BASE_SPEED) % 1;
      const [hx, hy] = polyPoint(t);
      trail.push({ x: hx, y: hy });
      if (trail.length > TRAIL_LEN) trail.shift();

      /* Trail segments */
      for (let i = 1; i < trail.length; i++) {
        const p  = i / trail.length;
        const rr = Math.round(PURPLE[0] + (TEAL[0] - PURPLE[0]) * p);
        const gg = Math.round(PURPLE[1] + (TEAL[1] - PURPLE[1]) * p);
        const bb = Math.round(PURPLE[2] + (TEAL[2] - PURPLE[2]) * p);
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x,     trail[i].y);
        ctx.strokeStyle = `rgba(${rr},${gg},${bb},${p * 0.9})`;
        ctx.lineWidth   = 1.5 + p * (size * 0.022);
        ctx.lineCap     = 'round';
        ctx.stroke();
      }

      /* Head outer glow */
      const glowSize = size * 0.11;
      const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, glowSize);
      grd.addColorStop(0,   'rgba(168,85,247,1)');
      grd.addColorStop(0.35,'rgba(45,212,191,0.7)');
      grd.addColorStop(1,   'rgba(168,85,247,0)');
      ctx.beginPath();
      ctx.arc(hx, hy, glowSize, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      /* Head bright core */
      ctx.beginPath();
      ctx.arc(hx, hy, size * 0.018, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();

      /* Outer ring particles */
      ring.forEach(p => {
        p.angle += p.spd;
        const px  = cx + Math.cos(p.angle) * RING_R;
        const py2 = cy + Math.sin(p.angle) * RING_R;
        const pulse = 0.35 + 0.65 * Math.abs(Math.sin(frame * 0.04 + p.phase));
        const [r, g, b] = p.col;
        ctx.beginPath();
        ctx.arc(px, py2, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${pulse})`;
        ctx.fill();
      });

      /* Orbiting glow dots */
      orbits.forEach(o => {
        o.a += o.spd;
        const ox = cx + Math.cos(o.a) * o.r;
        const oy = cy + Math.sin(o.a) * o.r;
        const [r, g, b] = o.col;
        const og = ctx.createRadialGradient(ox, oy, 0, ox, oy, size * 0.042);
        og.addColorStop(0, `rgba(${r},${g},${b},0.9)`);
        og.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(ox, oy, size * 0.042, 0, Math.PI * 2);
        ctx.fillStyle = og;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(ox, oy, size * 0.013, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},1)`;
        ctx.fill();
      });

      /* Centre M watermark */
      ctx.font       = `900 ${size * 0.14}px Syne, sans-serif`;
      ctx.textAlign  = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle  = 'rgba(168,85,247,0.12)';
      ctx.fillText('M', cx, cy);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(labelTimer);
    };
  }, [size, speed, labels, labelInterval]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${className}`}
      style={{ background: 'var(--color-bg-primary, #000000)' }}
      role="status"
      aria-label="Loading"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        style={{ display: 'block' }}
      />

      {/* Animated label */}
      <p
        ref={labelRef}
        style={{
          marginTop: '1.5rem',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(168,85,247,0.55)',
          animation: 'loaderLabelPulse 2s ease-in-out infinite',
        }}
      >
        {labels ? labels[0] : label}
      </p>

      <style>{`
        @keyframes loaderLabelPulse {
          0%,100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }
      `}</style>
    </div>
  );
}