/* Kariyar video — one continuous composition. 1920x1080. */
const W = 1920, H = 1080;

/* Phone screens — each a pure function of T */
function ScreenLanguage({ T, c }) {
  const o = T >= c.Entry + 0.2 ? 1 : 0;
  return <div style={{ position: 'absolute', inset: 0, background: KV.white, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '150px 28px 40px', gap: 18, opacity: o }}>
    <KLogo size={34} style={MOTION.enter(T, c.Entry + 0.3)} />
    <div style={{ textAlign: 'center', font: '400 16px/1.5 var(--font-inter)', color: KV.steel, marginBottom: 30, ...MOTION.enter(T, c.Entry + 0.7) }}>Private. Free. Nothing is saved unless you choose.<br />Na sirri. Kyauta.</div>
    <div style={{ width: '100%', height: 60, borderRadius: 16, background: T >= c.Entry + 3.4 ? KV.ink : KV.white, color: T >= c.Entry + 3.4 ? KV.white : KV.ink, border: `1px solid ${KV.hair}`, display: 'grid', placeItems: 'center', font: '600 18px var(--font-inter)', ...MOTION.enter(T, c.Entry + 1.1) }}>English</div>
    <div style={{ width: '100%', height: 60, borderRadius: 16, background: KV.white, border: `1px solid ${KV.hair}`, display: 'grid', placeItems: 'center', font: '600 18px var(--font-inter)', ...MOTION.enter(T, c.Entry + 1.3) }}>Hausa</div>
    <Tap T={T} at={c.Entry + 3.3} x={195} y={378} />
  </div>;
}

