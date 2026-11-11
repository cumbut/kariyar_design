'use client';
import React from 'react';
import { useKS, KS_SKIN, useInView, useLoop, Woman } from './KsFigures.jsx';

const KS_FEATS = [
  { id: 'talk', icon: 'chats-circle', tone: 'var(--color-lavender-whisper)',
    eyebrow: ['Talk privately', 'Magana a ɓoye'], title: ["Ask the question you can't ask anyone else.", "Yi tambayar da ba za ki iya yi wa kowa ba."],
    body: ["Zainab types in Hausa or English and gets a calm, clear answer in seconds. No name, no account, no judgement.", "Zainab tana rubutu da Hausa ko Turanci kuma tana samun amsa mai sauƙi cikin daƙiƙoƙi. Babu suna, babu asusu, babu hukunci."],
    helps: ["She understands her situation before she decides anything.", "Tana fahimtar halin da take ciki kafin ta yanke kowace shawara."] },
  { id: 'hold', icon: 'microphone', tone: 'var(--color-polar-sky)',
    eyebrow: ['Hold to speak', 'Riƙe don magana'], title: ["No need to read or type.", "Ba sai kin karanta ko kin rubuta ba."],
    body: ["Hold Send for two seconds and just speak. Made for women who find reading hard or need to be quick.", "Riƙe Aika na daƙiƙa biyu ki yi magana kawai. An yi shi don matan da karatu ke musu wuya ko suke buƙatar sauri."],
    helps: ['Every woman can use it, whatever her reading level.', 'Kowace mace za ta iya amfani da shi, ko da ba ta iya karatu sosai ba.'] },
  { id: 'help', icon: 'map-pin-area', tone: 'var(--color-mint-glow)',
    eyebrow: ['Find help', 'Nemi taimako'], title: ["Know exactly where to go.", "Ki san inda za ki je daidai."],
    body: ["See clinics, legal aid and safe spaces near you, and what will happen when you arrive.", "Ga asibitoci, taimakon shari'a da wuraren tsaro kusa da ke, da abin da zai faru idan kin isa."],
    helps: ["She arrives knowing what to expect.", "Tana isa ta san abin da za ta tarar."] },
  { id: 'ussd', icon: 'phone', tone: 'var(--color-sunbeam)',
    eyebrow: ['SMS & USSD', 'SMS da USSD'], title: ['Works on any phone, without data.', 'Yana aiki a kowace waya, ba tare da data ba.'],
    body: ["Dial *384*77# or text 32077 from any basic phone. A USSD session leaves nothing saved on the handset.", "Danna *384*77# ko tura saƙo zuwa 32077 daga kowace waya. Zaman USSD ba ya barin komai a cikin waya."],
    helps: ['No smartphone, no data, no app to hide.', 'Babu buƙatar wayar zamani, ko data, ko manhajar da za a ɓoye.'] },
  { id: 'resp', icon: 'headset', tone: 'var(--color-blush-mist)',
    eyebrow: ['Trained responders', "Ma'aikatan taimako"], title: ["A trained person, whenever she's ready.", "Ma'aikaciya da aka horar, duk lokacin da ta shirya."],
    body: ["Our responders are trained in survivor care and reply in Hausa or English. Zainab stays in control of what she shares.", "Ma'aikatanmu an horar da su kan kula da waɗanda abin ya shafa kuma suna amsawa da Hausa ko Turanci. Zainab ce ke yanke abin da za ta faɗa."],
    helps: ['Real support, at her pace.', 'Taimako na gaske, a lokacin da ta shirya.'] },
];

function TalkScene({ on }) {
  const { tx } = useKS();
  const s = useLoop(on, [700, 1400, 1600, 3200]);
  return (<>
    <div className="ks-bubbles">
      <div className={'ks-b me' + (s >= 1 ? ' on' : '')}>{tx('Is what is happening to me normal?', 'Abin da ke faruwa da ni al’ada ne?')}</div>
      <div className={'ks-typing' + (s === 2 ? ' on' : '')}><span></span><span></span><span></span></div>
      <div className={'ks-b them' + (s >= 3 ? ' on' : '')}>{tx('It is not your fault. Let’s talk about what is going on.', 'Ba laifinki ba ne. Mu yi magana kan abin da ke faruwa.')}</div>
    </div>
    <div className="ks-fig-f left"><Woman pose="phone" look="down"></Woman></div>
  </>);
}

