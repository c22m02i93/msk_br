"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackParishes } from "@/lib/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ParishDetailPage() {
  const params = useParams<{ id: string }>();
  const slug = params?.id;
  const { data } = useQuery({
    queryKey: ["parish", slug],
    queryFn: () => contentApi.parish(slug),
    initialData: fallbackParishes.find((p) => String(p.id) === slug || p.slug === slug),
  });

  if (!data) return null;

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{data.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{data.address}</p>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>{data.description}</p>
          {data.phone && <div>Телефон: {data.phone}</div>}
          {data.priest && <div>Настоятель: {data.priest}</div>}
          {data.schedule && (
            <div className="rounded-lg border border-border/70 bg-muted/40 p-3 text-sm">
              <div className="font-semibold text-foreground">Расписание богослужений</div>
              <p>{data.schedule}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
