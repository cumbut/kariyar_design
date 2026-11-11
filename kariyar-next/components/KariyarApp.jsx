'use client';
import React from 'react';
import { DS } from '../lib/ds.js';
import { KSLang } from './KsFigures.jsx';
import { KSImpact } from './KsImpact.jsx';
import { KSFeatures } from './KsFeatures.jsx';
import { KSFinale, KSCta, KSFooter } from './KsFinale.jsx';
import { KSContact } from './KsContact.jsx';

export default function KSApp() {
  const [lang, setLang] = React.useState(() => localStorage.getItem('ks-lang') || 'en');
  React.useEffect(() => { localStorage.setItem('ks-lang', lang); document.documentElement.lang = lang; }, [lang]);
  const tx = (en, ha) => (lang === 'ha' ? ha : en);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => { const on = () => setScrolled(scrollY > 4); on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on); }, []);
  const [page, setPage] = React.useState(() => (location.hash === '#contact' ? 'contact' : 'home'));
  React.useEffect(() => {
    const on = () => {
      const next = location.hash === '#contact' ? 'contact' : 'home';
      setPage(next);
      if (next === 'contact') window.scrollTo(0, 0);
      else requestAnimationFrame(() => { const el = location.hash && document.querySelector(location.hash); if (el) window.scrollTo(0, el.getBoundingClientRect().top + scrollY - 56); });
    };
    addEventListener('hashchange', on); return () => removeEventListener('hashchange', on);
  }, []);
  React.useEffect(() => {
    const meta = {
      home: [tx("Kariyar · Private help for women and girls, on any phone", "Kariyar · Taimako na sirri ga mata da 'yan mata, a kowace waya"), tx("Talk to a trained responder in Hausa or English, find clinics and legal aid near you, or dial *384*77# without data. It's free, and you never have to give your name.", "Yi magana da ma'aikaciya da aka horar da Hausa ko Turanci, nemo asibitoci da taimakon shari'a kusa da ke, ko danna *384*77# ba tare da data ba. Kyauta ne, kuma ba sai kin faɗi sunanki ba.")],
      contact: [tx('Contact us · Kariyar', 'Tuntuɓe mu · Kariyar'), tx('Contact Kariyar about partnerships, funding, press or becoming a responder. If you are in danger, call 112.', "Tuntuɓi Kariyar game da haɗin gwiwa, tallafi, aikin jarida ko zama ma'aikaciya. Idan kina cikin haɗari, kira 112.")],
    }[page];
    document.title = meta[0];
    document.querySelector('meta[name="description"]').setAttribute('content', meta[1]);
  }, [page, lang]);
  const { GradientButton } = DS;
  const heroImg = React.useRef(null);
  const heroBg = React.useRef(null);
  React.useEffect(() => {
    const bg = heroBg.current; if (!bg) return;
    const sec = bg.parentElement; let x = .1, y = .95, raf = 0, t0 = performance.now();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const tick = now => { const d = (now - t0) / 1000; x = .3 + Math.sin(d * .22) * .25 + Math.sin(d * .53) * .06; y = .9 + Math.cos(d * .17) * .08; bg.style.setProperty('--mx', x.toFixed(4)); bg.style.setProperty('--my', y.toFixed(4)); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [page]);
  React.useEffect(() => {
    const el = heroImg.current; if (!el) return;
    const sec = el.closest('.ks-hero');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.style.setProperty('--p', 1); return; }
    let raf = 0;
    const upd = () => { raf = 0; const r = el.getBoundingClientRect(); const p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight * 0.75))); el.style.setProperty('--p', p.toFixed(3));
      const s = sec.getBoundingClientRect(); const t = Math.min(1, Math.max(0, -s.top / (s.height * 0.55))); sec.style.setProperty('--b', (t * t * (3 - 2 * t)).toFixed(3)); };
    const on = () => { if (!raf) raf = requestAnimationFrame(upd); };
    upd(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [page]);
  return (
    <KSLang.Provider value={{ lang, tx, setLang }}>
      <nav className={'ks-nav' + (scrolled ? ' scrolled' : '')}>
        <div className="ks-nav-l">
          <a className={'lnk' + (page === 'home' ? ' on' : '')} style={{ fontWeight: 600 }} href="#top" onClick={(e) => { e.preventDefault(); history.pushState(null, '', location.pathname + location.search); setPage('home'); window.scrollTo(0, 0); }}>{tx('Home', 'Gida')}</a>
          <a className="lnk" href="#impact">{tx('Impact', 'Tasiri')}</a>
          <a className="lnk" href="#features">{tx('How we help', 'Yadda muke taimakawa')}</a>
          <a className={'lnk ks-nav-contact' + (page === 'contact' ? ' on' : '')} href="#contact">{tx('Contact', 'Tuntuɓe mu')}</a>
        </div>
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); history.pushState(null, '', location.pathname + location.search); setPage('home'); window.scrollTo(0, 0); }}><i className="ph-fill ph-shield-check"></i>Kariyar</a>
        <div className="ks-nav-r">
        <div className="ks-lang" role="group" aria-label="Language">
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
          <button className={lang === 'ha' ? 'on' : ''} onClick={() => setLang('ha')}>HA</button>
        </div>
        <GradientButton size="sm" onClick={() => (location.hash = 'talk')}><span className="ks-long">{tx('Talk to someone now', 'Yi magana da wani yanzu')}</span><span className="ks-short">{tx('Talk now', 'Yi magana')}</span></GradientButton>
        </div>
      </nav>
      {page === 'contact' ? <KSContact></KSContact> : <React.Fragment>
      <section className="ks-hero" id="top" data-screen-label="Hero">
        <div ref={heroBg} className="ks-hero-bg" aria-hidden="true"></div>
        <div className="ks-hero-text">
          <h1>{tx("help for women and girls, on any phone.", "Taimako na sirri ga mata da 'yan mata, a kowace waya.")}</h1>
          <p>{tx("Talk to a trained responder in Hausa or English, find clinics and legal aid near you. It's free, and you never have to give your name.", "Yi magana da ma'aikaciya da aka horar da Hausa ko Turanci, nemo asibitoci da taimakon shari'a kusa da ke. Kyauta ne, kuma ba sai kin faɗi sunanki ba.")}</p>
          <div className="ks-hero-cta"><GradientButton size="lg" onClick={() => (location.hash = 'talk')}>{tx('Talk to someone now', 'Yi magana da wani yanzu')}</GradientButton><a href="#features">{tx('See how it works', 'Duba yadda yake aiki')}</a></div>
        </div>
        <div ref={heroImg} className="ks-hero-img"><iframe src="/story/index.html" title={tx('Kariyar story: from a private message to real help', 'Labarin Kariyar: daga saƙo na sirri zuwa taimako na gaske')} loading="lazy" tabIndex="-1" aria-hidden="true"></iframe></div>
      </section>
      <KSImpact></KSImpact>
      <KSFeatures></KSFeatures>
      <KSFinale></KSFinale>
      <KSCta></KSCta>
      </React.Fragment>}
      <KSFooter></KSFooter>
    </KSLang.Provider>
  );
}
