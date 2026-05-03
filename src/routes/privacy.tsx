import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import caffyIcon from "@/assets/caffy-icon.png";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Caffy" },
      { name: "description", content: "How Caffy collects, uses, and protects your data." },
    ],
  }),
});

const LAST_UPDATED = "May 1, 2026";

const SECTIONS: { title: string; body: string }[] = [
  {
    title: "Overview",
    body: "Caffy is designed with your privacy in mind. We collect only what is necessary to provide accurate caffeine tracking and sleep predictions. We do not sell your data to third parties.",
  },
  {
    title: "Data we collect",
    body: "• Caffeine entries (drink name, amount in mg, time consumed)\n• Profile information (age, weight, caffeine sensitivity, bedtime, wake time)\n• Notification preferences\n• Account email address (for authentication)\n\nWe do not collect location data, contacts, camera access, or any other device information beyond what is listed above.",
  },
  {
    title: "How your data is used",
    body: "Your data is used exclusively to:\n• Calculate real-time caffeine metabolism curves\n• Predict sleep readiness scores\n• Generate personalised alerts and recommendations\n• Display your intake history and weekly insights\n\nAll calculations are performed locally on your device. Your entries are synced to our secure database solely to preserve your history across devices.",
  },
  {
    title: "Storage & security",
    body: "Your data is stored on Supabase (supabase.com), a GDPR-compliant cloud database provider. Data is encrypted in transit (TLS) and at rest (AES-256). Row-Level Security policies ensure your data is only accessible to your own authenticated account — not to other users or Caffy staff.",
  },
  {
    title: "Data retention",
    body: "Your caffeine entries and profile are retained for as long as your account is active. You may delete your account and all associated data at any time from Settings → Delete Account. Deletion is permanent and irreversible.",
  },
  {
    title: "AI Weekly Analysis",
    body: "The AI Weekly Analysis feature sends a summary of your weekly caffeine data to our secure server for processing. This includes:\n• Aggregate intake statistics (total mg, average mg, over-limit days)\n• Sleep score data (best/worst days, caffeine at bedtime)\n• Anonymised profile factors (age range, caffeine sensitivity, half-life, bedtime/wake time, smoker status, pregnancy status, oral contraceptive use)\n\nThis data is sent to a Supabase Edge Function and processed using an AI language model (Claude by Anthropic) to generate personalised insights. It is not stored beyond the duration of the request and is never used to train AI models. The resulting insights are cached locally on your device only.\n\nThis feature is only triggered manually or once per week. You can disable it by not using the AI Weekly Analysis section.",
  },
  {
    title: "Third-party services",
    body: "Caffy uses the following third-party services:\n• Supabase — database and authentication (supabase.com/privacy)\n• Anthropic (Claude API) — AI analysis of anonymised weekly stats, processed server-side and not retained\n• Apple UserNotifications — local push notifications (no data leaves your device)\n\nNo analytics SDKs, advertising networks, or tracking libraries are included in the app.",
  },
  {
    title: "Children's privacy",
    body: "Caffy is intended for users aged 13 and older. We do not knowingly collect data from children under 13. If you believe a child has provided personal information, please contact us to have it removed.",
  },
  {
    title: "Your rights",
    body: "Depending on your jurisdiction you may have the right to:\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Export your data in a portable format\n\nTo exercise any of these rights, contact us at the address below.",
  },
  {
    title: "Contact",
    body: "If you have questions about this policy or your data, please contact us at privacy@caffy.app",
  },
];

function PrivacyPage() {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={caffyIcon} alt="Caffy" width={32} height={32} className="h-8 w-8 rounded-[8px]" />
            <span className="text-lg font-bold tracking-tight">Caffy</span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <Link to="/" className="transition-colors hover:text-foreground">{t("nav.home")}</Link>
          </nav>
          <LanguageToggle />
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">{t("nav.privacy")}</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl tracking-tight md:text-2xl">{s.title}</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-border/60 pt-8">
          <Link to="/" className="text-sm text-brand hover:opacity-80">← {t("nav.home")}</Link>
        </div>
      </article>
    </main>
  );
}
