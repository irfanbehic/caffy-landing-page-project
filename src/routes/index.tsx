import { createFileRoute } from "@tanstack/react-router";
import heroMockup from "@/assets/caffy-hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { title: "Smart tracking", desc: "50+ drinks at your fingertips. Log a coffee in two taps.", icon: "☕" },
  { title: "Metabolism engine", desc: "A personalized half-life model based on your age, gender, pregnancy and smoking status.", icon: "⏱" },
  { title: "Sleep coach", desc: "See exactly how today's caffeine is shaping tonight's sleep.", icon: "🌙" },
  { title: "Optimal timing", desc: "First coffee, last safe sip, peak focus window — all calibrated to you.", icon: "◐" },
  { title: "Weekly AI insights", desc: "A quiet weekly debrief that turns your data into a habit.", icon: "✦" },
  { title: "Home screen widgets", desc: "Glance at your current level without opening the app.", icon: "▢" },
];

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-2.96 2.42-4.38 2.53-4.45-1.38-2.02-3.53-2.3-4.3-2.33-1.83-.18-3.57 1.08-4.5 1.08-.94 0-2.37-1.05-3.9-1.02-2 .03-3.86 1.17-4.9 2.95-2.09 3.62-.53 8.97 1.5 11.91 1 1.44 2.18 3.05 3.74 2.99 1.5-.06 2.07-.97 3.88-.97 1.81 0 2.32.97 3.91.94 1.62-.03 2.64-1.46 3.62-2.91 1.15-1.66 1.62-3.27 1.65-3.36-.04-.02-3.16-1.21-3.19-4.83zM14.07 3.46c.83-1 1.39-2.4 1.24-3.79-1.2.05-2.65.8-3.51 1.8-.77.88-1.45 2.3-1.27 3.66 1.34.1 2.71-.68 3.54-1.67z"/>
      </svg>
      <div className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
        <span className="text-base font-semibold">App Store</span>
      </div>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
              <span className="text-sm font-bold text-brand-foreground">C</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Caffy</span>
          </div>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#science" className="transition-colors hover:text-foreground">Science</a>
            <a href="#download" className="transition-colors hover:text-foreground">Download</a>
          </nav>
          <a href="#download" className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90">
            Get the app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-8 pt-20 md:grid-cols-2 md:items-center md:pt-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Now on iOS 17+
            </div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Know your caffeine.<br />
              <span className="italic text-brand">Know your body.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Caffy is the science-backed caffeine tracker — personalized to your metabolism,
              tuned for your sleep.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge />
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Explore features →
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <span>EN · TR · DE · ES · 日本語</span>
              <span className="h-3 w-px bg-border" />
              <span>Privacy-first</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 blur-3xl" style={{ background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)", opacity: 0.35 }} />
            <img
              src={heroMockup}
              alt="Caffy app showing caffeine level dashboard with metabolism graph"
              width={520}
              height={520}
              className="w-full max-w-[420px] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats / Mission */}
      <section id="science" className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            { k: "5h", v: "Average half-life of caffeine — but yours could be 1.5h or 9h." },
            { k: "10h", v: "Window before bedtime where coffee still touches your sleep." },
            { k: "90min", v: "After waking — the optimal start for your first coffee." },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-5xl text-brand">{s.k}</div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-brand">Features</p>
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Not just how much you drink — <span className="italic text-muted-foreground">when it clears.</span>
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group bg-surface p-8 transition-colors hover:bg-surface-elevated">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-lg text-brand">
                {f.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center md:p-20">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
            Your body has a rhythm. <span className="italic text-brand">Caffy listens.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            Free to download. No account required to start tracking.
          </p>
          <div className="mt-10 flex justify-center">
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md" style={{ background: "var(--gradient-brand)" }} />
            <span>© 2026 Caffy</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
