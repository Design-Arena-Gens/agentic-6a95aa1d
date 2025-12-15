import BackgroundGrid from "./components/BackgroundGrid";
import FaceIdBadge from "./components/FaceIdBadge";

const features = [
  {
    title: "Neural Storylines",
    body: "Prism stitches your photo drops into dynamic narratives that evolve with every new upload.",
    meta: "Auto-generated reels, adaptive sequencing, cinematic pacing.",
    accent: "bg-prism-cyan/10 text-prism-cyan",
    border: "border-prism-cyan/40",
  },
  {
    title: "Signal Sharing",
    body: "Deploy programmable visibility layers tuned to context, identity, and trust tiers.",
    meta: "Quantum-level ACLs, ephemeral filters, geo-synced rulesets.",
    accent: "bg-prism-yellow/10 text-prism-yellow",
    border: "border-prism-yellow/40",
  },
  {
    title: "Reality Checks",
    body: "AI verifies what matters: who captured it, who altered it, and why it should exist.",
    meta: "Vision-forensics, zero-lag provenance, anomaly flagging.",
    accent: "bg-neon-pink/10 text-neon-pink",
    border: "border-neon-pink/40",
  },
];

const workflow = [
  {
    id: "01",
    title: "Pulse Capture",
    copy: "Drop photos, live feeds, or synced devices. Prism reads tone, motion, and energy to seed the narrative graph.",
  },
  {
    id: "02",
    title: "Contextual Intelligence",
    copy: "Our AI builds contextual heatmaps and mood signatures to determine who needs to feel this and how.",
  },
  {
    id: "03",
    title: "Coordinated Release",
    copy: "Share privately or go collective. Roll out sequences, live loops, or event arcs across teams and audiences.",
  },
];

const testimonials = [
  {
    quote:
      "Prism replaced six apps for us. Our brand team and field reporters move in sync without ever touching a spreadsheet again.",
    name: "Alina Voss",
    title: "Creative Systems Lead @ Halo Press",
  },
  {
    quote:
      "It reads the vibe of the room. Prism knows which board deck needs the raw shots and which stream wants the neon glitch.",
    name: "Dex Carter",
    title: "Head of Design Ops @ Dynamo",
  },
];

const stats = [
  {
    label: "Latency",
    value: "22 ms",
    caption: "Global delivery cadence",
  },
  {
    label: "Sync Channels",
    value: "+180",
    caption: "Live collaboration hubs",
  },
  {
    label: "Trust Score",
    value: "99.7%",
    caption: "Verified authenticity index",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void pb-32">
      <BackgroundGrid />
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(243,230,143,0.15),transparent_65%)]" />
      <div className="absolute left-1/2 top-32 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_45deg,_rgba(74,242,234,0.25),rgba(14,14,14,0)_55%)] blur-3xl" />
      <div className="relative z-10">
        <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:px-12">
          <div className="relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-zinc400 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-prism-yellow shadow-glow" />
            Prism 2.0 launches Q4 · Request early studio access
          </div>
          <h1 className="mt-12 text-balance text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            The intelligent photo stream built for fast teams and cinematic minds.
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg text-zinc400 md:text-xl">
            Prism fuses AI intuition with adaptive privacy, delivering photo narratives that self-orchestrate across your
