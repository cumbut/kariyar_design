'use client';
import React from 'react';
import { useKS, KS_SKIN, Woman } from './KsFigures.jsx';

const KS_STORY = [
  { en: ['Zainab is seventeen and lives with her family.', 'Lately, home does not feel safe, and she does not know who to tell.'], ha: ["Zainab 'yar shekara goma sha bakwai ce, tana zaune tare da iyalinta.", 'Kwanan nan gida ba ya jin lafiya, kuma ba ta san wa za ta gaya wa ba.'], stat: { n: ['1 in 4', '1 cikin 4'], en: 'Nigerian women aged 15–49 have experienced physical or sexual violence from a partner.', ha: "Mata 'yan Najeriya masu shekaru 15–49 sun fuskanci cin zarafi na jiki ko na jima'i daga abokin zama.", src: 'OECD SIGI, 2023' } },
  { en: ['She has questions she cannot ask out loud.', 'Is this normal? Is it my fault? Who would believe me?'], ha: ['Tana da tambayoyin da ba za ta iya yi a fili ba.', "Wannan al'ada ne? Laifina ne? Wa zai yarda da ni?"], stat: { n: ['55%', '55%'], en: 'of women who experienced violence never sought help or told anyone.', ha: 'na matan da suka fuskanci cin zarafi ba su taɓa neman taimako ko gaya wa kowa ba.', src: 'NDHS, 2018' } },
  { en: ['Her phone is shared, and the data often runs out.', 'Any help has to be quiet, private, and work on whatever phone is in her hand.'], ha: ['Wayarta ta gida ce, kuma data kan ƙare.', 'Duk wani taimako dole ya zama a ɓoye, kuma ya yi aiki a kowace waya.'], stat: { n: ['18%', '18%'], en: 'of schoolgirls aged 15–20 own a digital device (survey of 8,223 girls).', ha: "na 'yan mata masu shekaru 15–20 ne kawai ke da na'urar zamani (binciken 'yan mata 8,223).", src: 'Schoolgirl survey, 2023' } },
  { en: ['One evening, her cousin Maryam tells her about Kariyar.', '“Nobody has to know. It speaks Hausa, and it listens.”'], ha: ["Wata yamma, 'yar uwarta Maryam ta gaya mata game da Kariyar.", '“Babu wanda zai sani. Yana jin Hausa, kuma yana saurare.”'], stat: { n: ['32%', '32%'], en: 'of survivors seek help, almost unchanged from 31% in 2013. The usual routes are not reaching women.', ha: 'na waɗanda abin ya shafa ke neman taimako, kusan iri ɗaya da 31% a 2013. Hanyoyin da aka saba ba sa kaiwa ga mata.', src: 'NDHS, 2013 and 2018' } },
  { en: ['For the first time, Zainab is not alone with it.', 'This is what Kariyar does for her, and for every woman like her.'], ha: ['A karon farko, Zainab ba ita kaɗai ba ce.', 'Wannan shi ne abin da Kariyar ke yi mata, da kowace mace kamarta.'] },
];

const KS_TIME = ['dusk', 'night', 'late', 'visit', 'morning'];

