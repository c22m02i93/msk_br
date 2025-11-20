"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackVideo } from "@/lib/mock";
import { VideoBlock } from "@/components/VideoBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function VideoPage() {
  const { data } = useQuery({
    queryKey: ["video"],
    queryFn: () => contentApi.video({ page_size: 6 }),
    initialData: { results: fallbackVideo, count: fallbackVideo.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-6 py-8">
      <div className="section-title">Видео</div>
      <VideoBlock videos={data?.results || []} />
      <div className="grid gap-4 md:grid-cols-2">
        {data?.results.slice(1).map((video) => (
          <Card key={video.id}>
            <CardHeader>
              <CardTitle>{video.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{video.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