function ScreenChat({ T, c, ha }) {
  const t0 = c.Talk, msgs = [];
  const q = 'My husband checks my phone and controls all the money. I don\'t know if this is normal.';
  const typed = q.slice(0, Math.floor(clamp((T - t0 - 0.3) / 2.2, 0, 1) * q.length));
  const sent = T >= t0 + 2.9;
  return <div style={{ position: 'absolute', inset: 0, background: KV.white, display: 'flex', flexDirection: 'column' }}>
    <TopBar title="Talk" sub="Automated guidance · not a person" />
    <div style={{ flex: 1, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden', justifyContent: 'flex-end' }}>
      <div style={{ alignSelf: 'center', font: '500 12px var(--font-inter)', color: KV.steel, ...MOTION.enter(T, t0 + 0.1) }}>Tonight · 22:14</div>
      {sent && <Bubble me T={T} at={t0 + 2.9}>{q}</Bubble>}
      <Typing T={T} from={t0 + 3.4} to={t0 + 4.6} />
      {T >= t0 + 4.6 && <Bubble T={T} at={t0 + 4.6} source="Controlling behaviour · reviewed 12 Sep 2026">That sounds hard, and it is not your fault. Controlling money or a phone is a form of abuse, and it often grows slowly.</Bubble>}
      {T >= t0 + 6.2 && <Bubble T={T} at={t0 + 6.2}>You do not need to decide anything today. Would you like to talk to a trained responder, privately?</Bubble>}
      {T >= t0 + 7.4 && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', ...MOTION.enter(T, t0 + 7.4) }}><Chip primary icon="user-sound">Talk to a responder</Chip><Chip icon="map-pin-area">Find a service</Chip></div>}
    </div>
    <div style={{ height: 92, padding: '10px 16px 28px', borderTop: `1px solid ${KV.hair}`, display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ flex: 1, height: 48, borderRadius: 999, border: `1px solid ${KV.hair}`, padding: '0 16px', display: 'flex', alignItems: 'center', font: '400 15px/1.3 var(--font-inter)', color: sent ? KV.steel : KV.charcoal, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{sent ? 'Write here…' : typed}{!sent && typed && <i style={{ width: 2, height: 18, background: KV.ink, marginLeft: 2, opacity: Math.floor(T * 2) % 2 }}></i>}</div>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: KV.violet, color: KV.white, display: 'grid', placeItems: 'center' }}><i className="ph-fill ph-paper-plane-right" style={{ fontSize: 20 }}></i></div>
    </div>
    <Tap T={T} at={t0 + 2.75} x={330} y={740} />
    <Tap T={T} at={c.Responder - 0.4} x={110} y={608} />
  </div>;
}

function ScreenResponder({ T, c }) {
  const t0 = c.Responder, conn = MOTION.draw(T, t0, 1.6);
  const live = T >= t0 + 1.9;
  return <div style={{ position: 'absolute', inset: 0, background: KV.white, display: 'flex', flexDirection: 'column' }}>
    <TopBar title="Hauwa" sub="Trained responder · Hausa, English" />
    {!live && <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, opacity: fadeOut(T, t0 + 1.6, 0.3) }}>
      <div style={{ width: 96, height: 96, borderRadius: '50%', background: `conic-gradient(${KV.violet} ${conn * 360}deg, ${KV.polar} 0)`, display: 'grid', placeItems: 'center' }}><div style={{ width: 80, height: 80, borderRadius: '50%', background: KV.lav, display: 'grid', placeItems: 'center' }}><i className="ph-fill ph-user" style={{ fontSize: 36, color: KV.purple }}></i></div></div>
      <div style={{ font: '600 17px var(--font-inter)', color: KV.ink }}>Connecting you to a responder…</div>
      <div style={{ font: '400 14px var(--font-inter)', color: KV.steel }}>Only she will see this chat.</div>
    </div>}
    {live && <div style={{ flex: 1, padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'flex-end', overflow: 'hidden' }}>
      <Bubble T={T} at={t0 + 1.9}>Sannu, ni Hauwa ce. Ina nan don in saurare ki. Babu gaggawa.</Bubble>
      {T >= t0 + 3.6 && <Bubble me T={T} at={t0 + 3.6}>Na gode. Ban san abin da zan yi ba.</Bubble>}
      <Typing T={T} from={t0 + 4.4} to={t0 + 5.4} />
      {T >= t0 + 5.4 && <Bubble T={T} at={t0 + 5.4}>Ba laifinki ba ne. Akwai cibiyar shawara a Fagge, kyauta, da ma'aikata mata masu Hausa. Kina so in tura ki?</Bubble>}
      {T >= t0 + 7.6 && <Bubble me T={T} at={t0 + 7.6}>Eh, ina so.</Bubble>}
    </div>}
    <div style={{ height: 92, padding: '10px 16px 28px', borderTop: `1px solid ${KV.hair}`, display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ flex: 1, height: 48, borderRadius: 999, border: `1px solid ${KV.hair}`, padding: '0 16px', display: 'flex', alignItems: 'center', font: '400 15px var(--font-inter)', color: KV.steel }}>Rubuta a nan…</div>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: KV.violet, color: KV.white, display: 'grid', placeItems: 'center' }}><i className="ph-fill ph-paper-plane-right" style={{ fontSize: 20 }}></i></div>
    </div>
  </div>;
}