function KSRoom() {
  return (
    <svg className="ks-room" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <rect width="1600" height="700" fill="#c4875a"></rect>
      <rect y="590" width="1600" height="110" fill="#b07148"></rect>
      <path d="M0 590 H1600" stroke="#9a5f3b" strokeWidth="4"></path>
      {[[90, 120], [330, 60], [520, 430], [860, 90], [1160, 160], [1480, 80], [260, 520], [980, 530], [1380, 480], [700, 360]].map(([x, y], k) => <path key={k} d={`M${x} ${y} q22 -4 44 0`} stroke="rgba(0,0,0,.08)" strokeWidth="3" fill="none"></path>)}
      <rect y="700" width="1600" height="200" fill="#8b5b3c"></rect>
      <path d="M0 700 H1600" stroke="#6e4329" strokeWidth="5"></path>
      <g>
        <path d="M612 128 L578 144 L578 304 L612 310 Z M808 128 L842 144 L842 304 L808 310 Z" fill="#7a4e2e"></path>
        <rect x="612" y="124" width="196" height="190" fill="#5a3a24" rx="6"></rect>
        <rect x="624" y="136" width="172" height="166" className="ks-sky"></rect>
        <circle cx="752" cy="182" r="22" fill="#fff0d8" className="ks-moon2"></circle>
        <circle cx="668" cy="262" r="28" fill="#ffc53d" className="ks-sun"></circle>
        <path d="M710 136 V302 M624 219 H796" stroke="#5a3a24" strokeWidth="7"></path>
        <rect x="596" y="314" width="228" height="14" rx="4" fill="#6e4329"></rect>
      </g>
      <rect x="1380" y="300" width="170" height="400" rx="85" ry="60" fill="#2b1a10"></rect>
      <rect x="1380" y="300" width="170" height="400" rx="85" ry="60" className="ks-doorlight"></rect>
      <g className="ks-shadow"><circle cx="1465" cy="420" r="26" fill="#120a06"></circle><path d="M1430 456 Q1465 440 1500 456 L1510 700 L1420 700 Z" fill="#120a06"></path></g>
      <g className="ks-curtain">
        <path d="M1388 340 Q1465 316 1542 340 L1536 590 Q1500 610 1465 590 Q1430 610 1394 590 Z" fill="#3655e5"></path>
        {[384, 440, 496, 552].map(y => <path key={y} d={`M1390 ${y} H1540`} stroke="#ffc53d" strokeWidth="7" strokeDasharray="14 8"></path>)}
        <path d="M1388 340 Q1465 316 1542 340" stroke="#5a3a24" strokeWidth="8" fill="none"></path>
      </g>
      <rect x="860" y="430" width="120" height="14" rx="4" fill="#6e4329"></rect>
      <g transform="translate(920 430) scale(1.6) translate(-239 -186)">
        <rect x="224" y="174" width="30" height="12" rx="3" fill="#5a3a24"></rect>
        <path d="M228 174 Q226 150 239 140 Q252 150 250 174 Z" fill="#fff0d8" opacity=".55"></path>
        <path d="M239 168 q-5 -10 0 -18 q5 8 0 18" className="ks-flame"></path>
        <path d="M226 142 Q239 120 252 142" stroke="#5a3a24" strokeWidth="3" fill="none"></path>
      </g>
      <g><circle cx="420" cy="150" r="30" fill="#d9a441"></circle><path d="M392 144 q28 15 56 0" stroke="#7a4e2e" strokeWidth="4" fill="none"></path><path d="M420 120 v-24" stroke="#5a3a24" strokeWidth="3"></path></g>
      <g><circle cx="500" cy="138" r="22" fill="#e0b25a"></circle><path d="M480 135 q20 12 40 0" stroke="#7a4e2e" strokeWidth="4" fill="none"></path><path d="M500 116 v-20" stroke="#5a3a24" strokeWidth="3"></path></g>
      <g><ellipse cx="140" cy="730" rx="52" ry="62" fill="#a0522d"></ellipse><rect x="112" y="658" width="56" height="16" rx="6" fill="#8b4524"></rect><path d="M94 722 q46 16 92 0" stroke="#7a3b1f" strokeWidth="4" fill="none"></path></g>
    </svg>
  );
}

function KSRoomGlow() {
  return (
    <svg className="ks-room ks-roomglow" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs><radialGradient id="ksLamp"><stop offset="0" stopColor="#ffc53d" stopOpacity=".55"></stop><stop offset="1" stopColor="#ffc53d" stopOpacity="0"></stop></radialGradient></defs>
      <circle cx="920" cy="400" r="260" fill="url(#ksLamp)" className="ks-lampglow"></circle>
      <path d="M920 412 q-8 -16 0 -29 q8 13 0 29" fill="#ffc53d" className="ks-flame"></path>
    </svg>
  );
}

