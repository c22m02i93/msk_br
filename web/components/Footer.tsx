import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-white">
      <div className="container grid gap-6 py-8 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">Барышская епархия</div>
          <p className="text-sm text-muted-foreground">Официальный сайт. Все права защищены.</p>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Link href="/documents" className="block">Документы</Link>
          <Link href="/news" className="block">Новости</Link>
          <Link href="/kontakt" className="block">Контакты</Link>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            +7 (84253) 123-45
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            info@example.ru
          </div>
          <div className="flex items-center gap-3 pt-2 text-foreground">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© 2024 Барышская епархия</div>
    </footer>
  );
}
