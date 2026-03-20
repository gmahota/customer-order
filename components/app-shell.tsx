"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Bell, ChevronRight, LayoutDashboard, Package, PlusCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/orders", label: "Orders", icon: Package },
  { href: "/orders/new", label: "New Order", icon: PlusCircle },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="hidden w-72 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur xl:block">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-white">
                Orbit Orders
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sales command center
              </p>
            </div>
            <Badge className="border-primary/30 bg-primary/15 text-primary">
              Live
            </Badge>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(124,156,255,0.16),rgba(124,156,255,0.04))] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
              Daily pace
            </p>
            <p className="mt-3 font-display text-4xl font-semibold text-white">
              128
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Orders currently moving through the pipeline with 94% on-time confidence.
            </p>
          </div>

          <nav className="mt-10 space-y-2">
            {navigation.map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href ||
                (href !== "/dashboard" && pathname.startsWith(`${href}/`));

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition",
                    active
                      ? "bg-white text-slate-950 shadow-lg shadow-primary/10"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                  <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-full flex-1 flex-col rounded-[28px] border border-white/10 bg-[rgba(6,8,22,0.72)] shadow-2xl shadow-black/20 backdrop-blur">
          <header className="border-b border-white/10 px-5 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80">
                  Modern operations
                </p>
                <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                  Customer Order Platform
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7c9cff,#8b5cf6)] font-semibold text-slate-950">
                    GM
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Guimaraes Mahota</p>
                    <p className="text-xs text-muted-foreground">Operations Lead</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-2 overflow-x-auto xl:hidden">
              {navigation.map(({ href, label }) => {
                const active =
                  pathname === href ||
                  (href !== "/dashboard" && pathname.startsWith(`${href}/`));

                return (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm whitespace-nowrap transition",
                      active
                        ? "border-primary/40 bg-primary/15 text-white"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:text-white",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </header>

          <main className="flex-1 px-5 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
