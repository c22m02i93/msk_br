"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackCalendar } from "@/lib/mock";
import { CalendarWidget } from "@/components/CalendarWidget";

export default function CalendarPage() {
  const { data } = useQuery({
    queryKey: ["calendar"],
    queryFn: () => contentApi.calendar(),
    initialData: { results: fallbackCalendar, count: fallbackCalendar.length, next: null, previous: null },
  });

  return (
    <div className="container py-8">
      <div className="section-title">График богослужений</div>
      <CalendarWidget items={data?.results || []} />
    </div>
  );
}
