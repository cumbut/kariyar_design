/* Kariyar video — shared visual parts. All motion goes through MOTION. */
const KV = {
  ink: '#0f0f35', deep: '#15163d', tab: '#1a1a4a', iris: '#484b73', white: '#ffffff', charcoal: '#262626', steel: '#737373', hair: '#e4e7eb',
  blue: '#408fed', violet: '#3e1bc9', nebula: '#3655e5', purple: '#5a3f99', lav: '#f2dbf5', sun: '#fff0d8', polar: '#e0eafc', mint: '#e4f6f4', star: '#ffc53d', muted: '#c4c4d4',
  skin: '#6e4328', skinDark: '#4f2e19', aurora: 'radial-gradient(ellipse 70% 60% at 50% 45%, #2a2470 0%, #1c1a55 30%, #0f0f35 65%, #15163d 100%)',
};
const MOTION = {
  // fade + rise in over [start, start+dur]
  enter(T, start, dur = 0.6, dist = 24) { const p = clamp((T - start) / dur, 0, 1); const e = Easing.easeOutCubic(p); return { opacity: e, transform: `translateY(${(1 - e) * dist}px)` }; },
  // 0..1 progress with smooth ease, for drawing/moving/camera
  draw(T, start, dur = 1) { return Easing.easeInOutCubic(clamp((T - start) / dur, 0, 1)); },
  // scale pop with overshoot
  pop(T, start, dur = 0.5) { const p = clamp((T - start) / dur, 0, 1); const e = Easing.easeOutBack(p); return { opacity: Math.min(1, p * 3), transform: `scale(${e})` }; },
};
const fadeOut = (T, start, dur = 0.5) => 1 - clamp((T - start) / dur, 0, 1);

/* Illustrated figure: simple shapes, no face. pose: 'sit' | 'walk'. step drives leg swing. */
function Figure({ pose = 'sit', step = 0, glow = 0, style }) {
  const swing = Math.sin(step * Math.PI * 2) * 14;
  return (
    <svg viewBox="0 0 200 320" width="200" height="320" style={{ overflow: 'visible', ...style }}>
      {pose === 'sit' ? (<>
        <ellipse cx="100" cy="300" rx="82" ry="14" fill="rgba(0,0,0,.3)"></ellipse>
        <path d="M36 300 L46 196 Q100 172 154 196 L164 300 Z" fill={KV.violet}></path>
        <path d="M36 300 L46 196 Q100 172 154 196 L164 300 Z" fill="url(#kvCloth)" opacity=".14"></path>
        <rect x="38" y="252" width="124" height="50" rx="16" fill="#2d14a0"></rect>
        <path d="M58 206 Q100 150 144 206 L150 262 Q100 282 50 262 Z" fill={KV.purple}></path>
        <path d="M60 230 Q76 262 96 258 L100 236 Z" fill={KV.skin}></path>
        <path d="M140 230 Q124 262 104 258 L100 236 Z" fill={KV.skin}></path>
        <rect x="86" y="222" width="28" height="42" rx="6" fill={KV.ink} stroke={KV.iris} strokeWidth="2"></rect>
        <rect x="90" y="228" width="20" height="30" rx="3" fill="#9cc6ff" opacity={0.6 + glow * 0.4}></rect>
        <path d="M48 120 Q100 40 152 120 L160 215 L40 215 Z" fill={KV.purple}></path>
        <ellipse cx="100" cy="104" rx="54" ry="62" fill={KV.purple}></ellipse>
        <path d="M62 120 Q100 150 138 120 L148 215 L52 215 Z" fill="#4a3384"></path>
        <ellipse cx="100" cy="112" rx="33" ry="40" fill={KV.skin}></ellipse>
        <ellipse cx="100" cy="128" rx="28" ry="20" fill="#8fbcff" opacity={0.18 + glow * 0.14}></ellipse>
        <path d="M80 100 Q87 95 94 99" stroke={KV.skinDark} strokeWidth="2.4" fill="none" strokeLinecap="round"></path>
        <path d="M106 99 Q113 95 120 100" stroke={KV.skinDark} strokeWidth="2.4" fill="none" strokeLinecap="round"></path>
        <path d="M81 110 Q88 106 95 110 Q88 116 81 110 Z" fill="#f3efe9"></path>
        <path d="M105 110 Q112 106 119 110 Q112 116 105 110 Z" fill="#f3efe9"></path>
        <circle cx="88.5" cy="112" r="2.6" fill="#1a120c"></circle>
        <circle cx="111.5" cy="112" r="2.6" fill="#1a120c"></circle>
        <path d="M100 118 L97 130 L103 130" stroke={KV.skinDark} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M93 140 Q100 143 107 140" stroke="#3a1f12" strokeWidth="2.2" fill="none" strokeLinecap="round"></path>
        <defs><pattern id="kvCloth" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="1.8" fill="#fff"></circle></pattern></defs>
      </>) : (<>
        <ellipse cx="100" cy="312" rx="56" ry="10" fill="rgba(0,0,0,.18)"></ellipse>
        <path d={`M72 180 L${62 - swing} 306 L${82 - swing} 306 L92 200 Z`} fill="#2d14a0"></path>
        <path d={`M128 180 L${118 + swing} 306 L${138 + swing} 306 L108 200 Z`} fill={KV.violet}></path>
        <path d="M66 112 L46 304 L154 304 L134 112 Z" fill={KV.violet}></path>
        <path d="M64 108 Q100 70 136 108 L140 190 L60 190 Z" fill={KV.purple}></path>
        <path d={`M70 130 L${56 - swing * .4} 215 L${68 - swing * .4} 218 L86 150 Z`} fill={KV.skin}></path>
        <path d={`M130 130 L${144 + swing * .4} 215 L${132 + swing * .4} 218 L114 150 Z`} fill={KV.skin}></path>
        <ellipse cx="100" cy="64" rx="44" ry="50" fill={KV.purple}></ellipse>
        <ellipse cx="100" cy="70" rx="27" ry="32" fill={KV.skin}></ellipse>
      </>)}
    </svg>
  );
}