digital universe.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="group relative overflow-hidden rounded-full border border-prism-yellow/40 bg-prism-yellow/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-prism-yellow transition hover:shadow-glow">
              <span className="relative">Activate Prism</span>
              <div className="absolute inset-0 translate-y-full bg-[linear-gradient(120deg,_rgba(243,230,143,0.6),_rgba(74,242,234,0.4))] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </button>
            <button className="rounded-full border border-white/10 bg-white/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/30 hover:bg-white/[0.05]">
              Explore live demo
            </button>
          </div>
          <div className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur">
                <span className="text-xs uppercase tracking-[0.35em] text-zinc400">{stat.label}</span>
                <div className="mt-3 text-3xl font-semibold text-white">{stat.value}</div>
                <p className="mt-1 text-sm text-zinc400">{stat.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-6xl px-6 md:px-12">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-10 shadow-[0_0_60px_rgba(243,230,143,0.12)] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,242,234,0.18),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(239,169,182,0.15),transparent_60%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc400">
                  Neural broadcast operating system
                </div>
                <h2 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-white">
                  Architect the way your visuals move through space, teams, and time.
                </h2>
                <p className="mt-4 max-w-2xl text-base text-zinc400">
                  Program visibility modes, tune AI remastering, and link Prism into your creative stack without breaking flow.
                  The result is a photo exchange that feels alive to context, identity, and moment.
                </p>
                <div className="mt-10 grid gap-5 sm:grid-cols-3">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className={`relative overflow-hidden rounded-2xl border ${feature.border} bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-white/30`}
                    >
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-[0.3em] ${feature.accent}`}>
                        {feature.title}
                      </span>
                      <p className="mt-4 text-sm text-zinc200">
                        {feature.body}
                      </p>
                      <p className="mt-3 text-xs text-zinc400">{feature.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <FaceIdBadge />
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(243,230,143,0.12),_transparent_55%)]" />
                <div className="relative">
                  <span className="text-xs uppercase tracking-[0.3em] text-prism-cyan">AI Processing Trail</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">Live signal map</h3>
                  <ul className="mt-6 space-y-4 text-sm text-zinc400">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-prism-cyan" />
                      64 neural filters calibrate each photo stream before release.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-prism-yellow" />
                      Identity mesh locks to location, device, and intent signatures.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-neon-pink" />
                      Quantum-safe ledger mirrors every interaction for audit-on-demand.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-prism-yellow">Workflow cadence</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">From capture to coordinated release in three pulses.</h2>
              <p className="mt-4 max-w-xl text-base text-zinc400">
                Prism turns fragmented photo chaos into synchronized storytelling. Every touchpoint is orchestrated to keep
                teams in the loop without friction.
              </p>
              <div className="mt-10 space-y-8">
                {workflow.map((step) => (
                  <div key={step.id} className="grid gap-4 md:grid-cols-[auto_1fr] md:items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-sm font-semibold tracking-[0.2em] text-prism-yellow">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-zinc400">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(74,242,234,0.35),transparent_65%)] blur-3xl" />
              <div className="absolute -right-12 bottom-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(239,169,182,0.3),transparent_60%)] blur-3xl" />
              <div className="relative border border-white/5 bg-white/[0.02] p-6 backdrop-blur">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-surface/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc400">
                  Broadcast blueprint
                </div>
                <p className="mt-5 text-sm text-zinc300">
                  Orbit Mode curates who experiences your stream, how they receive it, and what actions unlock next. Chain
                  reactions become effortless.
                </p>
                <div className="mt-7 space-y-4 text-sm text-zinc400">
                  <div className="flex items-center justify-between">
                    <span>Persona vectors synced</span>
                    <span className="text-prism-cyan">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dynamic access lanes</span>
                    <span className="text-prism-yellow">34</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Real-time reactions</span>
                    <span className="text-neon-pink">882</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl px-6 md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur">
              <span className="text-xs uppercase tracking-[0.3em] text-prism-cyan">Collective trust</span>
              <h2 className="mt-5 text-4xl font-semibold text-white">Teams that deploy Prism emit sharper, safer stories.</h2>
              <div className="mt-10 space-y-10">
                {testimonials.map((item) => (
                  <div key={item.name} className="space-y-5 border-b border-white/5 pb-8 last:border-b-0">
                    <p className="text-lg text-zinc200">“{item.quote}”</p>
                    <div className="text-sm text-zinc400">
                      {item.name} · {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="relative flex-1 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(243,230,143,0.15),transparent_65%)]" />
                <div className="relative">
                  <span className="text-xs uppercase tracking-[0.3em] text-prism-yellow">Signal intelligence</span>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Signal Lab dashboard</h3>
                  <p className="mt-3 text-sm text-zinc400">
                    Watch how your content pulses across channels. Feed the AI new goals, and it recalibrates distribution
                    mid-flight.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-zinc400">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xl font-semibold text-prism-yellow">4.6x</div>
                      <p className="mt-1 leading-tight">Faster activation</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xl font-semibold text-prism-cyan">92%</div>
                      <p className="mt-1 leading-tight">Signal accuracy</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xl font-semibold text-neon-pink">0</div>
                      <p className="mt-1 leading-tight">Leaked assets</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-prism-yellow/40 bg-gradient-to-br from-prism-yellow/20 via-transparent to-prism-cyan/10 p-8 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,14,14,0.65),rgba(14,14,14,0))]" />
                <div className="relative">
                  <span className="text-xs uppercase tracking-[0.4em] text-white/70">Launch broadcast</span>
                  <h3 className="mt-5 text-3xl font-semibold text-white">Stream Prism to your crew</h3>
                  <p className="mt-3 text-sm text-zinc200">
                    Secure drop invites, assign AI copilots, and open the neon portal.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <button className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/40">
                      Generate access link
                    </button>
                    <button className="rounded-full border border-white/10 bg-white/[0.08] px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-prism-yellow transition hover:border-white/40">
                      Sync with Slack
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-6xl px-6 md:px-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,169,182,0.15),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(74,242,234,0.15),transparent_60%)]" />
            <div className="relative flex flex-col items-center justify-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.3em] text-zinc400">
                Digital darkroom. Cloud native. Ready for Vercel.
              </span>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold text-white md:text-5xl">
                Prism is where high-trust teams compose their visual intelligence.
              </h2>
              <p className="max-w-2xl text-balance text-base text-zinc400">
                Claim your studio, wire it into your tools, and let the AI orchestrate the rest. Prism keeps the vibe sharp,
                secure, and always in motion.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <button className="rounded-full border border-prism-yellow/50 bg-prism-yellow/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-prism-yellow hover:shadow-glow">
                  Request private beta
                </button>
                <button className="rounded-full border border-white/10 bg-white/[0.02] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white hover:border-white/30">
                  Download product deck
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
