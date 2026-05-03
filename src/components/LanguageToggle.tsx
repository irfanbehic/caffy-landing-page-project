import { useState, useRef, useEffect } from "react";
import { useI18n, LANGS, Lang } from "@/lib/i18n";
import { ChevronDown, Check } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur transition-colors hover:bg-surface"
        aria-label="Select language"
      >
        <span>{current.flag}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface"
            >
              <span className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{l.flag}</span>
                <span>{l.label}</span>
              </span>
              {l.code === lang && <Check className="h-3.5 w-3.5 text-brand" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
