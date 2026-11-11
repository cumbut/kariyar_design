'use client';
import React from 'react';
import { useKS, KS_SKIN, Woman } from './KsFigures.jsx';
import { KS_FEATS } from './KsFeatures.jsx';
import { DS } from '../lib/ds.js';

function KSScreen({ id }) {
  const { tx } = useKS();
  const head = <div className="ks-s-head"><i className="ph-fill ph-shield-check"></i>Kariyar</div>;
  if (id === 'talk') return (<div className="ks-s">{head}<div className="ks-s-body">
    <div className="ks-b me on">{tx('Is what is happening to me normal?', 'Abin da ke faruwa da ni al’ada ne?')}</div>
    <div className="ks-b them on">{tx('It is not your fault. Let’s talk about what is going on.', 'Ba laifinki ba ne. Mu yi magana kan abin da ke faruwa.')}</div>
    <div className="ks-b me on">{tx('He takes my phone every night.', 'Yana karɓe wayata kowane dare.')}</div></div>
    <div className="ks-s-compose"><span>{tx('Type a message', 'Rubuta saƙo')}</span><i className="ph ph-arrow-up"></i></div></div>);
  if (id === 'hold') return (<div className="ks-s">{head}<div className="ks-s-body end">
    <div className="ks-voice on"><i className="ph-fill ph-play"></i><span className="ks-wave sm">{Array.from({ length: 12 }).map((_, k) => <i key={k} style={{ height: 6 + ((k * 7) % 14) }}></i>)}</span>0:08</div>
    <div className="ks-listen on"><span className="ks-wave">{Array.from({ length: 9 }).map((_, k) => <i key={k} style={{ animationDelay: k * 90 + 'ms' }}></i>)}</span>{tx('Listening…', 'Ana saurare…')}</div></div>
    <div className="ks-s-compose"><span>{tx('Keep holding…', 'Ci gaba da riƙewa…')}</span><i className="ph ph-microphone ring"></i></div></div>);
  if (id === 'help') return (<div className="ks-s">{head}<div className="ks-s-body"><h4>{tx('Help near you', 'Taimako kusa da ke')}</h4>
    {[['first-aid', tx('Clinic', 'Asibiti'), '1.2 km'], ['scales', tx('Legal aid', "Taimakon shari'a"), '2.4 km'], ['house-line', tx('Safe space', 'Wurin tsaro'), '3.1 km']].map(([ic, l, d]) =>
      <div key={l} className="ks-s-row"><i className={'ph ph-' + ic}></i><span>{l}</span><small>{d}</small></div>)}</div></div>);
  if (id === 'ussd') return (<div className="ks-s dark"><div className="ks-s-body"><small className="ks-s-mut">USSD</small>
    <pre>{'Kariyar\n' + tx('1 Talk to someone\n2 Find help\n3 Learn\n0 Exit', '1 Yi magana da wani\n2 Nemi taimako\n3 Koyo\n0 Fita')}</pre>
    <small className="ks-s-mut">{tx('Dial *384*77# · SMS 32077', 'Danna *384*77# · SMS 32077')}</small></div></div>);
  return (<div className="ks-s"><div className="ks-s-head"><Woman headset mood="smile" skin={KS_SKIN[1]} hijab="#fff0d8" trim="#5a3f99" dress="#484b73" viewBox="50 30 100 100" className="ks-ava"></Woman>Hauwa · {tx('Responder', "Ma'aikaciya")}</div>
    <div className="ks-s-body"><div className="ks-b them on">{tx('I’m here. Take your time.', 'Ina nan. Ki ɗauki lokacinki.')}</div>
      <div className="ks-b me on">{tx('Thank you. I want to talk.', 'Na gode. Ina son magana.')}</div>
      <div className="ks-b them on">{tx('You decide what to share. Nothing happens without you.', 'Ke ce ke zaɓar abin da za ki faɗa. Babu abin da zai faru ba tare da ke ba.')}</div></div></div>);
}

