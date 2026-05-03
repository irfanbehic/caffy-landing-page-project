import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  /** Crop the screenshot from the top so only the upper portion is shown inside the frame */
  cropTop?: boolean;
}

export function PhoneFrame({ src, alt, className, cropTop = false }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19] w-full max-w-[280px] rounded-[2.6rem] border border-white/10 bg-black p-[6px] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/5",
        className,
      )}
    >
      {/* Side buttons */}
      <span className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-l bg-white/10" />
      <span className="absolute -left-[2px] top-40 h-16 w-[3px] rounded-l bg-white/10" />
      <span className="absolute -right-[2px] top-32 h-20 w-[3px] rounded-r bg-white/10" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-[oklch(0.12_0.005_60)]">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "h-full w-full",
            cropTop ? "object-cover object-top" : "object-cover object-top",
          )}
        />
      </div>
    </div>
  );
}
