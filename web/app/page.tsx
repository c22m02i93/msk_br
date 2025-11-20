"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackAnnouncements, fallbackCalendar, fallbackDay, fallbackGallery, fallbackNews, fallbackParishes, fallbackPublications, fallbackSaints, fallbackVideo } from "@/lib/mock";
import { NewsCard } from "@/components/NewsCard";
import { VideoBlock } from "@/components/VideoBlock";
import { PadreCard } from "@/components/PadreCard";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { CalendarWidget } from "@/components/CalendarWidget";
import { SaintsWidget } from "@/components/SaintsWidget";
import { GlotovkaWidget } from "@/components/GlotovkaWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  const { data: dayData } = useQuery({ queryKey: ["day"], queryFn: () => contentApi.day(), staleTime: 60_000, initialData: fallbackDay });
  const { data: newsData } = useQuery({
    queryKey: ["news", 1],
    queryFn: () => contentApi.news({ page: 1, page_size: 6 }),
    staleTime: 60_000,
    initialData: { results: fallbackNews, count: fallbackNews.length, next: null, previous: null },
  });
  const { data: anonsData } = useQuery({
    queryKey: ["anons"],
    queryFn: () => contentApi.announcements({ page_size: 3 }),
    initialData: { results: fallbackAnnouncements, count: 2, next: null, previous: null },
  });
  const { data: pubData } = useQuery({
    queryKey: ["pub"],
    queryFn: () => contentApi.publications({ page_size: 3 }),
    initialData: { results: fallbackPublications, count: 2, next: null, previous: null },
  });
  const { data: videoData } = useQuery({
    queryKey: ["video"],
    queryFn: () => contentApi.video({ page_size: 1 }),
    initialData: { results: fallbackVideo, count: 1, next: null, previous: null },
  });
  const { data: calendarData } = useQuery({
    queryKey: ["calendar"],
    queryFn: () => contentApi.calendar(),
    initialData: { results: fallbackCalendar, count: fallbackCalendar.length, next: null, previous: null },
  });
  const { data: galleryData } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => contentApi.gallery({ page_size: 8 }),
    initialData: { results: fallbackGallery, count: fallbackGallery.length, next: null, previous: null },
  });

  return (
    <div className="container space-y-8 py-8">
      <section>
        <div className="section-title">День</div>
        <Card className="overflow-hidden">
          <div className="grid gap-0 md:grid-cols-[2fr,3fr]">
            <div className="relative h-72 w-full md:h-full">
              <Image src={dayData?.image || "/images/day.jpg"} alt={dayData?.title || "День"} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl leading-tight">{dayData?.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{dayData?.subtitle}</p>
                <div className="text-xs uppercase text-primary">
                  {new Date(dayData?.date || Date.now()).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>{dayData?.description}</p>
                {dayData?.link && (
                  <Button asChild size="sm">
                    <Link href={dayData.link}>Подробнее</Link>
                  </Button>
                )}
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div>
            <div className="section-title">Новости епархии</div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {newsData?.results.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Анонсы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {anonsData?.results.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border/70 bg-white p-4 shadow-sm">
                    <div className="text-xs uppercase text-primary">
                      {new Date(item.date || Date.now()).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
                    </div>
                    <div className="text-sm font-semibold">{item.title}</div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Публикации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pubData?.results.map((item) => (
                  <div key={item.id} className="rounded-lg border border-border/70 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <PadreCard
            title="Слово архипастыря"
            description="Мир вам, дорогие братья и сестры! С благодарностью и надеждой обращаюсь к вам сегодня..."
            href="/slovo"
            image="/images/news2.jpg"
          />

          <VideoBlock videos={videoData?.results || []} />
        </div>

        <div className="space-y-6">
          <CalendarWidget items={calendarData?.results || []} />
          <GlotovkaWidget />
          <SaintsWidget saints={fallbackSaints} />
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Жадовский крестный ход</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              Ежегодный крестный ход в обитель преподобного Гавриила Жадовского собирает паломников со всей епархии.
              <Link href="/hod" className="block text-primary">Подробности</Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <GalleryLightbox albums={galleryData?.results || []} />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Приходы</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {fallbackParishes.map((p) => (
              <div key={p.id} className="rounded-lg border border-border/70 bg-white p-3 shadow-sm">
                <div className="text-sm font-semibold">{p.title}</div>
                <p className="text-xs text-muted-foreground">{p.address}</p>
              </div>
            ))}
            <Button asChild variant="outline">
              <Link href="/prihody">Все приходы</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
