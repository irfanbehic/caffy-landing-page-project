import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useI18n } from "@/lib/i18n";
import caffyIcon from "@/assets/caffy-icon.png";
import dashboard from "@/assets/screen-dashboard.jpg";
import sleep from "@/assets/screen-sleep.jpg";
import drinks from "@/assets/screen-drinks.jpg";
import log from "@/assets/screen-log.jpg";
import metabolism from "@/assets/screen-metabolism.jpg";
import metabolism2 from "@/assets/screen-metabolism-2.jpg";
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
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">{children}</p>
  );
}

function Index() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2.5">
            <img src={caffyIcon} alt="Caffy" width={32} height={32} className="h-8 w-8 rounded-[8px]" />
            <span className="text-lg font-bold tracking-tight">Caffy</span>
          </a>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a href="#home" className="transition-colors hover:text-foreground">{t("nav.home")}</a>
            <a href="#features" className="transition-colors hover:text-foreground">{t("nav.features")}</a>
            <a href="#support" className="transition-colors hover:text-foreground">{t("nav.support")}</a>
            <Link to="/privacy" className="transition-colors hover:text-foreground">{t("nav.privacy")}</Link>
          </nav>
          <LanguageToggle />
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t("hero.badge")}
            </div>
            <h1 className="font-display text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              {t("hero.title1")}
              <br />
              <span className="text-brand">{t("hero.title2")}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              {t("hero.sub")}
            </p>
            <div className="mt-8">
              <AppStoreBadge />
            </div>
          </div>

          {/* Hero phone trio — bigger */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{
                background: "radial-gradient(circle, var(--brand) 0%, transparent 60%)",
                opacity: 0.35,
              }}
            />
            <div className="relative flex items-end justify-center gap-4 sm:gap-6">
              <PhoneFrame
                src={metabolism}
                alt="Caffeine metabolism curve"
                priority
                className="hidden sm:block w-[40%] max-w-[300px] translate-y-10 rotate-[-6deg] opacity-95"
              />
              <PhoneFrame
                src={dashboard}
                alt="Caffy dashboard"
                priority
                className="z-10 w-[80%] sm:w-[48%] max-w-[360px]"
              />
              <PhoneFrame
                src={sleep}
                alt="Sleep prediction"
                priority
                className="hidden sm:block w-[40%] max-w-[300px] translate-y-10 rotate-[6deg] opacity-95"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          {[
            { k: t("stats.k1"), v: t("stats.v1") },
            { k: t("stats.k2"), v: t("stats.v2") },
            { k: t("stats.k3"), v: t("stats.v3") },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-5xl text-brand">{s.k}</div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features anchor wraps everything below */}
      <div id="features">

      {/* Feature 1 — Tracking */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>{t("tracking.label")}</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("tracking.title1")} <span className="text-muted-foreground">{t("tracking.title2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t("tracking.body")}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("tracking.li1")}</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("tracking.li2")}</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("tracking.li3")}</li>
            </ul>
          </div>
          <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
            <PhoneFrame src={drinks} alt="Choose a drink" className="translate-y-4" />
            <PhoneFrame src={log} alt="Caffeine log calendar" className="-translate-y-4" />
          </div>
        </div>
      </section>

      {/* Feature 2 — Metabolism */}
      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
          <div className="grid grid-cols-2 gap-4">
            <PhoneFrame src={metabolism} alt="Metabolism decay curve" className="-translate-y-4" />
            <PhoneFrame src={metabolism2} alt="Active drinks and absorption phase" className="translate-y-4" />
          </div>
          <div>
            <SectionLabel>{t("metab.label")}</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("metab.title1")} <span className="text-brand">{t("metab.title2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t("metab.body")}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="font-display text-2xl text-brand">{t("metab.whatif")}</div>
                <p className="mt-1 text-xs text-muted-foreground">{t("metab.whatifsub")}</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="font-display text-2xl text-brand">{t("metab.live")}</div>
                <p className="mt-1 text-xs text-muted-foreground">{t("metab.livesub")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 — Sleep */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <SectionLabel>{t("sleep.label")}</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("sleep.title1")} <span className="text-muted-foreground">{t("sleep.title2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t("sleep.body")}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("sleep.li1")}</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("sleep.li2")}</li>
              <li className="flex gap-3"><span className="text-brand">◆</span> {t("sleep.li3")}</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <PhoneFrame src={sleep} alt="Sleep prediction screen" className="max-w-[320px]" />
          </div>
        </div>
      </section>

      {/* Feature 4 — Insights & AI */}
      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 max-w-2xl">
            <SectionLabel>{t("insights.label")}</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("insights.title1")} <span className="text-muted-foreground">{t("insights.title2")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">{t("insights.body")}</p>
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
            <SectionLabel>{t("personal.label")}</SectionLabel>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              {t("personal.title1")} <span className="text-brand">{t("personal.title2")}</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t("personal.body")}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
              {["Half-life", "Sensitivity", "Sleep window", "Chronotype", "Limit", "Lifestyle"].map((tk) => (
                <div key={tk} className="rounded-xl border border-border bg-surface px-3 py-3">
                  {tk}
                </div>
              ))}
            </div>
          </div>
          <div>
            <PhoneFrame src={settings} alt="Personal profile and settings" className="max-w-[320px]" objectPosition="center 6%" />
          </div>
        </div>
      </section>

      </div>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-12 text-center md:p-20">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <h2 className="mx-auto max-w-2xl font-display text-4xl tracking-tight md:text-6xl">
            {t("cta.title1")} <span className="text-brand">{t("cta.title2")}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">{t("cta.sub")}</p>
          <div className="mt-10 flex justify-center">
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-surface/40 p-10 text-center md:p-16">
          <SectionLabel>{t("support.title")}</SectionLabel>
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">{t("support.title")}</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t("support.body")}</p>
          <a
            href={`mailto:${t("support.email")}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            {t("support.email")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={caffyIcon} alt="" width={20} height={20} className="h-5 w-5 rounded-[5px]" />
            <span>© 2026 Caffy</span>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="transition-colors hover:text-foreground">{t("footer.privacy")}</Link>
            <a href="#support" className="transition-colors hover:text-foreground">{t("footer.support")}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