function ScreenReferral({ T, c }) {
  const t0 = c.Referral;
  const rows = [['clock', 'Litinin – Asabar, 9:00 – 17:00'], ['map-pin', 'Fagge, Kano'], ['currency-ngn', 'Kyauta'], ['users-three', 'Ma\'aikata mata · Hausa']];
  return <div style={{ position: 'absolute', inset: 0, background: KV.white, display: 'flex', flexDirection: 'column' }}>
    <TopBar title="Turawa" sub="Wurin da aka tabbatar · 24 Okt 2026" />
    <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${KV.hair}`, boxShadow: '0 12px 32px rgba(15,15,53,.08)', ...MOTION.enter(T, t0 + 0.3) }}>
        <div style={{ height: 150, background: `repeating-linear-gradient(135deg, ${KV.polar} 0 10px, #d6e2f8 10px 20px)`, position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-90%)', ...MOTION.pop(T, t0 + 0.9) }}><i className="ph-fill ph-map-pin" style={{ fontSize: 56, color: KV.violet, filter: 'drop-shadow(0 8px 12px rgba(62,27,201,.35))' }}></i></div>
        </div>
        <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ font: '700 20px/1.2 var(--font-inter)', color: KV.ink, letterSpacing: -0.3 }}>Haske Counselling Centre</div>
          {rows.map(([ic, t], i) => <div key={ic} style={{ display: 'flex', gap: 10, alignItems: 'center', font: '400 15px var(--font-inter)', color: KV.charcoal, ...MOTION.enter(T, t0 + 1.2 + i * 0.25, 0.5, 10) }}><i className={'ph ph-' + ic} style={{ fontSize: 18, color: KV.purple }}></i>{t}</div>)}
        </div>
      </div>
      <div style={{ height: 56, borderRadius: 16, background: T >= t0 + 3.6 ? KV.mint : KV.ink, color: T >= t0 + 3.6 ? '#0f5a4a' : KV.white, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, font: '600 16px var(--font-inter)', ...MOTION.enter(T, t0 + 2.4) }}>
        {T >= t0 + 3.6 ? <><i className="ph-fill ph-check-circle" style={{ fontSize: 22 }}></i>Hauwa ta sanar da cibiyar. Suna jiran ki.</> : 'Karɓi turawa'}
      </div>
      <div style={{ textAlign: 'center', font: '400 13px/1.4 var(--font-inter)', color: KV.steel, ...MOTION.enter(T, t0 + 4.4) }}>Ba a adana komai a wayarki sai in kin zaɓa.</div>
    </div>
    <Tap T={T} at={t0 + 3.4} x={195} y={578} />
  </div>;
}

