"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

const rows = [
  { id: "GOY-1042", title: "همگام‌سازی هویت سازمانی", status: "در حال اجرا", team: "Core", progress: 72 },
  { id: "GOY-1038", title: "انتشار API دسترسی نقش‌محور", status: "بازبینی", team: "Platform", progress: 90 },
  { id: "GOY-1021", title: "داشبورد سلامت سرویس‌ها", status: "صف", team: "Cloud", progress: 35 },
  { id: "GOY-1014", title: "اتصال رویداد به اینسایت", status: "انجام شد", team: "Data", progress: 100 },
  { id: "GOY-1009", title: "بهینه‌سازی مسیر استقرار", status: "در حال اجرا", team: "Ops", progress: 58 },
];

const modules = [
  { name: "گویا کور", meta: "پلتفرم", live: true },
  { name: "گویا فلو", meta: "اتوماسیون", live: true },
  { name: "گویا کلود", meta: "زیرساخت", live: false },
  { name: "گویا اینسایت", meta: "داده", live: false },
];

/** Light product console — soft surfaces, clear hierarchy */
export function ProductConsole({ className }: { className?: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % rows.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("product-frame", className)}>
      <div className="flex items-center justify-between border-b border-border bg-panel/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          <span className="ms-3 text-xs text-subtle">gooya · control plane</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-md border border-border bg-elevated px-2 py-0.5 text-[10px] text-muted">
            production
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            آنلاین
          </span>
        </div>
      </div>

      <div className="grid min-h-[22rem] bg-elevated md:min-h-[28rem] md:grid-cols-[13rem_1fr_14rem]">
        <aside className="hidden border-e border-border bg-panel/50 p-3 md:block">
          <p className="mb-3 px-2 text-[10px] font-medium uppercase tracking-wider text-subtle">
            ماژول‌ها
          </p>
          <ul className="space-y-1">
            {modules.map((m) => (
              <li
                key={m.name}
                className={cn(
                  "flex items-center justify-between rounded-md px-2.5 py-2 text-xs",
                  m.live
                    ? "bg-elevated text-foreground shadow-[var(--shadow-sm)] ring-1 ring-border"
                    : "text-muted hover:bg-hover/70",
                )}
              >
                <span>{m.name}</span>
                <span className="text-[10px] text-subtle">{m.meta}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-border bg-elevated p-3 shadow-[var(--shadow-sm)]">
            <p className="text-[10px] text-subtle">throughput</p>
            <p className="mt-1 text-lg font-semibold tracking-tight">۱۲.۴k</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[68%] rounded-full bg-accent" />
            </div>
          </div>
        </aside>

        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div>
              <p className="text-sm font-medium">صف عملیات محصول</p>
              <p className="text-xs text-subtle">همگام با اکوسیستم گویا</p>
            </div>
            <div className="flex gap-1.5">
              {["همه", "فعال", "بازبینی"].map((tab, i) => (
                <span
                  key={tab}
                  className={cn(
                    "rounded-md px-2.5 py-1 text-[11px]",
                    i === 0
                      ? "bg-[var(--accent-soft)] text-accent"
                      : "text-muted",
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>

          <ul className="flex-1 divide-y divide-border">
            {rows.map((row, i) => (
              <li
                key={row.id}
                className={cn(
                  "grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 transition-colors duration-300 sm:grid-cols-[5.5rem_1fr_6rem_5rem]",
                  i === active && "bg-[var(--accent-soft)]",
                )}
              >
                <span className="font-mono text-[10px] text-subtle" dir="ltr">
                  {row.id}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm">{row.title}</p>
                  <p className="mt-0.5 text-[11px] text-subtle sm:hidden">
                    {row.team} · {row.status}
                  </p>
                </div>
                <span className="hidden text-xs text-muted sm:block">
                  {row.team}
                </span>
                <div className="text-end">
                  <p className="text-[11px] text-muted">{row.status}</p>
                  <div className="mt-1 ms-auto h-1 w-12 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-700"
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hidden border-s border-border bg-panel/40 p-4 lg:block">
          <p className="text-[10px] font-medium uppercase tracking-wider text-subtle">
            معماری زنده
          </p>
          <div className="mt-4 space-y-3">
            {[
              { from: "Core", to: "Flow", ok: true },
              { from: "Flow", to: "Cloud", ok: true },
              { from: "Cloud", to: "Insight", ok: false },
            ].map((link) => (
              <div
                key={link.from + link.to}
                className="rounded-lg border border-border bg-elevated p-3 shadow-[var(--shadow-sm)]"
              >
                <div className="flex items-center justify-between text-xs">
                  <span>{link.from}</span>
                  <span className="text-subtle">→</span>
                  <span>{link.to}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      link.ok ? "bg-accent animate-pulse-dot" : "bg-subtle",
                    )}
                  />
                  <span className="text-[10px] text-muted">
                    {link.ok ? "synced" : "queued"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative mt-6 overflow-hidden rounded-lg border border-border bg-elevated p-3">
            <div className="absolute inset-y-0 w-1/3 bg-gradient-to-l from-transparent via-accent/10 to-transparent animate-shimmer" />
            <p className="relative text-[10px] text-subtle">event stream</p>
            <p className="relative mt-1 font-mono text-[11px] text-accent" dir="ltr">
              auth.session.created
            </p>
            <p className="relative mt-1 font-mono text-[11px] text-muted" dir="ltr">
              workflow.step.completed
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
