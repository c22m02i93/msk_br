"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackAnnouncements } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnonsPage() {
  const { data } = useQuery({
    queryKey: ["anons"],
    queryFn: () => contentApi.announcements({ page_size: 20 }),
    initialData: { results: fallbackAnnouncements, count: fallbackAnnouncements.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-4 py-8">
      <div className="section-title">Анонсы</div>
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
