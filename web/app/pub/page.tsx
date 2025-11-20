"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackPublications } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PublicationsPage() {
  const { data } = useQuery({
    queryKey: ["publications"],
    queryFn: () => contentApi.publications({ page_size: 20 }),
    initialData: { results: fallbackPublications, count: fallbackPublications.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-4 py-8">
      <div className="section-title">Публикации</div>
      <div className="space-y-3">
        {data?.results.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <div className="text-xs text-muted-foreground">
                {new Date(item.date || Date.now()).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
