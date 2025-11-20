"use client";

import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { fallbackGallery } from "@/lib/mock";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export default function GalleryPage() {
  const { data } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => contentApi.gallery({ page_size: 12 }),
    initialData: { results: fallbackGallery, count: fallbackGallery.length, next: null, previous: null },
  });
  return (
    <div className="container py-8">
      <div className="section-title">Галерея</div>
      <GalleryLightbox albums={data?.results || []} />
    </div>
  );
}