function HoldScene({ on }) {
  const { tx } = useKS();
  const s = useLoop(on, [900, 2000, 2200, 2600]);
  return (<>
    <div className="ks-hold">
      <div className={'ks-voice' + (s === 3 ? ' on' : '')}><i className="ph-fill ph-play"></i><span className="ks-wave sm">{Array.from({ length: 14 }).map((_, k) => <i key={k} style={{ height: 6 + ((k * 7) % 14) }}></i>)}</span>0:08</div>
      <div className={'ks-listen' + (s === 2 ? ' on' : '')}><span className="ks-wave">{Array.from({ length: 9 }).map((_, k) => <i key={k} style={{ animationDelay: k * 90 + 'ms' }}></i>)}</span>{tx('Listening…', 'Ana saurare…')}</div>
      <div className="ks-compose">
        <span>{s === 1 ? tx('Keep holding…', 'Ci gaba da riƙewa…') : tx('Type or hold Send', 'Rubuta ko riƙe Aika')}</span>
        <span className={'ks-send' + (s >= 1 && s <= 2 ? ' hold' : '')}>
          <svg viewBox="0 0 52 52"><circle cx="26" cy="26" r="24" className={s === 1 ? 'run' : s === 2 ? 'full' : ''}></circle></svg>
          <i className={'ph ' + (s >= 1 && s <= 2 ? 'ph-microphone' : 'ph-arrow-up')}></i>
        </span>
      </div>
    </div>
    <div className="ks-fig-f left"><Woman pose="phone" look="front" mood="calm" skin={KS_SKIN[1]} hijab="#3655e5" dress="#5a3f99"></Woman></div>
  </>);
}

function HelpScene({ on }) {
  const { tx } = useKS();
  const s = useLoop(on, [600, 900, 900, 900, 3000]);
  const pins = [[54, 100, tx('Clinic · 1.2 km', 'Asibiti · 1.2 km')], [140, 48, tx('Legal aid · 2.4 km', "Taimakon shari'a · 2.4 km")], [230, 52, tx('Safe space · 3.1 km', 'Wurin tsaro · 3.1 km')]];
  return (<>
    <div className="ks-mapwrap">
      <div className="ks-map">
        <svg viewBox="0 0 300 220" preserveAspectRatio="none">
          {[40, 100, 160].map(y => <path key={y} d={`M0 ${y} L300 ${y + 12}`} stroke="#fff" strokeWidth="9"></path>)}
          {[60, 150, 240].map(x => <path key={x} d={`M${x} 0 L${x - 14} 220`} stroke="#fff" strokeWidth="9"></path>)}
          <path d="M40 200 L54 100 L146 104 L140 48 L230 52" className={'ks-route' + (s >= 1 ? ' on' : '')}></path>
          <circle cx="40" cy="200" r="7" fill="#3655e5"></circle><circle cx="40" cy="200" r="14" fill="#3655e5" opacity=".2" className="ks-ping"></circle>
        </svg>
        {pins.map(([x, y], k) => <div key={k} className={'ks-pin' + (s >= k + 1 ? ' on' : '')} style={{ left: (x / 300 * 100) + '%', top: (y / 220 * 100) + '%' }}><i className="ph-fill ph-map-pin"></i><b>{k + 1}</b></div>)}
      </div>
      <ol className="ks-places">{pins.map(([, , l], k) => <li key={k} className={s >= k + 1 ? 'on' : ''}><b>{k + 1}</b>{l}</li>)}</ol>
    </div>
    <div className="ks-fig-f left small"><Woman hijab="#5a3f99" mood="calm"></Woman></div>
  </>);
}

function UssdScene({ on }) {
  const { tx } = useKS();
  const code = '*384*77#';
  const s = useLoop(on, [...Array(code.length + 1).fill(240), 700, 3400]);
  const menu = s > code.length;
  return (<>
    <div className="ks-fp">
      <div className="ks-fp-scr">
        {menu
          ? <pre>{'Kariyar\n' + tx('1 Talk to someone\n2 Find help\n3 Learn\n0 Exit', '1 Yi magana da wani\n2 Nemi taimako\n3 Koyo\n0 Fita')}</pre>
          : <div className="ks-fp-dial">{code.slice(0, s)}<span className="ks-caret"></span></div>}
      </div>
      <div className="ks-fp-keys">{'123456789*0#'.split('').map(k => <span key={k} className={!menu && code[s - 1] === k ? 'on' : ''}>{k}</span>)}</div>
    </div>
    <div className="ks-fig-f left"><Woman pose="basic" look="down" skin={KS_SKIN[2]} hijab="#3e1bc9" dress="#3655e5" screen="#fff0d8"></Woman></div>
  </>);
}

