import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoItem } from "@/types/content";

export function VideoBlock({ videos }: { videos: VideoItem[] }) {
  const video = videos[0];
  if (!video) return null;
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">Видео</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={video.video_url || video.embed}
            className="h-full w-full rounded-md border"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        </AspectRatio>
        <div className="text-lg font-semibold leading-tight">{video.title}</div>
        <p className="text-sm text-muted-foreground">{video.description}</p>
      </CardContent>
    </Card>
  );
}
