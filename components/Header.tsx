"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Effet : fond plus opaque + ombre une fois la page défilée.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Verrouille le défilement du body quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 supports-[backdrop-filter]:backdrop-blur",
        scrolled
          ? "border-border/80 bg-background/80 shadow-sm supports-[backdrop-filter]:bg-background/65"
          : "border-transparent bg-background/95 supports-[backdrop-filter]:bg-background/80"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-all duration-300",
          scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
        )}
      >
        <Logo />

        {/* Navigation desktop */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button asChild variant="accent" size="sm">
            <Link href="/candidater">Candidater</Link>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-primary transition-colors hover:bg-secondary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur lg:hidden"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav
              aria-label="Navigation mobile"
              className="container flex flex-col gap-1 py-4"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-secondary",
                    isActive(item.href)
                      ? "bg-secondary text-primary"
                      : "text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button asChild variant="outline" onClick={() => setOpen(false)}>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button asChild variant="accent" onClick={() => setOpen(false)}>
                  <Link href="/candidater">Candidater</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