function RespScene({ on }) {
  const { tx } = useKS();
  const s = useLoop(on, [800, 1600, 1600, 3000]);
  return (<>
    <svg className="ks-link" viewBox="0 0 400 200" preserveAspectRatio="none"><path id="ks-arc" d="M90 150 C150 20 250 20 310 150" fill="none" stroke="#5a3f99" strokeWidth="2" strokeDasharray="4 8" opacity=".5"></path>
      {on && <circle r="6" fill="#3655e5"><animateMotion dur="2.4s" repeatCount="indefinite"><mpath href="#ks-arc"></mpath></animateMotion></circle>}</svg>
    <div className="ks-bubbles center">
      <div className={'ks-b them' + (s >= 1 ? ' on' : '')}><b>Hauwa · {tx('Responder', "Ma'aikaciya")}</b>{tx('I’m here. Take your time.', 'Ina nan. Ki ɗauki lokacinki.')}</div>
      <div className={'ks-b me' + (s >= 2 ? ' on' : '')}>{tx('Thank you. I want to talk.', 'Na gode. Ina son magana.')}</div>
    </div>
    <div className="ks-fig-f left"><Woman pose="phone" look="down" mood="calm"></Woman></div>
    <div className="ks-fig-f right"><Woman headset mood="smile" skin={KS_SKIN[1]} hijab="#fff0d8" trim="#5a3f99" dress="#484b73"></Woman></div>
  </>);
}

const KS_ALT = {
  talk: ['Illustration: a young woman looks down at her phone while a private chat with Kariyar appears beside her.', 'Hoto: wata budurwa tana kallon wayarta yayin da tattaunawar sirri da Kariyar ke bayyana kusa da ita.'],
  hold: ['Illustration: a woman holds the send button to record a voice message to Kariyar.', 'Hoto: wata mace tana riƙe maɓallin aika don naɗar saƙon murya zuwa Kariyar.'],
  help: ['Illustration: a map with numbered pins marking a clinic, legal aid and a safe space nearby.', "Hoto: taswira mai alamomi masu lamba da ke nuna asibiti, taimakon shari'a da wurin tsaro kusa."],
  ussd: ['Illustration: a woman dials *384*77# on a keypad phone and the Kariyar menu appears.', 'Hoto: wata mace tana danna *384*77# a wayar maɓalli kuma menu na Kariyar ya bayyana.'],
  resp: ['Illustration: a woman chats with Hauwa, a responder wearing a headset.', "Hoto: wata mace tana tattaunawa da Hauwa, ma'aikaciya mai belun kunne."],
};
const KS_SCENES = { talk: TalkScene, hold: HoldScene, help: HelpScene, ussd: UssdScene, resp: RespScene };

function KSFeature({ f, n }) {
  const { lang, tx } = useKS();
  const ref = React.useRef(null);
  const on = useInView(ref);
  const L = (a) => a[lang === 'ha' ? 1 : 0];
  const Scene = KS_SCENES[f.id];
  return (
    <section ref={ref} id={'f-' + f.id} className={'ks-feat' + (n % 2 ? ' flip' : '') + (on ? ' in' : '')} data-screen-label={'Feature ' + (n + 1)}>
      <div className="ks-card" style={{ background: f.tone }} role="img" aria-label={KS_ALT[f.id][lang === 'ha' ? 1 : 0]}><Scene on={on}></Scene></div>
      <div className="ks-feat-text">
        <h2>{L(f.title)}</h2>
        <p>{L(f.body)}</p>
        <div className="ks-helps"><span>{tx("How Kariyar helps", "Yadda Kariyar ke taimakawa")}</span><p>{L(f.helps)}</p></div>
      </div>
    </section>
  );
}

function KSFeatures() {
  const { tx } = useKS();
  return (
    <div id="features" className="ks-light">
      <div className="ks-intro">
        <h2>{tx("Five ways to get help. All private, all free.", "Hanyoyi biyar na samun taimako. Duk na sirri, duk kyauta.")}</h2>
        <p>{tx("Chat, speak, find a place, use a basic phone or talk to a trained person. In Hausa or English.", "Yi hira, yi magana, nemo wuri, yi amfani da waya ta yau da kullum ko ki yi magana da ma'aikaciya. Da Hausa ko Turanci.")}</p>
      </div>
      {KS_FEATS.map((f, n) => <KSFeature key={f.id} f={f} n={n}></KSFeature>)}
    </div>
  );
}

export { KS_FEATS, KSFeatures };
