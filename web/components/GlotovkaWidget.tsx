import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function GlotovkaWidget() {
  return (
    <Card className="overflow-hidden">
      <Link href="https://glotovka.ru" className="relative block h-40 w-full">
        <Image src="/images/gallery1.jpg" alt="Глотовка" fill className="object-cover" />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <div>
            <div className="text-sm uppercase tracking-wide">Глотовка</div>
            <div className="text-lg font-semibold">Паломнические поездки</div>
          </div>
        </div>
      </Link>
    </Card>
  );
}
