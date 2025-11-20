"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const menu = [
  {
    title: "Архиерей",
    href: "/arhierei",
    children: [
      { title: "Биография", href: "/arhierei" },
      { title: "Слово архипастыря", href: "/slovo" },
      { title: "График богослужений", href: "/calendar" },
    ],
  },
  {
    title: "Новости",
    href: "/news",
    children: [
      { title: "Лента", href: "/news" },
      { title: "Анонсы", href: "/anons" },
      { title: "Публикации", href: "/pub" },
    ],
  },
  {
    title: "Документы",
    href: "/documents",
    children: [
      { title: "Указы", href: "/documents/ukazy" },
      { title: "Распоряжения", href: "/documents/rasporyazheniya" },
      { title: "Циркуляры", href: "/documents/cirkulyary" },
    ],
  },
  {
    title: "Епархия",
    href: "/about",
    children: [
      { title: "История", href: "/about" },
      { title: "Отделы", href: "/otdely" },
      { title: "Сотрудники", href: "/klir" },
    ],
  },
  {
    title: "Приходы",
    href: "/prihody",
    children: [
      { title: "Список", href: "/prihody" },
      { title: "Карта", href: "/prihody?view=map" },
    ],
  },
  {
    title: "Медиа",
    href: "/media",
    children: [
      { title: "Видео", href: "/video" },
      { title: "Галерея", href: "/gallery" },
      { title: "Радио", href: "/radio" },
    ],
  },
  {
    title: "Контакты",
    href: "/kontakt",
  },
  {
    title: "Читаемое",
    href: "/slovo",
  },
];

export function MainMenu() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-2 lg:flex">
      {menu.map((item) =>
        item.children ? (
          <DropdownMenu key={item.title}>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-muted">
              {item.title}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[220px]">
              {item.children.map((child) => (
                <DropdownMenuItem key={child.href} asChild>
                  <Link href={child.href}>{child.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-muted",
              pathname.startsWith(item.href) && "bg-muted"
            )}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  );
}