/* ---- Settings ---- */
function Room({ T, c }) {
  const glow = 0.5 + 0.5 * Math.sin(T * 1.4);
  const drift = MOTION.draw(T, 0, c.Entry) * 0.06; // slow push during Opening
  const mat = `repeating-linear-gradient(90deg, #7a5a2e 0 18px, #5a4222 18px 36px, #8a6a3a 36px 42px, #5a4222 42px 60px)`;
  const blanket = `repeating-linear-gradient(45deg, #2b2a7a 0 22px, #1f1f5c 22px 44px), repeating-linear-gradient(-45deg, rgba(255,214,150,.18) 0 22px, transparent 22px 44px)`;
  return <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #1a1430 0%, #2a2040 55%, #3a2b3a 100%)', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, transform: `scale(${1 + drift})`, transformOrigin: '915px 640px' }}>
      {/* mud wall: plaster bands and a dado line */}
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(180deg, rgba(255,230,200,.025) 0 2px, transparent 2px 46px)' }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 640, height: 160, background: 'linear-gradient(180deg, #4a3238, #3a2730)' }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 640, height: 6, background: '#6b4a3c', opacity: .7 }}></div>
      {/* moonlight falling through the window */}
      <div style={{ position: 'absolute', left: 1180, top: 160, width: 320, height: 900, background: 'linear-gradient(180deg, rgba(255,240,216,.10), rgba(255,240,216,0))', clipPath: 'polygon(0 0, 100% 0, 130% 100%, -40% 100%)', opacity: .9 }}></div>
      {/* window: wooden frame, open shutter, night sky, moon, stars, distant hut */}
      <div style={{ position: 'absolute', left: 1180, top: 150, width: 320, height: 400, background: '#5a3b22', borderRadius: 10, boxShadow: '0 20px 40px rgba(0,0,0,.35)' }}>
        <div style={{ position: 'absolute', inset: 18, borderRadius: 6, overflow: 'hidden', background: 'linear-gradient(180deg, #080a2a 0%, #141a4a 70%, #1e2a5a 100%)' }}>
          {[[30, 40], [90, 20], [200, 60], [250, 30], [60, 120], [230, 140], [150, 90], [40, 200], [260, 210]].map(([x, y], i) => <div key={i} style={{ position: 'absolute', left: x, top: y, width: i % 3 ? 3 : 4, height: i % 3 ? 3 : 4, borderRadius: '50%', background: '#fff', opacity: .55 + ((i * 37) % 40) / 100 }}></div>)}
          <div style={{ position: 'absolute', left: 150, top: 70, width: 96, height: 96, borderRadius: '50%', background: KV.sun, boxShadow: `0 0 60px 20px rgba(255,240,216,.35), inset -14px -6px 0 0 #e6d2b0` }}></div>
          <div style={{ position: 'absolute', left: -20, top: 250, width: 160, height: 120, background: '#0a0c24', clipPath: 'polygon(50% 0, 100% 45%, 100% 100%, 0 100%, 0 45%)' }}></div>
          <div style={{ position: 'absolute', left: 180, top: 300, width: 120, height: 70, background: '#0a0c24', clipPath: 'polygon(50% 0, 100% 50%, 100% 100%, 0 100%, 0 50%)' }}></div>
        </div>
        <div style={{ position: 'absolute', left: 18, right: 18, top: '50%', height: 10, background: '#4a2f1a' }}></div>
        <div style={{ position: 'absolute', left: '50%', top: 18, bottom: 18, width: 10, background: '#4a2f1a', transform: 'translateX(-50%)' }}></div>
        <div style={{ position: 'absolute', left: -70, top: 0, width: 70, height: '100%', background: 'linear-gradient(90deg, #3d2714, #5a3b22)', borderRadius: '8px 0 0 8px', boxShadow: '-10px 10px 30px rgba(0,0,0,.4)' }}></div>
      </div>
      {/* curtain on a cord */}
      <div style={{ position: 'absolute', left: 1500, top: 130, width: 130, height: 470, background: 'repeating-linear-gradient(90deg, #7a3b4a 0 14px, #5a2a38 14px 28px)', borderRadius: '0 0 12px 12px', opacity: .9, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 96%, 0 100%)' }}></div>
      <div style={{ position: 'absolute', left: 1100, top: 124, width: 560, height: 6, background: '#6b4a3c', borderRadius: 3 }}></div>
      {/* shelf with a lamp and a bowl */}
      <div style={{ position: 'absolute', left: 220, top: 420, width: 260, height: 14, background: '#5a3b22', borderRadius: 4, boxShadow: '0 16px 24px rgba(0,0,0,.35)' }}></div>
      <div style={{ position: 'absolute', left: 260, top: 350, width: 46, height: 70, background: '#2a2a33', borderRadius: '6px 6px 4px 4px' }}><div style={{ position: 'absolute', left: 13, top: -16, width: 20, height: 22, borderRadius: '50% 50% 4px 4px', background: '#3b3b46' }}></div></div>
      <div style={{ position: 'absolute', left: 350, top: 392, width: 100, height: 30, background: '#8a5a2e', borderRadius: '0 0 40px 40px' }}></div>
      {/* floor: packed earth, woven mat */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 800, height: 300, background: 'linear-gradient(180deg, #2e2124, #1f1618)' }}></div>
      <div style={{ position: 'absolute', left: 300, top: 860, width: 1400, height: 200, background: mat, opacity: .55, clipPath: 'polygon(6% 0, 94% 0, 100% 100%, 0 100%)' }}></div>
      {/* clay water pot */}
      <div style={{ position: 'absolute', left: 150, top: 700, width: 170, height: 190, background: 'radial-gradient(ellipse at 40% 35%, #a36a3a, #5a3418 70%)', borderRadius: '50% 50% 46% 46%' }}><div style={{ position: 'absolute', left: 45, top: -18, width: 80, height: 36, borderRadius: '50%', background: '#4a2a12', boxShadow: 'inset 0 -6px 0 #7a4a24' }}></div></div>
      {/* low wooden bed with patterned blanket */}
      <div style={{ position: 'absolute', left: 560, top: 760, width: 900, height: 90, background: '#4a2f1a', borderRadius: 8 }}></div>
      {[580, 1400].map(x => <div key={x} style={{ position: 'absolute', left: x, top: 840, width: 40, height: 60, background: '#3d2714', borderRadius: 4 }}></div>)}
      <div style={{ position: 'absolute', left: 540, top: 690, width: 940, height: 110, borderRadius: '26px 26px 6px 6px', background: blanket, boxShadow: '0 10px 30px rgba(0,0,0,.35)' }}></div>
      <div style={{ position: 'absolute', left: 600, top: 700, width: 220, height: 60, borderRadius: 18, background: KV.sun, opacity: .85 }}></div>
      {/* her, phone lit */}
      <div style={{ position: 'absolute', left: 760, top: 260, transform: 'scale(1.55)', transformOrigin: 'top left' }}><Figure pose="sit" glow={glow} /></div>
      <div style={{ position: 'absolute', left: 740, top: 460, width: 380, height: 380, borderRadius: '50%', background: `radial-gradient(circle, rgba(140,190,255,${0.26 + glow * 0.12}), rgba(140,190,255,0) 65%)`, pointerEvents: 'none' }}></div>
      {/* night vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 55% at 50% 60%, rgba(0,0,0,0) 40%, rgba(5,5,20,.55) 100%)' }}></div>
    </div>
  </div>;
}

function Street({ T, c }) {
  const t0 = c.Visit;
  const walk = MOTION.draw(T, t0 + 0.4, 6.2); // 0..1 across the street
  const x = 120 + walk * 1060, step = (T - t0) * 1.6;
  const doorOpen = MOTION.draw(T, t0 + 6.4, 0.8);
  const cam = 1 + MOTION.draw(T, t0 + 5.6, 3.2) * 0.35;
  return <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${KV.polar} 0%, ${KV.sun} 70%)`, overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, transform: `scale(${cam})`, transformOrigin: '1300px 760px' }}>
      <div style={{ position: 'absolute', left: 1480, top: 110, width: 120, height: 120, borderRadius: '50%', background: KV.star, opacity: .9 }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 850, height: 230, background: '#d9c9a8' }}></div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 850, height: 8, background: '#c4b08a' }}></div>
      {/* clinic building */}
      <div style={{ position: 'absolute', left: 1100, top: 300, width: 640, height: 560, background: KV.white, borderRadius: '16px 16px 0 0', boxShadow: '0 30px 60px rgba(15,15,53,.12)' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 110, background: KV.violet, borderRadius: '16px 16px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, color: KV.white, font: '700 34px var(--font-inter)', letterSpacing: -0.5 }}><i className="ph-fill ph-first-aid" style={{ fontSize: 40 }}></i>Haske Counselling Centre</div>
        {[0, 1].map(i => <div key={i} style={{ position: 'absolute', left: 60 + i * 400, top: 170, width: 180, height: 170, borderRadius: 10, background: KV.polar, boxShadow: `inset 0 0 0 8px ${KV.hair}` }}></div>)}
        <div style={{ position: 'absolute', left: 260, top: 320, width: 120, height: 240, background: KV.ink, borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: KV.sun, opacity: doorOpen }}></div>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100%', background: KV.purple, transformOrigin: 'left', transform: `scaleX(${1 - doorOpen * 0.85})` }}></div>
        </div>
        <div style={{ position: 'absolute', left: 230, top: 330, width: 180, height: 16, borderRadius: 4, background: KV.hair }}></div>
      </div>
      {/* walking figure, fades into the open door */}
      <div style={{ position: 'absolute', left: x, top: 540, opacity: 1 - MOTION.draw(T, t0 + 6.9, 0.8), transform: `scale(${1 - MOTION.draw(T, t0 + 6.2, 1.4) * 0.12})`, transformOrigin: 'bottom center' }}><Figure pose="walk" step={walk < 1 ? step : 0} /></div>
    </div>
  </div>;
}

function Close({ T, c, authoredTotal }) {
  const t0 = c.Close, end = fadeOut(T, authoredTotal - 0.7, 0.7);
  return <div style={{ position: 'absolute', inset: 0, background: KV.aurora, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36, color: KV.white, textAlign: 'center' }}>
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36, opacity: end }}>
    <div style={MOTION.pop(T, t0 - 0.3, 0.8)}><KLogo size={88} light /></div>
    <div style={{ font: '700 54px/1.1 var(--font-inter)', letterSpacing: -2, maxWidth: 1100, ...MOTION.enter(T, t0 + 1.0) }}>Private help for women and girls, on any phone.</div>
    <div style={{ font: '400 30px/1.3 var(--font-inter)', color: KV.muted, ...MOTION.enter(T, t0 + 1.5) }}>Taimako na sirri ga mata da 'yan mata, a kowace waya.</div>
    <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 20, ...MOTION.enter(T, t0 + 2.3) }}>
      <div style={{ height: 76, padding: '0 36px', borderRadius: 999, background: 'linear-gradient(142deg, #408fed 18.68%, #3e1bc9 78.25%)', display: 'flex', alignItems: 'center', gap: 14, font: '700 32px var(--font-inter)', letterSpacing: 1 }}><i className="ph ph-phone" style={{ fontSize: 34 }}></i>Dial *384*77#</div>
      <div style={{ height: 76, padding: '0 36px', borderRadius: 999, border: `2px solid ${KV.iris}`, display: 'flex', alignItems: 'center', gap: 14, font: '600 30px var(--font-inter)' }}><i className="ph ph-device-mobile" style={{ fontSize: 34 }}></i>Get the app</div>
    </div>
    <div style={{ font: '400 22px var(--font-inter)', color: KV.muted, ...MOTION.enter(T, t0 + 3.0) }}>Free · Hausa & English · If you are in danger, call 112</div>
    </div>
  </div>;
}

