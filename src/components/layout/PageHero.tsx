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
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "start",
  tone = "mesh",
  className,
}: PageHeroProps) {
  const isNavy = tone === "navy";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        tone === "mesh" && "gradient-mesh",
        tone === "navy" && "gradient-navy border-transparent",
        tone === "plain" && "bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 surface-grain",
          isNavy ? "opacity-20" : "opacity-40",
        )}
      />
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
              isNavy ? "text-accent-bright" : "text-accent",
            )}
          >
            {eyebrow}
          </p>
          <h1
            className={cn(
              "display-title max-w-3xl text-balance text-4xl font-semibold md:text-5xl lg:text-[3.5rem]",
              align === "center" && "mx-auto",
              isNavy ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>
          <p
            className={cn(
              "mt-5 max-w-xl text-base leading-8 md:text-lg",
              align === "center" && "mx-auto",
              isNavy ? "text-white/70" : "text-muted",
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
