'use client';
import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { useKS } from './KsFigures.jsx';

const KS_IMPACT = [
  [18400, '', ["private conversations", "tattaunawar sirri"]],
  [6200, '', ["women and girls connected to care", "mata da 'yan mata da aka haɗa da kulawa"]],
  [42, '', ["clinics, legal aid groups and safe spaces in our network", "asibitoci, ƙungiyoyin shari'a da wuraren tsaro a cikin hanyar sadarwarmu"]],
  [4, ' min', ['median wait to reach a responder', "matsakaicin jira kafin a sami ma'aikaciya"]],
];
const KS_PLACES = [['Sokoto', 13.06, 5.24], ['Katsina', 12.99, 7.6], ['Kano', 12.0, 8.52], ['Kaduna', 10.52, 7.44], ['Bauchi', 10.31, 9.84], ['Plateau', 9.9, 8.86], ['Abuja', 9.08, 7.4], ['Oyo', 7.38, 3.95], ['Lagos', 6.52, 3.38]];

function KSCount({ to, suffix, run }) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    let raf, t0;
    const step = (t) => { t0 ??= t; const k = Math.min(1, (t - t0) / 1600); setV(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <b>{v.toLocaleString('en-US')}{suffix}</b>;
}

function KSNigeria() {
  const ref = React.useRef(null);
  const [geo, setGeo] = React.useState(null);
  React.useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json').then((r) => r.json()).then((t) => {
      const f = topojson.feature(t, t.objects.countries).features.find((x) => x.id === '566');
      const pr = d3.geoMercator().fitExtent([[16, 16], [384, 324]], f);
      setGeo({ d: d3.geoPath(pr)(f), pts: KS_PLACES.map(([n, la, lo]) => [n, ...pr([lo, la])]) });
    }).catch(() => {});
  }, []);
  return (
    <svg ref={ref} className="ks-map" viewBox="0 0 400 340" role="img" aria-label="Map of Nigeria showing areas covered">
      {geo && <path d={geo.d} fill="var(--color-blush-mist)" stroke="var(--color-twilight-iris)" strokeWidth="1.5"></path>}
      {geo && geo.pts.map(([n, x, y]) => <g key={n}><circle cx={x} cy={y} r="11" fill="var(--color-plasma-violet)" opacity=".18"></circle><circle cx={x} cy={y} r="4.5" fill="var(--color-plasma-violet)"></circle><text x={x + 9} y={y + 4}>{n}</text></g>)}
    </svg>
  );
}

function KSImpact() {
  const { lang, tx } = useKS();
  const ref = React.useRef(null);
  const [run, setRun] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const L = lang === 'ha' ? 1 : 0;
  return (
    <section id="impact" className="ks-impact" data-screen-label="Impact">
      <div className="ks-intro">
        <h2>{tx("Every number here is a woman or girl who chose to speak up.", "Kowace lamba a nan mace ce ko yarinya da ta zaɓi ta yi magana.")}</h2>
      </div>
      <div ref={ref} className="ks-imp-grid">
        {KS_IMPACT.map(([n, s, l]) => <div key={l[0]} className="ks-imp-stat"><KSCount to={n} suffix={s} run={run}></KSCount><span>{l[L]}</span></div>)}
      </div>
      <div className="ks-imp-partners">
        <span>{tx('With our partners', 'Tare da abokan hulɗarmu')}</span>
        <div>{Array.from({ length: 6 }).map((_, k) => <span key={k} className="ks-logo-ph">{tx('Partner logo', 'Tambarin abokin hulɗa')}</span>)}</div>
      </div>
    </section>
  );
}

export { KSImpact };
