'use client';
import React from 'react';

const KSLang = React.createContext({ lang: 'en', tx: (e) => e });
const useKS = () => React.useContext(KSLang);
const KS_HIJAB = 'M100 26 C142 26 160 60 158 98 C157 128 168 158 180 196 Q100 218 20 196 C32 158 43 128 42 98 C40 60 58 26 100 26 Z';
const KS_SKIN = ['#8a5636', '#6b4128', '#a7704a'];

function useInView(ref, threshold = 0.35) {
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setV(e.isIntersecting), { threshold });
    io.observe(el); return () => io.disconnect();
  }, []);
  return v;
}

// cycles 0..durations.length-1 while active
function useLoop(active, durations) {
  const [s, setS] = React.useState(0);
  React.useEffect(() => {
    if (!active) { setS(0); return; }
    const t = setTimeout(() => setS((s + 1) % durations.length), durations[s]);
    return () => clearTimeout(t);
  }, [active, s]);
  return s;
}

function Woman({ skin = KS_SKIN[0], hijab = '#1e5b57', cap = '#d6bf9c', dress = '#14201f', pose = 'stand', look = 'front', mood = 'calm', headset = false, screen = '#e0eafc', viewBox = '0 0 200 300', className = '', style, trim }) {
  const ink = '#1c100a';
  const mix = (c, to, p) => ({ fill: `color-mix(in oklch, ${c} ${p}%, ${to})` });
  const hDark = mix(hijab, '#000', 62), hLight = mix(hijab, '#fff', 68), sShade = mix(skin, '#000', 72);
  const arms = pose === 'phone' || pose === 'basic';
  const cy = mood === 'smile' ? 118.5 : mood === 'sad' ? 122 : 120.5;
  const eye = (s) => {
    const X = (x) => (s < 0 ? 200 - x : x);
    if (mood === 'elated') return <path d={`M${X(79)} 93 Q${X(87.5)} 84 ${X(96)} 93`} fill="none" stroke={ink} strokeWidth="2.6" strokeLinecap="round"></path>;
    return look === 'down'
      ? <path d={`M${X(79)} 92 Q${X(87)} 97 ${X(96)} 92`} fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round"></path>
      : <g>
          <path d={`M${X(79)} 91 Q${X(87)} 84.5 ${X(96)} 90.5 Q${X(87)} 96 ${X(79)} 91 Z`} fill="#f2e6d8"></path>
          <circle cx={X(87.5)} cy="90.6" r="3.4" fill="#6a4524"></circle><circle cx={X(87.5)} cy="90.6" r="1.6" fill={ink}></circle>
          <circle cx={X(86.4)} cy="89.4" r=".9" fill="#fff"></circle>
          <path d={`M${X(96.5)} 90 Q${X(87)} 83.5 ${X(78)} 91.5 L${X(75)} 89.4`} fill="none" stroke={ink} strokeWidth="1.7" strokeLinecap="round"></path>
        </g>;
  };
  const brow = mood === 'elated' ? ['M78 79 Q86 72 95 75', 'M122 79 Q114 72 105 75'] : mood === 'sad' ? ['M78 82 Q86 80 95 77.5', 'M122 82 Q114 80 105 77.5'] : ['M78 81 Q86 76.5 95 79', 'M122 81 Q114 76.5 105 79'];
  const ear = (x) => <g><circle cx={x} cy="109" r="2.2" style={mix('#e3b46a', '#000', 85)}></circle><path d={`M${x} 112 Q${x - 5.5} 122 ${x} 133 Q${x + 5.5} 122 ${x} 112 Z`} fill="#e3b46a"></path></g>;
  return (
    <svg viewBox={viewBox} className={'ks-woman ' + className} style={style} aria-hidden="true">
      <g className={mood === 'elated' ? 'ks-breathe ks-joy' : 'ks-breathe'}>
        <path d="M28 214 Q100 188 172 214 L186 300 L14 300 Z" fill={dress}></path>
        <g className="ks-sway">
          <path d="M100 20 C150 20 168 62 166 104 C164 142 174 178 188 218 Q100 242 12 218 C26 178 36 142 34 104 C32 62 50 20 100 20 Z" style={hDark}></path>
          <path d="M100 28 C142 28 158 64 156 102 C154 134 158 162 164 190 Q100 208 36 190 C42 162 46 134 44 102 C42 64 58 28 100 28 Z" fill={hijab}></path>
          <path d="M60 50 C74 30 126 30 140 50" fill="none" style={{ stroke: hLight.fill }} strokeWidth="3" opacity=".5"></path>
          <path d="M100 44 C130 44 144 68 142 102 C140 130 132 152 100 162 C68 152 60 130 58 102 C56 68 70 44 100 44 Z" style={hDark}></path>
          <path d="M88 126 L112 126 L113 160 Q100 166 87 160 Z" style={sShade}></path>
          <path d="M100 56 C121 56 132 72 131 94 C130 116 120 136 100 141 C80 136 70 116 69 94 C68 72 79 56 100 56 Z" fill={skin}></path>
          <path d="M100 57 C80 57 69 72 69 94 C70 116 80 136 100 141 C89 129 84 112 86 96 C88 80 92 67 100 57 Z" style={sShade} opacity=".45"></path>
          <path d="M69 78 C68 50 132 50 131 78 C119 66 81 66 69 78 Z" fill={cap}></path>
          <path d="M74 70 Q100 58 126 70 M77 64 Q100 54 123 64" fill="none" stroke="rgba(0,0,0,.14)" strokeWidth="1.4"></path>
          <path d={brow[0] + ' ' + brow[1]} fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round"></path>
          <g className={look === 'down' ? '' : 'ks-blink'}>{eye(1)}{eye(-1)}</g>
          <path d="M99 95 Q98 105 95 110 Q100 113.5 105 110" fill="none" style={{ stroke: sShade.fill }} strokeWidth="1.8" strokeLinecap="round"></path>
          {mood === 'elated' ? <g>
            <path d="M86 115 Q100 120 114 115 Q112 132 100 134 Q88 132 86 115 Z" fill="#4a1a12"></path>
            <path d="M88 116.2 Q100 120.8 112 116.2 L111 120 Q100 124 89 120 Z" fill="#fbf4ea"></path>
            <path d="M93 129 Q100 126 107 129 Q100 133 93 129 Z" fill="#b8584a"></path>
            <path d="M86 115 Q100 120 114 115 Q112 132 100 134 Q88 132 86 115 Z" fill="none" stroke="#6e3527" strokeWidth="1.6" strokeLinejoin="round"></path>
            <path d="M81 108 q4 3 8 1 M119 108 q-4 3 -8 1" fill="none" style={{ stroke: sShade.fill }} strokeWidth="1.4" strokeLinecap="round"></path>
            <circle cx="80" cy="104" r="6" fill="#ff8a6a" opacity=".22"></circle><circle cx="120" cy="104" r="6" fill="#ff8a6a" opacity=".22"></circle>
          </g> : <g>
          <path d={`M90 ${cy} Q95 116.5 100 118.5 Q105 116.5 110 ${cy} Q100 121.5 90 ${cy} Z`} fill="#6e3527"></path>
          <path d={`M90 ${cy} Q100 ${mood === 'smile' ? 129 : 127} 110 ${cy} Q100 121.5 90 ${cy} Z`} fill="#a4553f"></path>
          <path d="M96 124 Q100 125.5 104 124" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.2" strokeLinecap="round"></path>
          </g>}
          {ear(67)}{ear(133)}
          <path d="M56 146 C80 168 120 168 146 140 C154 162 150 186 132 196 C110 206 82 204 62 194 C50 182 50 162 56 146 Z" fill={hijab}></path>
          <path d="M152 150 C144 188 98 204 34 198 C24 216 30 240 44 254 C104 254 156 230 174 196 C172 178 164 160 152 150 Z" style={hLight}></path>
          <path d="M60 214 C96 222 138 210 164 190" fill="none" style={{ stroke: hijab }} strokeWidth="2.5" opacity=".55"></path>
          <path d="M48 234 C92 240 138 226 168 204" fill="none" style={{ stroke: hijab }} strokeWidth="2" opacity=".4"></path>
          {headset && <g>
            <path d="M63 96 C60 38 140 38 137 96" fill="none" stroke="#191b1f" strokeWidth="5" strokeLinecap="round"></path>
            <rect x="57" y="86" width="12" height="22" rx="5" fill="#191b1f"></rect>
            <rect x="131" y="86" width="12" height="22" rx="5" fill="#191b1f"></rect>
            <path d="M63 106 q6 20 24 18" fill="none" stroke="#191b1f" strokeWidth="3" strokeLinecap="round"></path>
            <circle cx="88" cy="124" r="3.5" fill="#191b1f"></circle>
          </g>}
        </g>
        {arms && <g>
          <path d="M42 222 Q64 206 88 196" fill="none" stroke={dress} strokeWidth="17" strokeLinecap="round"></path>
          <path d="M158 222 Q136 206 112 196" fill="none" stroke={dress} strokeWidth="17" strokeLinecap="round"></path>
          {pose === 'phone' ? <g>
            <rect x="82.6" y="161" width="1.6" height="7" rx=".8" fill="#2a2d33"></rect>
            <rect x="82.6" y="170" width="1.6" height="7" rx=".8" fill="#2a2d33"></rect>
            <rect x="115.8" y="165" width="1.6" height="11" rx=".8" fill="#2a2d33"></rect>
            <rect x="84" y="150" width="32" height="57" rx="6.5" fill="#16181c" stroke="#43464e" strokeWidth=".8"></rect>
            <rect x="86" y="152.2" width="28" height="52.6" rx="4.8" fill={screen} className="ks-glow"></rect>
            <rect x="96" y="154" width="8" height="2.6" rx="1.3" fill="#0a0a0a"></rect>
            <g opacity=".9">
              <rect x="88" y="155" width="5" height="1.2" rx=".6" fill="#0a0a0a" opacity=".55"></rect>
              <rect x="107.5" y="155" width="4.5" height="1.2" rx=".6" fill="#0a0a0a" opacity=".55"></rect>
              <rect x="86" y="158.6" width="28" height="4.4" fill="#fff" opacity=".55"></rect>
              <circle cx="89.6" cy="160.8" r="1.4" fill="#3e1bc9"></circle>
              <rect x="88.5" y="166" width="15" height="4.4" rx="2.2" fill="#fff"></rect>
              <rect x="97" y="172.6" width="14.5" height="4.4" rx="2.2" fill="#3655e5"></rect>
              <rect x="88.5" y="179.2" width="12" height="4.4" rx="2.2" fill="#fff"></rect>
              <rect x="88" y="198.6" width="24" height="4" rx="2" fill="#fff" stroke="rgba(0,0,0,.12)" strokeWidth=".4"></rect>
              <circle cx="110" cy="200.6" r="1.6" fill="#0a0a0a"></circle>
            </g>
            <path d="M86 170 L101 152.2 L109 152.2 L86 180 Z" fill="#fff" opacity=".1"></path>
          </g> : <g>
            <rect x="85" y="146" width="30" height="60" rx="8" fill="#2b2d31" stroke="#4a4d55" strokeWidth=".8"></rect>
            <rect x="95" y="149" width="10" height="1.4" rx=".7" fill="#16181c"></rect>
            <rect x="88.5" y="152.5" width="23" height="18" rx="2" fill="#16181c"></rect>
            <rect x="89.8" y="153.8" width="20.4" height="15.4" rx="1.2" fill={screen} className="ks-glow"></rect>
            {[0, 1, 2, 3].map(k => <rect key={k} x={91 + k * 1.6} y={157 - k * .8} width="1" height={1 + k * .8} fill="#1d2a10"></rect>)}
            <rect x="91" y="160.5" width="13" height="1.4" rx=".7" fill="#1d2a10" opacity=".7"></rect>
            <rect x="91" y="163.4" width="10" height="1.4" rx=".7" fill="#1d2a10" opacity=".5"></rect>
            <rect x="91" y="166.3" width="11.5" height="1.4" rx=".7" fill="#1d2a10" opacity=".5"></rect>
            <rect x="88.5" y="173" width="5" height="3" rx="1.5" fill="#4a4d55"></rect>
            <rect x="106.5" y="173" width="5" height="3" rx="1.5" fill="#4a4d55"></rect>
            <rect x="94.5" y="172" width="11" height="6.5" rx="3.2" fill="#3a3d44"></rect>
            <circle cx="100" cy="175.2" r="1.6" fill="#5c6068"></circle>
            {[0, 1, 2, 3].map(r => [0, 1, 2].map(c => <rect key={r + '' + c} x={88.7 + c * 7.8} y={180.5 + r * 5.6} width="6.8" height="4.2" rx="2" fill="#44474f"></rect>))}
          </g>}
          <circle cx="89" cy="196" r="7.5" fill={skin}></circle><ellipse cx="85.2" cy="184" rx="2.6" ry="6" fill={skin} transform="rotate(-12 85.2 184)"></ellipse>
          <circle cx="111" cy="196" r="7.5" fill={skin}></circle><ellipse cx="114.8" cy="186" rx="2.6" ry="6" fill={skin} transform="rotate(12 114.8 186)"></ellipse>
        </g>}
      </g>
    </svg>
  );
}

export { KSLang, useKS, KS_SKIN, useInView, useLoop, Woman };