function KSStoryScene({ i }) {
  const { tx } = useKS();
  const friend = i === 3;
  const alt = [
    tx('Illustration: Zainab stands alone in her family’s room at dusk, looking worried.', 'Hoto: Zainab tana tsaye ita kaɗai a ɗakin iyalinta da yamma, cikin damuwa.'),
    tx('Illustration: at night, Zainab is surrounded by question marks, unsure who to ask.', 'Hoto: da dare, Zainab tana kewaye da alamomin tambaya, ba ta san wa za ta tambaya ba.'),
    tx('Illustration: late at night, Zainab looks down at her phone, worried her data could be shared.', 'Hoto: cikin dare, Zainab tana kallon wayarta, tana tsoron a iya yaɗa bayananta.'),
    tx('Illustration: her friend Maryam visits and whispers to Zainab about Kariyar.', 'Hoto: ƙawarta Maryam ta ziyarce ta tana raɗa mata game da Kariyar.'),
    tx('Illustration: in the morning, Zainab smiles as she holds her phone with Kariyar open.', 'Hoto: da safe, Zainab tana murmushi riƙe da wayarta inda Kariyar ke buɗe.'),
  ][i] || '';
  return (
    <div className="ks-scene" role="img" aria-label={alt}>
      <svg className="ks-mat" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M50 0 L350 0 L400 60 L0 60 Z" fill="#e6c27a"></path>{[14, 28, 42].map(y => <path key={y} d={`M${50 - y * .83} ${y} H${350 + y * .83}`} stroke="#a8452f" strokeWidth="4" strokeDasharray="14 8"></path>)}</svg>
      <div className={'ks-halo' + (i === 4 ? ' on' : '')}></div>
      {['?', '?', '?'].map((q, n) => <span key={n} className={'ks-think t' + n + (i === 1 ? ' on' : '')}>{q}</span>)}
      <div className={'ks-chip c-data' + (i === 2 ? ' on' : '')}><i className="ph ph-cell-signal-slash"></i>{tx('No data', 'Babu data')}</div>
      <div className={'ks-chip c-shared' + (i === 2 ? ' on' : '')}><i className="ph ph-users"></i>{tx('Shared phone', 'Wayar gida')}</div>
      <div className={'ks-chip c-kariyar' + (i === 4 ? ' on' : '')}><i className="ph-fill ph-shield-check"></i>Kariyar</div>
      <div className={'ks-whisper' + (friend ? ' on' : '')}>Kariyar<i className="ks-wdot"></i><i className="ks-wdot"></i><i className="ks-wdot"></i></div>
      <div className="ks-fig zainab" style={{ left: friend ? '34%' : '50%' }}>
        <Woman pose={i === 2 || i === 4 ? 'phone' : 'stand'} look={i === 2 ? 'down' : 'front'} mood={i <= 2 ? 'sad' : i === 3 ? 'calm' : 'elated'} screen={i === 4 ? '#e0eafc' : '#484b73'}></Woman>
      </div>
      <div className={'ks-fig maryam' + (friend ? ' on' : '')}>
        <Woman skin={KS_SKIN[2]} hijab="#ffe0e2" trim="#5a3f99" dress="#5a3f99" mood="smile"></Woman>
      </div>
    </div>
  );
}

function KSStory() {
  const { lang, tx } = useKS();
  const [i, setI] = React.useState(0);
  const refs = React.useRef([]);
  const inner = React.useRef([]);
  React.useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setI(+e.target.dataset.i); }), { rootMargin: '-45% 0px -45% 0px' });
    refs.current.forEach(r => r && io.observe(r));
    let raf;
    const fade = () => {
      const top = 56, bot = innerHeight, zone = Math.max(80, (bot - top) * 0.22);
      const mob = innerWidth <= 860;
      const sc = mob && document.querySelector('.ks-scene');
      const edge = sc ? sc.getBoundingClientRect().bottom + 8 : top;
      inner.current.forEach(el => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (mob) {
          const x = edge - r.top, z = 64;
          const m = x <= -z ? 'none' : `linear-gradient(to bottom, transparent ${x.toFixed(0)}px, #000 ${(x + z).toFixed(0)}px)`;
          el.style.maskImage = el.style.webkitMaskImage = m;
          el.style.opacity = Math.max(0, Math.min(1, (bot - r.top) / zone)).toFixed(3);
          el.style.transform = 'none';
          return;
        }
        el.style.maskImage = el.style.webkitMaskImage = 'none';
        const o = Math.max(0, Math.min(1, (r.bottom - top) / zone, (bot - r.top) / zone));
        el.style.opacity = o.toFixed(3);
        el.style.transform = `translateY(${((1 - o) * (r.top < (top + bot) / 2 ? -16 : 16)).toFixed(1)}px)`;
      });
    };
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fade); };
    fade(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { io.disconnect(); removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, []);
  return (
    <section id="story" className="ks-story" data-screen-label="Story">
      <div className="ks-story-bgwrap"><div className={'ks-story-bg t-' + KS_TIME[i]}>
        <KSRoom></KSRoom>
        <div className="ks-dim"></div>
        <KSRoomGlow></KSRoomGlow>
        <div className="ks-scrim"></div>
        <KSStoryScene i={i}></KSStoryScene>
      </div></div>
      <div className="ks-story-text">
        {KS_STORY.map((c, n) => (
          <article key={n} data-i={n} ref={el => (refs.current[n] = el)} className="ks-ch"><div className="ks-ch-in" ref={el => (inner.current[n] = el)}>
            <h2>{c[lang][0]}</h2>
            <p>{c[lang][1]}</p>
            {c.stat && <div className="ks-stat"><b>{c.stat.n[lang === 'ha' ? 1 : 0]}</b><span>{c.stat[lang]}</span><small>{tx('Source', 'Tushe')}: {c.stat.src}</small></div>}
            {n === 0 && <span className="ks-scroll"><i className="ph ph-arrow-down"></i>{tx('Scroll to follow her story', 'Gungura don bin labarinta')}</span>}
          </div></article>
        ))}
      </div>
    </section>
  );
}

export { KSStory };