/* ---- The piece ---- */
function KariyarStory() {
  const { T, CUES: c, authoredTotal } = useComposition();
  // camera on the room: push into the phone in her hands between Opening and Entry
  const push = MOTION.draw(T, c.Entry - 1.2, 2.0);
  const roomScale = 1 + push * 7.5;
  const roomOrigin = '915px 640px';
  // the hero phone: rises from her hands to center frame, stays through Referral
  const phoneIn = MOTION.draw(T, c.Entry - 0.6, 1.6);
  const px = 750, py = 1100 + phoneIn * (110 - 1100);
  const phoneHold = T >= c.Entry - 0.6 && T < c.Visit + 0.6;
  const phoneOut = MOTION.draw(T, c.Visit - 0.6, 1.0);
  // which screen
  const screen = T < c.Talk ? 'lang' : T < c.Responder ? 'chat' : T < c.Referral ? 'resp' : 'ref';
  // basic phone inset during Entry
  const bpIn = MOTION.draw(T, c.Entry + 4.2, 0.8), bpOut = MOTION.draw(T, c.Talk - 0.8, 0.6);
  const ussd = T < c.Entry + 5.6 ? '*384*77#' : 'Kariyar\n1. Yi magana / Talk\n2. Nemi taimako / Find help\n3. Koyo / Learn';
  // backdrop behind the phone once we are "inside" it
  const bgDark = clamp(push, 0, 1);
  const streetIn = MOTION.draw(T, c.Visit - 0.4, 0.9);
  const closeIn = MOTION.draw(T, c.Close - 0.6, 0.8);
  const roomIn = MOTION.draw(T, 0, 0.9);
  const captions = [
    { at: 0.8, until: c.Entry - 0.6, text: 'Some things are hard to say out loud.' },
    { at: c.Entry + 0.4, until: c.Entry + 4.0, text: 'Kariyar is private, free, and in her language.' },
    { at: c.Entry + 4.6, until: c.Talk - 0.3, text: 'On a smartphone, or by dialling *384*77# on any phone.' },
    { at: c.Talk + 0.5, until: c.Talk + 4.4, text: 'She can say it here first.' },
    { at: c.Talk + 4.8, until: c.Responder - 0.3, text: 'Clear, checked guidance. No blame, no pressure.' },
    { at: c.Responder + 0.3, until: c.Responder + 3.2, text: 'Sai ta zaɓi yin magana da ƙwararriyar mai taimako.' },
    { at: c.Responder + 3.6, until: c.Referral - 0.3, text: 'Mace ce, a sirri, cikin Hausa.' },
    { at: c.Referral + 0.4, until: c.Referral + 4.0, text: 'Ana tura ta zuwa wurin da aka tabbatar, kusa da ita.' },
    { at: c.Referral + 4.4, until: c.Visit - 0.3, text: 'Cibiyar ta riga ta san za ta zo.' },
    { at: c.Visit + 0.6, until: c.Visit + 5.0, text: 'Kashegari, ta je da kanta.' },
    { at: c.Visit + 5.4, until: c.Close - 0.4, text: 'Daga saƙo na sirri zuwa taimako na gaske.' },
  ];
  return <div data-screen-label={'t=' + Math.floor(T) + 's'} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: KV.ink, fontFamily: 'var(--font-inter)' }}>
    {/* Room, pushed in by the camera */}
    <Shot from={0} to={c.Talk}>
      <div style={{ position: 'absolute', inset: 0, transform: `scale(${roomScale})`, transformOrigin: roomOrigin, opacity: roomIn * (1 - bgDark * 0.9) }}><Room T={T} c={c} /></div>
    </Shot>
    {/* dark aurora backdrop while inside the app */}
    <div style={{ position: 'absolute', inset: 0, background: KV.aurora, opacity: bgDark * (1 - streetIn) }}></div>
    {/* Street scene */}
    <Shot from={c.Visit - 0.4} to={c.Close + 0.6}>
      <div style={{ position: 'absolute', inset: 0, opacity: streetIn * (1 - closeIn) }}><Street T={T} c={c} /></div>
    </Shot>
    {/* Hero phone */}
    {phoneHold && <Phone style={{ left: px, top: py, opacity: 1 - phoneOut, transform: `translateX(${bpIn * (1 - bpOut) * -260}px) scale(${1 - phoneOut * 0.1})`, transformOrigin: 'center' }}>
      {screen === 'lang' && <ScreenLanguage T={T} c={c} />}
      {screen === 'chat' && <ScreenChat T={T} c={c} />}
      {screen === 'resp' && <ScreenResponder T={T} c={c} />}
      {screen === 'ref' && <ScreenReferral T={T} c={c} />}
    </Phone>}
    {/* Basic phone inset */}
    <Shot from={c.Entry + 4.2} to={c.Talk}>
      <BasicPhone text={ussd} style={{ left: 1120, top: 240, opacity: bpIn * (1 - bpOut), transform: `translateX(${(1 - bpIn) * 300 + bpOut * 300}px)` }} />
    </Shot>
    {/* Close */}
    <Shot from={c.Close - 0.3} to={authoredTotal + 1}>
      <div style={{ position: 'absolute', inset: 0, opacity: closeIn }}><Close T={T} c={c} authoredTotal={authoredTotal} /></div>
    </Shot>
    <Captions items={captions} style={{ font: '500 34px/1.3 var(--font-inter)', color: KV.white, bottom: '6%', textShadow: '0 2px 24px rgba(0,0,0,.6)', letterSpacing: -0.3 }} />
  </div>;
}

Object.assign(window, { KariyarStory });
