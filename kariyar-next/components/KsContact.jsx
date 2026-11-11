'use client';
import React from 'react';
import { useKS } from './KsFigures.jsx';
import { DS } from '../lib/ds.js';

function KSContact() {
  const { tx } = useKS();
  const { GradientButton } = DS;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const topics = [tx('General question', 'Tambaya ta gaba ɗaya'), tx('Partnerships & funding', 'Haɗin gwiwa da tallafi'), tx('Become a responder', "Zama ma'aikaciyar taimako"), tx('Press & media', "'Yan jarida")];
  const channels = [
    ['phone', tx('Helpline', 'Layin taimako'), '*384*77#', 'tel:*384*77%23'],
    ['envelope-simple', tx('Email', 'Imel'), 'hello@kariyar.org', 'mailto:hello@kariyar.org'],
    ['map-pin', tx('Office', 'Ofis'), tx('Address to be confirmed', 'Za a tabbatar da adireshi'), null],
  ];
  return (
    <main className="ks-contact" data-screen-label="Contact">
      <div className="ks-con-in">
        <div className="ks-con-side">
          <h1>{tx("Let's work together.", "Mu yi aiki tare.")}</h1>
          <p>{tx("Partner with us, fund the work, cover our story or join as a responder. We reply within two working days.", "Yi haɗin gwiwa da mu, tallafa wa aikin, ba da labarinmu ko shiga a matsayin ma'aikaciya. Muna amsawa cikin kwanakin aiki biyu.")}</p>
          <div className="ks-con-sos"><i className="ph-fill ph-warning-circle"></i><div><b>{tx('Need help now?', 'Kina buƙatar taimako yanzu?')}</b><span>{tx('This form is not monitored around the clock. If you are in danger, call 112. To talk privately, dial *384*77#.', 'Ba a duba wannan fom a kowane lokaci. Idan kina cikin haɗari, kira 112. Don magana a sirri, danna *384*77#.')}</span></div></div>
          <ul className="ks-con-ch">
            {channels.map(([ic, l, v, href]) => <li key={l}><i className={'ph ph-' + ic}></i><div><small>{l}</small>{href ? <a href={href}>{v}</a> : <span>{v}</span>}</div></li>)}
          </ul>
        </div>
        <div className="ks-con-card">
          {sent ? (
            <div className="ks-con-done">
              <i className="ph-fill ph-check-circle"></i>
              <h2>{tx('Message sent.', 'An aika saƙo.')}</h2>
              <p>{tx('Thank you. Someone from our team will reply by email.', 'Na gode. Wani daga ƙungiyarmu zai amsa ta imel.')}</p>
              <button className="ks-con-link" onClick={() => setSent(false)}>{tx('Send another message', 'Aika wani saƙo')}</button>
            </div>
          ) : (
            <form className="ks-con-form" aria-busy={busy} onSubmit={(e) => { e.preventDefault(); if (busy || !e.currentTarget.reportValidity()) return; setBusy(true); setTimeout(() => { setBusy(false); setSent(true); }, 1200); }}>
              <div className="ks-con-row">
                <label><span>{tx('Name', 'Suna')}</span><input required name="name" autoComplete="name"></input></label>
                <label><span>{tx('Email', 'Imel')}</span><input required type="email" name="email" autoComplete="email"></input></label>
              </div>
              <label><span>{tx('Organisation (optional)', 'Ƙungiya (ba dole ba)')}</span><input name="org" autoComplete="organization"></input></label>
              <fieldset><legend>{tx('Topic', 'Batu')}</legend>
                <div className="ks-con-topics" style={{ paddingTop: 16 }}>{topics.map((t, i) => <label key={i} className="ks-con-chip"><input type="radio" name="topic" defaultChecked={i === 0}></input><span>{t}</span></label>)}</div>
              </fieldset>
              <label><span>{tx('Message', 'Saƙo')}</span><textarea required name="msg" rows="5" style={{ borderRadius: 8 }}></textarea></label>
              <div className="ks-con-submit"><GradientButton size="lg" type="submit" disabled={busy}>{busy ? <span className="ks-busy"><i className="ks-spin" aria-hidden="true"></i>{tx('Sending…', 'Ana aikawa…')}</span> : tx('Send message', 'Aika saƙo')}</GradientButton></div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export { KSContact };