const KS_HAND = '#6e4129';
const KS_HAND_SHADE = 'color-mix(in oklch, #6e4129 70%, #000)';
const KS_SCATTER = [[-330, -170], [320, -210], [-350, 150], [330, 170], [0, -330]];

function KSFinale() {
  const { lang, tx } = useKS();
  const ref = React.useRef(null);
  const stageRef = React.useRef(null);
  const [p, setP] = React.useState(0);
  const [sc, setSc] = React.useState(1);
  React.useEffect(() => {
    let raf;
    const upd = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))));
      const st = stageRef.current;
      if (st) setSc(Math.max(0.3, Math.min(1, st.clientHeight / 720, st.clientWidth / 480)));
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(upd); };
    upd(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
  const G = 0.16;
  const g = Math.min(1, p / G), ge = 1 - Math.pow(1 - g, 3);
  const q = Math.max(0, (p - G) / (1 - G));
  const idx = Math.min(4, Math.floor(q * 5));
  const sub = q * 5 - idx;
  const lit = p >= G;
  return (
    <section ref={ref} id="all" className="ks-finale" data-screen-label="All features">
      <div className="ks-fin-sticky">
        <div className="ks-fin-text">
          <span className="ks-eyebrow">{tx('Kariyar', 'Kariyar')}</span>
          <h2>{tx("One companion. Every kind of help.", "Abokiya ɗaya. Kowane irin taimako.")}</h2>
          <ol className="ks-fin-list">
            {KS_FEATS.map((f, n) => (
              <li key={f.id} className={lit && n === idx ? 'on' : lit && n < idx ? 'done' : ''}>
                <i className={'ph ph-' + f.icon}></i><span>{f.eyebrow[lang === 'ha' ? 1 : 0]}</span>
                <b style={{ transform: `scaleX(${lit ? (n < idx ? 1 : n === idx ? sub : 0) : 0})` }}></b>
              </li>
            ))}
          </ol>
        </div>
        <div ref={stageRef} className="ks-fin-stage" role="img" aria-label={tx('Illustration: a hand holds a phone that cycles through each Kariyar feature.', 'Hoto: hannu yana riƙe da waya da ke nuna kowane fasalin Kariyar ɗaya bayan ɗaya.')}>
          <div className="ks-hand" style={{ transform: `scale(${sc * (0.88 + 0.12 * ge)})` }}>
            {KS_FEATS.map((f, n) => {
              const [dx, dy] = KS_SCATTER[n];
              return <span key={f.id} className="ks-orb" style={{ background: f.tone, opacity: g < 1 ? 1 - Math.max(0, (g - 0.75) * 4) : 0, transform: `translate(${dx * (1 - ge)}px, ${dy * (1 - ge)}px) scale(${1 - 0.5 * ge})` }}><i className={'ph ph-' + f.icon}></i></span>;
            })}
            <svg className="ks-hand-back" viewBox="0 0 300 700">
              <defs>
                <linearGradient id="ksSkin" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#4a2a1c"></stop><stop offset=".55" stopColor={KS_HAND}></stop><stop offset="1" stopColor="#5a3322"></stop></linearGradient>
                <linearGradient id="ksThumb" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#3e2317"></stop><stop offset=".5" stopColor="#7a4a33"></stop><stop offset="1" stopColor="#56301f"></stop></linearGradient>
                <radialGradient id="ksTip" cx=".35" cy=".45" r=".7"><stop offset="0" stopColor="#7c4b34"></stop><stop offset="1" stopColor="#4c2b1d"></stop></radialGradient>
              </defs>
              <path d="M135 520 L260 336 C310 332 352 328 372 339 C390 362 393 440 388 522 C394 566 414 596 420 640 L428 780 L236 780 C242 730 246 692 242 663 C196 636 150 600 135 562 Z" fill="url(#ksSkin)"></path>
              <path d="M150 572 C190 612 222 640 246 660" fill="none" stroke="#2e1a11" strokeWidth="3" strokeLinecap="round" opacity=".35"></path>
              <path d="M276 586 C310 596 346 594 380 580 M284 606 C316 614 350 612 384 600" fill="none" stroke="#2e1a11" strokeWidth="1.6" strokeLinecap="round" opacity=".45"></path>
              <path d="M392 430 C396 480 394 520 398 556" fill="none" stroke="#9a6448" strokeWidth="3" strokeLinecap="round" opacity=".35"></path>
              <path d="M278 178 C278 160 290 150 302 152 C316 154 322 170 323 192 C330 225 336 250 343 266 C356 295 366 318 372 339 L282 342 C280 300 278 240 278 178 Z" fill="url(#ksThumb)"></path>
              <path d="M300 158 C310 154 318 162 318 176 C318 190 314 200 306 201 C298 199 295 184 296 171 C296 164 297 160 300 158 Z" fill="#c69684"></path>
              <path d="M303 162 C309 161 313 166 313 174" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" opacity=".5"></path>
              <path d="M314 258 q10 6 22 4 M316 268 q9 5 20 3 M318 278 q8 4 17 2" fill="none" stroke="#2e1a11" strokeWidth="1.3" strokeLinecap="round" opacity=".55"></path>
              <path d="M286 200 C288 250 290 300 294 336" fill="none" stroke="#2e1a11" strokeWidth="4" strokeLinecap="round" opacity=".35"></path>
              <path d="M318 214 C324 240 330 262 338 280" fill="none" stroke="#a06a4e" strokeWidth="2.4" strokeLinecap="round" opacity=".4"></path>
              {[[241, 295, -22], [297, 367, -20], [370, 440, -20], [452, 513, -14]].map(([t, bt, l]) => {
                const h = bt - t, r = h / 2, m = t + r;
                return <g key={t}>
                  <path d={`M40 ${t} L${l + r} ${t} A${r} ${r * .92} 0 0 0 ${l + r} ${bt} L40 ${bt} Z`} fill="url(#ksTip)"></path>
                  <path d={`M${l + 4} ${m - h * .1} C${l + 2} ${m + h * .22} ${l + 10} ${bt - 6} ${l + 20} ${bt - 7} C${l + 28} ${bt - 9} ${l + 30} ${m + 2} ${l + 24} ${m - h * .16} C${l + 18} ${m - h * .3} ${l + 6} ${m - h * .28} ${l + 4} ${m - h * .1} Z`} fill="#c18f7c"></path>
                  <path d={`M${l + 9} ${m - h * .08} q2 ${h * .14} 8 ${h * .22}`} fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity=".45"></path>
                  <path d={`M${l + 10} ${bt - 2} C${l + 24} ${bt + 1} 30 ${bt} 40 ${bt - 1}`} fill="none" stroke="#2a170f" strokeWidth="3" strokeLinecap="round" opacity=".55"></path>
                </g>;
              })}
            </svg>
            <div className="ks-phone">
              <span className="ks-btn v1"></span><span className="ks-btn v2"></span><span className="ks-btn pw"></span>
              <div className="ks-phone-scr">
                <div className="ks-status"><b>9:41</b><span><i className="ph-fill ph-cell-signal-full"></i><i className="ph-bold ph-wifi-high"></i><i className="ph-fill ph-battery-full"></i></span></div>
                <span className="ks-island"></span><span className="ks-homebar"></span>
                <div className={'ks-boot' + (lit ? ' off' : '')}><i className="ph-fill ph-shield-check"></i>Kariyar</div>
                {KS_FEATS.map((f, n) => <div key={f.id} className={'ks-slot' + (lit && n === idx ? ' on' : '')}><KSScreen id={f.id}></KSScreen></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KSCta() {
  const { tx } = useKS();
  const { GradientButton } = DS;
  return (
    <section id="talk" className="ks-cta" data-screen-label="Talk now">
      <h2>{tx("You don't have to carry this alone.", "Ba sai kin ɗauki wannan ke kaɗai ba.")}</h2>
      <GradientButton size="lg" onClick={() => (location.href = 'Kariya Mobile.html')}>{tx('Talk to someone now', 'Yi magana da wani yanzu')}</GradientButton>
      <p>{tx("No smartphone or data? Dial *384*77# from any phone. It's free.", "Babu wayar zamani ko data? Danna *384*77# daga kowace waya. Kyauta ne.")}</p>
      <p className="ks-sos"><i className="ph ph-warning-circle"></i>{tx('If you are in danger right now, call 112.', 'Idan kina cikin haɗari yanzu, kira 112.')}</p>
    </section>
  );
}

function KSEnvelope({ focus, len = 0, sent, bad, done, onClick }) {
  const { tx } = useKS();
  const open = !sent && !done && (focus || len > 0);
  const rise = done ? 30 : sent ? 30 : open ? 8 - Math.min(1, len / 18) * 30 : 30;
  return (
    <button type="button" className={'ks-env' + (sent ? ' sent' : '') + (done ? ' done' : '') + (open ? ' open' : '')} onClick={onClick} tabIndex={-1} key={'b' + bad} aria-label={tx('Envelope illustration. Select to type your email.', 'Hoton ambulan. Danna don rubuta imel ɗinki.')}>
      <svg viewBox="0 0 160 124" className={bad ? 'shake' : ''} role="img" aria-label={done ? tx('Illustration: a sealed envelope with a check mark.', 'Hoto: ambulan da aka rufe mai alamar daidai.') : tx('Illustration: an envelope with a letter that rises as you type.', 'Hoto: ambulan mai wasiƙa da ke tashi yayin da kike rubutu.')}>
        <defs><clipPath id="ksEnvClip"><rect x="0" y="-60" width="160" height="168"></rect></clipPath></defs>
        <ellipse cx="80" cy="118" rx="44" ry="4" className="ks-env-shadow"></ellipse>
        <g className="ks-env-body">
          <rect x="20" y="50" width="120" height="60" rx="6" fill="var(--color-twilight-iris)"></rect>
          <path d="M20 50 L80 14 L140 50 Z" fill="var(--color-twilight-iris)" className="ks-env-flap-b"></path>
          <g clipPath="url(#ksEnvClip)"><g className="ks-env-letter" style={{ transform: `translateY(${rise}px)` }}>
            <rect x="32" y="34" width="96" height="66" rx="4" fill="#fff" stroke="var(--color-hairline)"></rect>
            <path d="M44 50 h48 M44 60 h72 M44 70 h60" stroke="var(--color-plasma-violet)" strokeWidth="4" strokeLinecap="round" opacity=".35"></path>
            <rect x="44" y="78" width={Math.min(72, 6 + len * 4)} height="6" rx="3" fill="var(--color-plasma-violet)"></rect>
          </g></g>
          <path d="M20 54 L80 86 L140 54 L140 104 Q140 110 134 110 L26 110 Q20 110 20 104 Z" fill="var(--color-blush-mist)" stroke="var(--color-plasma-violet)" strokeWidth="2" strokeLinejoin="round"></path>
          <path d="M20 50 L80 84 L140 50 Z" fill="var(--color-blush-mist)" stroke="var(--color-plasma-violet)" strokeWidth="2" strokeLinejoin="round" className="ks-env-flap-f"></path>
          <circle cx="80" cy="78" r="9" fill="var(--color-plasma-violet)" className="ks-env-seal"></circle>
          <path d="M76 78 l3 3 l6 -6" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="ks-env-seal"></path>
        </g>
        {[[22, 30], [138, 26], [150, 70], [10, 76]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" className="ks-env-spark" style={{ animationDelay: i * .35 + 's' }}></circle>)}
      </svg>
    </button>
  );
}

function KSSignup({ onClose }) {
  const { tx } = useKS();
  const { EmailCapture } = DS;
  const [done, setDone] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [len, setLen] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const [bad, setBad] = React.useState(0);
  const fieldRef = React.useRef(null);
  const submit = (v) => {
    if (!/\S+@\S+\.\S+/.test(v)) { setBad((b) => b + 1); return; }
    setSent(true); setTimeout(() => setDone(true), 1100);
  };
  React.useEffect(() => { const k = (e) => e.key === 'Escape' && onClose(); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, []);
  return (
    <div className="ks-modal-bg" onClick={onClose}>
      <div className="ks-modal" role="dialog" aria-modal="true" aria-labelledby="ks-su-t" onClick={(e) => e.stopPropagation()}>
        <button className="ks-modal-x" onClick={onClose} aria-label={tx('Close', 'Rufe')}><i className="ph ph-x"></i></button>
        {done ? <React.Fragment>
          <KSEnvelope done></KSEnvelope>
          <h3 id="ks-su-t">{tx('You’re signed up.', 'An yi miki rajista.')}</h3>
          <p>{tx('We’ll send occasional updates on Kariyar’s work.', 'Za mu riƙa aiko da labarai game da aikin Kariyar lokaci-lokaci.')}</p>
        </React.Fragment> : <React.Fragment>
          <KSEnvelope focus={focus} len={len} sent={sent} bad={bad} onClick={() => fieldRef.current?.querySelector('input')?.focus()}></KSEnvelope>
          <h3 id="ks-su-t">{tx('Sign up for updates', 'Yi rajista don labarai')}</h3>
          <p>{tx("Impact stories, partner news and programme updates. No spam. Unsubscribe any time.", "Labaran tasiri, labaran abokan hulɗa da sabbin shirye-shirye. Babu saƙon banza. Ki daina a kowane lokaci.")}</p>
          <div ref={fieldRef} className="ks-modal-field" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onInput={(e) => setLen(e.target.value.length)}><EmailCapture width="100%" placeholder={tx('Your email address', 'Adireshin imel ɗinki')} cta={tx('Sign up', 'Yi rajista')} onSubmit={submit}></EmailCapture></div>
        </React.Fragment>}
      </div>
    </div>
  );
}

function KSFooter() {
  const { tx } = useKS();
  const [su, setSu] = React.useState(false);
  const socials = [['facebook-logo', 'Facebook'], ['x-logo', 'X'], ['youtube-logo', 'YouTube'], ['instagram-logo', 'Instagram'], ['whatsapp-logo', 'WhatsApp'], ['tiktok-logo', 'TikTok']];
  const links = [[tx('For partners', 'Ga abokan hulɗa'), 'Kariya Programme Dashboard.html'], [tx('For responders', "Ga ma'aikatan taimako"), 'Kariya Responder Console.html'], [tx('Safeguarding', 'Kariyar yara da mata'), '#'], [tx('Privacy policy', 'Manufar sirri'), '#']];
  return (
    <footer className="ks-footer" data-screen-label="Footer">
      <div className="ks-foot-in">
        <div className="ks-foot-top">
          <div className="ks-foot-id">
            <span className="brand"><i className="ph-fill ph-shield-check"></i>Kariyar</span>
            <div className="ks-foot-contact">
              <span><b>{tx('Helpline:', 'Layin taimako:')}</b> <a href="tel:*384*77%23">*384*77#</a></span>
              <span><b>{tx('Email:', 'Imel:')}</b> <a href="mailto:hello@kariyar.org">hello@kariyar.org</a></span>
            </div>
          </div>
          <div className="ks-foot-act">
            <div className="ks-socials">{socials.map(([ic, l]) => <a key={ic} href="#" aria-label={l}><i className={'ph-fill ph-' + ic}></i></a>)}</div>
            <a className="ks-foot-news" href="#" onClick={(e) => { e.preventDefault(); setSu(true); }}><i className="ph ph-envelope-simple"></i><u>{tx('Sign up for updates', 'Yi rajista don labarai')}</u></a>
          </div>
        </div>
        <div className="ks-foot-bottom">
          <div className="ks-foot-legal">
            <span>© 2026 Kariyar</span>
          </div>
          <nav className="ks-foot-links">{links.map(([l, href], i) => <React.Fragment key={l}>{i > 0 && <span>|</span>}<a href={href}>{l}</a></React.Fragment>)}</nav>
        </div>
      </div>
      {su && <KSSignup onClose={() => setSu(false)}></KSSignup>}
    </footer>
  );
}

export { KSFinale, KSCta, KSFooter };
