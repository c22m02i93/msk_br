import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PadreCardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export function PadreCard({ title, description, image = "/images/news1.jpg", href = "/slovo" }: PadreCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[2fr,3fr]">
        <div className="relative h-80 w-full md:h-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>{description}</p>
            <Button asChild>
              <Link href={href}>Читать далее</Link>
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
