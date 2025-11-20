"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackNews } from "@/lib/mock";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/ui/button";

export default function NewsListPage() {
  const params = useSearchParams();
  const page = Number(params.get("page") || 1);
  const { data } = useQuery({
    queryKey: ["news", page],
    queryFn: () => contentApi.news({ page, page_size: 9 }),
    initialData: { results: fallbackNews, count: fallbackNews.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-6 py-8">
      <div className="section-title">Новости</div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.results.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Button asChild variant="outline" disabled={page <= 1}>
          <Link href={`?page=${Math.max(page - 1, 1)}`}>Назад</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`?page=${page + 1}`}>Вперед</Link>
        </Button>
      </div>
    </div>
  );
}
