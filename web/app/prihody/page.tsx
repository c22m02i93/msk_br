"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackParishes } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ParishesPage() {
  const { data } = useQuery({
    queryKey: ["parishes"],
    queryFn: () => contentApi.parishes({ page_size: 30 }),
    initialData: { results: fallbackParishes, count: fallbackParishes.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-6 py-8">
      <div className="section-title">Приходы</div>
      <div className="grid gap-4 md:grid-cols-2">
        {data?.results.map((parish) => (
          <Card key={parish.id}>
            <CardHeader>
              <CardTitle>{parish.title}</CardTitle>
              <p className="text-xs text-muted-foreground">{parish.address}</p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>{parish.description}</p>
              <Link href={`/prihody/${parish.slug || parish.id}`} className="text-primary">
                Подробнее
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        Здесь будет интерактивная карта с отметками всех приходов.
      </div>
    </div>
  );
}
