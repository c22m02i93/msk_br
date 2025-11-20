"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
  { title: "Епархия", href: "/about" },
  { title: "Приходы", href: "/prihody" },
  { title: "Медиа", href: "/media" },
  { title: "Контакты", href: "/kontakt" },
  { title: "Читаемое", href: "/slovo" },
];

export function MobileMenu() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-soft lg:hidden">
        <Menu className="h-5 w-5" />
        Меню
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] bg-white">
        <Accordion type="multiple" className="w-full">
          {menu.map((item) =>
            item.children ? (
              <AccordionItem value={item.title} key={item.title}>
                <AccordionTrigger className="px-4 text-base font-semibold">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 px-4 pb-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm hover:bg-muted",
                          pathname === child.href && "bg-muted"
                        )}
                        href={child.href}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ) : (
              <AccordionItem value={item.title} key={item.title}>
                <AccordionTrigger className="px-4 text-base font-semibold">
                  <Link href={item.href} className="w-full text-left">
                    {item.title}
                  </Link>
                </AccordionTrigger>
              </AccordionItem>
            )
          )}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
