"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GalleryAlbum } from "@/types/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GalleryLightbox({ albums }: { albums: GalleryAlbum[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  if (!albums.length) return null;

  const images = albums.flatMap((album) => album.photos || []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Галерея</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(src)}
              className="relative h-28 overflow-hidden rounded-lg border transition hover:scale-[1.02]"
            >
              <Image src={src} alt={`Фото ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </CardContent>
      <Dialog open={!!current} onOpenChange={() => setCurrent(null)}>
        <DialogContent className="max-w-4xl bg-transparent shadow-none">
          {current && (
            <div className="relative h-[70vh] w-full">
              <Image src={current} alt="Просмотр фото" fill className="rounded-lg object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
