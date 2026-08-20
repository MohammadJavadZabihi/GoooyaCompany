import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  align?: "start" | "center";
  tone?: "mesh" | "plain" | "navy";
  /** Optional full-bleed background photo */
  backgroundImage?: string;
  backgroundAlt?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "start",
  tone = "mesh",
  backgroundImage,
  backgroundAlt = "",
  className,
}: PageHeroProps) {
  const isNavy = tone === "navy";
  const hasPhoto = Boolean(backgroundImage);
  /** With photo: force light text + dark overlay for contrast */
  const onPhoto = hasPhoto;

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        !hasPhoto && tone === "mesh" && "gradient-mesh",
        !hasPhoto && tone === "navy" && "gradient-navy border-transparent",
        !hasPhoto && tone === "plain" && "bg-background",
        hasPhoto && "border-transparent",
        className,
      )}
    >
      {hasPhoto ? (
        <>
          <Image
            src={backgroundImage!}
            alt={backgroundAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soften photo + keep text sharp */}
          <div
            className="absolute inset-0 bg-navy/72"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/55 to-navy/80"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_55%)]"
            aria-hidden
          />
        </>
      ) : (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 surface-grain",
            isNavy ? "opacity-20" : "opacity-40",
          )}
        />
      )}

      <Container
        className={cn(
          "relative py-16 md:py-20 lg:py-24",
          align === "center" && "text-center",
        )}
      >
        <Reveal>
          <p
            className={cn(
              "mb-4 text-xs font-medium tracking-wide",
              onPhoto || isNavy ? "text-accent-bright" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "display-title max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-[3.5rem]",
              align === "center" && "mx-auto",
              onPhoto || isNavy ? "text-white drop-shadow-sm" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-8 md:text-lg",
              align === "center" && "mx-auto",
              onPhoto || isNavy ? "text-white/85" : "text-muted",
            )}
          >
            {description}
          </p>
          {children ? (
            <div
              className={cn(
                "mt-8",
                align === "center" && "flex justify-center",
              )}
            >
              {children}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