/* Smartphone frame; children = screen content (390x800). */
function Phone({ children, style }) {
  return (
    <div style={{ position: 'absolute', width: 420, height: 860, borderRadius: 56, background: '#0a0a0a', boxShadow: '0 40px 120px rgba(0,0,0,.55), inset 0 0 0 2px #2a2a3a', ...style }}>
      <div style={{ position: 'absolute', inset: 15, borderRadius: 42, overflow: 'hidden', background: KV.white, fontFamily: 'var(--font-inter)', color: KV.charcoal }}>
        {children}
        <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 110, height: 30, borderRadius: 20, background: '#0a0a0a' }}></div>
      </div>
    </div>
  );
}

/* Basic feature phone with USSD screen */
function BasicPhone({ text, style }) {
  return (
    <div style={{ position: 'absolute', width: 300, height: 600, borderRadius: 34, background: '#1d1d22', boxShadow: '0 30px 80px rgba(0,0,0,.5), inset 0 0 0 2px #35353f', fontFamily: 'var(--font-inter)', ...style }}>
      <div style={{ position: 'absolute', left: 26, right: 26, top: 40, height: 220, borderRadius: 10, background: '#dfe9c9', color: '#1d2a10', padding: 16, font: '600 17px/1.5 var(--font-inter)', whiteSpace: 'pre-wrap' }}>{text}</div>
      <div style={{ position: 'absolute', left: 32, right: 32, top: 290, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => <div key={k} style={{ height: 50, borderRadius: 12, background: '#2c2c33', color: '#e6e6ee', display: 'grid', placeItems: 'center', font: '600 20px var(--font-inter)' }}>{k}</div>)}
      </div>
    </div>
  );
}

/* App chrome bits */
function KLogo({ size = 22, light = false, style }) {
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * .4, font: `700 ${size}px/1 var(--font-inter)`, letterSpacing: -size * .03, color: light ? KV.white : KV.ink, ...style }}><i className="ph-fill ph-shield-check" style={{ fontSize: size * 1.15, color: light ? KV.blue : KV.violet }}></i>Kariyar</div>;
}
function TopBar({ title, sub, light }) {
  return <div style={{ height: 96, padding: '46px 20px 0', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${KV.hair}` }}>
    <i className="ph ph-caret-left" style={{ fontSize: 22 }}></i>
    <div style={{ flex: 1 }}><div style={{ font: '600 18px/1.2 var(--font-inter)', color: KV.ink }}>{title}</div>{sub && <div style={{ font: '400 13px/1.3 var(--font-inter)', color: KV.steel }}>{sub}</div>}</div>
    <div style={{ height: 32, padding: '0 12px', borderRadius: 999, background: KV.polar, color: KV.ink, font: '600 12px/32px var(--font-inter)' }}>Leave</div>
  </div>;
}
function Bubble({ me, children, T, at, source, style }) {
  const m = MOTION.enter(T, at, 0.5, 16);
  return <div style={{ alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '84%', padding: '12px 16px', borderRadius: me ? '20px 20px 6px 20px' : '20px 20px 20px 6px', background: me ? KV.violet : KV.polar, color: me ? KV.white : KV.charcoal, font: '400 16px/1.45 var(--font-inter)', ...m, ...style }}>
    {children}
    {source && <div style={{ marginTop: 10, paddingTop: 8, borderTop: `1px solid rgba(15,15,53,.12)`, font: '500 11.5px/1.3 var(--font-inter)', color: KV.steel, display: 'flex', gap: 6, alignItems: 'center' }}><i className="ph ph-seal-check"></i>{source}</div>}
  </div>;
}
function Typing({ T, from, to }) {
  if (T < from || T >= to) return null;
  const k = Math.floor(T * 4) % 3;
  return <div style={{ alignSelf: 'flex-start', padding: '12px 16px', borderRadius: '20px 20px 20px 6px', background: KV.polar, display: 'flex', gap: 6 }}>{[0, 1, 2].map(i => <i key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: KV.purple, opacity: i === k ? 1 : .35 }}></i>)}</div>;
}
function Chip({ children, primary, icon, style }) {
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 16px', borderRadius: 999, background: primary ? KV.ink : KV.white, color: primary ? KV.white : KV.ink, border: primary ? 0 : `1px solid ${KV.hair}`, font: '600 14px/1 var(--font-inter)', whiteSpace: 'nowrap', ...style }}>{icon && <i className={'ph ph-' + icon} style={{ fontSize: 16 }}></i>}{children}</div>;
}
/* Tap ripple at a point in screen coords */
function Tap({ T, at, x, y }) {
  const p = clamp((T - at) / 0.6, 0, 1); if (p <= 0 || p >= 1) return null;
  return <div style={{ position: 'absolute', left: x, top: y, width: 70, height: 70, marginLeft: -35, marginTop: -35, borderRadius: '50%', border: `3px solid ${KV.blue}`, transform: `scale(${0.3 + p})`, opacity: 1 - p, pointerEvents: 'none' }}></div>;
}

Object.assign(window, { KV, MOTION, fadeOut, Figure, Phone, BasicPhone, KLogo, TopBar, Bubble, Typing, Chip, Tap });
