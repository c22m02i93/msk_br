import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsItem } from "@/types/content";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      {item.image && (
        <div className="relative h-48 w-full">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>
      )}
      <CardHeader className="flex-1 space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{new Date(item.date || Date.now()).toLocaleDateString("ru-RU")}</span>
        </div>
        <CardTitle className="text-xl leading-tight">
          <Link href={`/news/${item.slug || item.id}`}>{item.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p>{item.description || item.summary}</p>
        <Link href={`/news/${item.slug || item.id}`} className="text-primary">
          Читать далее
        </Link>
      </CardContent>
    </Card>
  );
}
