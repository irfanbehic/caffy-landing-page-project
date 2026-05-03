import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
  priority?: boolean;
}

export function PhoneFrame({
  src,
  alt,
  className,
  fit = "cover",
  objectPosition,
  priority = false,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-full max-w-[280px] shrink-0 rounded-[2.6rem] border border-white/10 bg-black p-[6px] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/5",
        className,
      )}
    >
      <span className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-l bg-white/10" />
      <span className="absolute -left-[2px] top-40 h-16 w-[3px] rounded-l bg-white/10" />
      <span className="absolute -right-[2px] top-32 h-20 w-[3px] rounded-r bg-white/10" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[oklch(0.12_0.005_60)]">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          style={objectPosition ? { objectPosition } : undefined}
          className={cn(
            "h-full w-full",
            !objectPosition && "object-top",
            fit === "contain" ? "object-contain" : "object-cover",
          )}
        />
      </div>
    </div>
  );
}
