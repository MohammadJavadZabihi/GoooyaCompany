import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/lib/constants/site";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.34 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.52v-6.84c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.61V23H8.34V8.25z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.23v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

export function Footer() {
  const year = new Intl.DateTimeFormat("fa-IR", { year: "numeric" }).format(
    new Date(),
  );

  return (
    <footer className="relative border-t border-border bg-background">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={siteConfig.social.linkedin}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:border-border-strong hover:text-foreground"
                aria-label="لینکدین گویا"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteConfig.social.github}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:border-border-strong hover:text-foreground"
                aria-label="گیت‌هاب گویا"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="mb-4 text-xs font-medium text-subtle">شرکت</h3>
              <ul className="space-y-2.5">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-medium text-subtle">محصولات</h3>
              <ul className="space-y-2.5">
                {footerNav.products.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="mb-4 text-xs font-medium text-subtle">تماس</h3>
              <ul className="space-y-2.5 text-sm text-muted">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition hover:text-foreground"
                    dir="ltr"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {year} {siteConfig.legalName}
          </p>
          <div className="flex gap-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-subtle transition hover:text-muted"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
