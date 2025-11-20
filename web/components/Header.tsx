"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { MainMenu } from "./MainMenu";
import { MobileMenu } from "./MobileMenu";
import { Search } from "./Search";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b border-border bg-white/90 backdrop-blur">
      <div className="border-b border-border bg-muted/40 py-2 text-xs text-muted-foreground">
        <div className="container flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span>Русская Православная Церковь</span>
            <span className="hidden sm:inline">| Московский Патриархат</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="tel:+78425312345" className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              +7 (84253) 123-45
            </Link>
            <Link href="mailto:info@example.ru" className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              info@example.ru
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Логотип епархии" width={140} height={40} className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="text-lg font-bold text-foreground">Барышская епархия</div>
            <div className="text-sm text-muted-foreground">Русская Православная Церковь</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Search />
          <MainMenu />
          <MobileMenu />
          <Button asChild variant="secondary" className="hidden lg:inline-flex">
            <Link href="/kontakt">Контакты</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
