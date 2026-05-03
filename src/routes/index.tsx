import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import dashboard from "@/assets/screen-dashboard.jpg";
import sleep from "@/assets/screen-sleep.jpg";
import drinks from "@/assets/screen-drinks.jpg";
import log from "@/assets/screen-log.jpg";
import metabolism from "@/assets/screen-metabolism.jpg";
import sim from "@/assets/screen-sim.jpg";
import insights from "@/assets/screen-insights.jpg";
import detox from "@/assets/screen-detox.jpg";
import ai from "@/assets/screen-ai.jpg";
import settings from "@/assets/screen-settings.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-2.96 2.42-4.38 2.53-4.45-1.38-2.02-3.53-2.3-4.3-2.33-1.83-.18-3.57 1.08-4.5 1.08-.94 0-2.37-1.05-3.9-1.02-2 .03-3.86 1.17-4.9 2.95-2.09 3.62-.53 8.97 1.5 11.91 1 1.44 2.18 3.05 3.74 2.99 1.5-.06 2.07-.97 3.88-.97 1.81 0 2.32.97 3.91.94 1.62-.03 2.64-1.46 3.62-2.91 1.15-1.66 1.62-3.27 1.65-3.36-.04-.02-3.16-1.21-3.19-4.83zM14.07 3.46c.83-1 1.39-2.4 1.24-3.79-1.2.05-2.65.8-3.51 1.8-.77.88-1.45 2.3-1.27 3.66 1.34.1 2.71-.68 3.54-1.67z" />
      </svg>
      <div className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
        <span className="text-base font-semibold">App Store</span>
      </div>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brand">{children}</p>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-brand)" }}
            >
              <span className="text-sm font-bold text-brand-foreground">C</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Caffy</span>
          </div>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a href="#tracking" className="transition-colors hover:text-foreground">Tracking</a>
            <a href="#metabolism" className="transition-colors hover:text-foreground">Metabolism</a>
            <a href="#sleep" className="transition-colors hover:text-foreground">Sleep</a>
            <a href="#insights" className="transition-colors hover:text-foreground">Insights</a>
          </nav>
          <a
            href="#download"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Get the app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-16 pt-20 md:grid-cols-[1.1fr_1fr] md:items-center md:pt-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Now on iOS 17+
            </div>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Know your caffeine.
              <br />
              <span className="italic text-brand">Know your body.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Caffy is the science-backed caffeine tracker — personalized to your metabolism,
              tuned for your sleep.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge />
              <a
                href="#tracking"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                See it in action →
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <span>EN · TR · DE · ES · 日本語</span>
              <span className="h-3 w-px bg-border" />
              <span>Privacy-first</span>
            </div>
          </div>

          {/* Hero phone trio */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{
                background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)",
                opacity: 0.35,
              }}
            />
            <div className="relative flex items-end justify-center gap-2 sm:gap-4">
              <PhoneFrame
                src={metabolism}
                alt="Caffeine metabolism curve"
                className="w-[42%] translate-y-6 rotate-[-6deg] opacity-90"
              />
              <PhoneFrame
                src={dashboard}
                alt="Caffy dashboard"
                className="z-10 w-[52%]"
              />
              <PhoneFrame
                src={sleep}
                alt="Sleep prediction"
                className="w-[42%] translate-y-6 rotate-[6deg] opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/30">
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

      {/* Feature 1 — Tracking */}
      <section id="tracking" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>Smart tracking</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              50+ drinks. <span className="italic text-muted-foreground">Two taps to log.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              From a single espresso to a Monster, Caffy knows the caffeine in every drink.
              Browse a curated library or add your own. Your daily total is always one tap away.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-brand">◆</span> Coffee, tea, energy & more — categorized</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> Custom drinks with your own mg & volume</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> Beautiful daily, weekly and monthly log</li>
            </ul>
          </div>
          <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
            <PhoneFrame src={drinks} alt="Choose a drink" className="translate-y-4" />
            <PhoneFrame src={log} alt="Caffeine log calendar" className="-translate-y-4" />
          </div>
        </div>
      </section>

      {/* Feature 2 — Metabolism */}
      <section id="metabolism" className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <PhoneFrame src={metabolism} alt="Metabolism decay curve" className="-translate-y-4" />
            <PhoneFrame src={sim} alt="What if I drink simulator" className="translate-y-4" />
          </div>
          <div>
            <SectionLabel>Metabolism engine</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Your personal <span className="italic text-brand">half-life model.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Caffy calculates how caffeine actually clears your body — adjusted for your age,
              gender, smoking status, pregnancy and contraceptive use. See every active drink
              decay in real time.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="font-display text-3xl text-brand">What if?</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Simulate any drink before you sip it.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="font-display text-3xl text-brand">Live</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Active drinks update every minute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 — Sleep */}
      <section id="sleep" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>Sleep coach</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              See tonight's sleep,{" "}
              <span className="italic text-muted-foreground">before it happens.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Caffy projects how much caffeine will still be in your system at bedtime,
              estimates your sleep readiness, and tells you the latest safe sip — based on
              your own schedule and biology.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-brand">◆</span> Sleep readiness score, every evening</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> Bedtime caffeine projection</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> Weekly sleep impact analysis</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <PhoneFrame src={sleep} alt="Sleep prediction screen" className="max-w-[320px]" />
          </div>
        </div>
      </section>

      {/* Feature 4 — Insights & AI */}
      <section id="insights" className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 max-w-2xl">
            <SectionLabel>Insights & AI</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Quiet weekly debriefs.{" "}
              <span className="italic text-muted-foreground">Real behavior change.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Optimal timing, habit patterns, your caffeine DNA and an AI weekly analysis that
              actually understands your data — not generic advice.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <PhoneFrame src={insights} alt="Insights dashboard" />
            <PhoneFrame src={ai} alt="AI weekly analysis" className="md:translate-y-8" />
            <PhoneFrame src={detox} alt="Detox mode" />
          </div>
        </div>
      </section>

      {/* Feature 5 — Personal */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>Built around you</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Your body, <span className="italic text-brand">your model.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Set your weight, age, gender, sensitivity and lifestyle once. Caffy retunes the
              entire engine — half-life, sleep window, optimal timing — to your biology.
              Private by default, all on-device.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
              {["Half-life", "Sensitivity", "Sleep window", "Chronotype", "Limit", "Lifestyle"].map((t) => (
                <div key={t} className="rounded-xl border border-border bg-surface px-3 py-3">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div>
            <PhoneFrame src={settings} alt="Personal profile and settings" className="max-w-[320px]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center md:p-20">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
            Your body has a rhythm.{" "}
            <span className="italic text-brand">Caffy listens.</span>
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
