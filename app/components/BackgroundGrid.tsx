export default function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,242,234,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(239,169,182,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px),_linear-gradient(0deg,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:120px_120px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(243,230,143,0.18),rgba(14,14,14,0)_70%)] mix-blend-screen" />
    </div>
  );
}
