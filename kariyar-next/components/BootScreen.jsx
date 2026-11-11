export default function BootScreen() {
  return (
    <div className="ks-boot-screen" role="status" aria-live="polite">
      <div className="ks-boot-mark"><i className="ph-fill ph-shield-check" aria-hidden="true"></i><span>Kariyar</span></div>
      <span className="ks-boot-bar"><i></i></span>
      <span className="ks-sr">Loading Kariyar…</span>
    </div>
  );
}
