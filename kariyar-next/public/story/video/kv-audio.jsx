/* Kariyar video — sound. Music: a looped track mixed into the export. UI sounds: Web Audio blips, preview only. */
const KV_SFX = (c) => [
  { at: c.Entry + 3.3, kind: 'tap' }, { at: c.Talk + 2.75, kind: 'tap' }, { at: c.Talk + 4.6, kind: 'msg' }, { at: c.Talk + 6.2, kind: 'msg' },
  { at: c.Responder - 0.4, kind: 'tap' }, { at: c.Responder + 1.9, kind: 'join' }, { at: c.Responder + 5.4, kind: 'msg' },
  { at: c.Referral + 0.9, kind: 'msg' }, { at: c.Referral + 3.4, kind: 'tap' }, { at: c.Referral + 3.6, kind: 'done' }, { at: c.Close - 0.3, kind: 'join' },
];
let kvCtx = null;
function kvBlip(kind) {
  try {
    kvCtx = kvCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (kvCtx.state === 'suspended') kvCtx.resume();
    const t = kvCtx.currentTime, g = kvCtx.createGain(); g.connect(kvCtx.destination);
    const notes = { tap: [[880, 0.06]], msg: [[660, 0.09], [990, 0.12]], join: [[523, 0.1], [659, 0.1], [784, 0.16]], done: [[784, 0.1], [1047, 0.2]] }[kind];
    let at = t; notes.forEach(([f, d]) => { const o = kvCtx.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.connect(g); o.start(at); o.stop(at + d + 0.05); at += d; });
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, at + 0.05);
  } catch (e) {}
}

function KVAudio({ music, volume = 0.5, sfx = true }) {
  const { T, CUES: c, playing, authoredTotal } = useComposition();
  const vid = React.useRef(null), last = React.useRef(T);
  // UI blips when the authored clock crosses an event while playing
  React.useEffect(() => {
    const a = last.current, b = T; last.current = T;
    if (!sfx || !playing || b < a || b - a > 0.5) return;
    KV_SFX(c).forEach(e => { if (e.at > a && e.at <= b) kvBlip(e.kind); });
  }, [T, playing]);
  // keep the music element in step with T (loops over its own length)
  React.useEffect(() => {
    const v = vid.current; if (!v || !isFinite(v.duration) || !v.duration) return;
    const want = T % v.duration;
    if (Math.abs(v.currentTime - want) > 0.25) v.currentTime = want;
    if (playing && v.paused) v.play().catch(() => {}); else if (!playing && !v.paused) v.pause();
    v.volume = T > authoredTotal - 1.5 ? Math.max(0, volume * (authoredTotal - T) / 1.5) : volume;
  }, [T, playing]);
  if (!music) return null;
  return <video ref={vid} src={music} loop playsInline preload="auto" data-om-exportable-video-play-start="0" data-om-exportable-video-play-end={authoredTotal} style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}></video>;
}

Object.assign(window, { KVAudio });
