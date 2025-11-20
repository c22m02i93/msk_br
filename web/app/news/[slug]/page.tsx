"use client";

import { notFound, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackNews } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug as string;
  const { data } = useQuery({
    queryKey: ["news", slug],
    queryFn: () => contentApi.newsItem(slug),
    initialData: fallbackNews.find((n) => n.slug === slug || String(n.id) === slug),
  });

  if (!data) return notFound();

  return (
    <div className="container py-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl">{data.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {new Date(data.date || Date.now()).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          {data.image && (
            <div className="aspect-video overflow-hidden rounded-lg border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.image} alt={data.title} className="h-full w-full object-cover" />
            </div>
          )}
          <p>{data.description || data.body}</p>
        </CardContent>
      </Card>
    </div>
  );
}
