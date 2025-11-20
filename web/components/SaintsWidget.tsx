import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SaintItem } from "@/types/content";

export function SaintsWidget({ saints }: { saints: SaintItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5" /> Святые дня
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {saints.map((saint) => (
          <div key={saint.id} className="rounded-lg border border-border/70 bg-white p-3 shadow-sm">
            <div className="text-sm font-semibold">{saint.name}</div>
            <div className="text-xs text-primary">{saint.date}</div>
            {saint.description && <p className="text-xs text-muted-foreground">{saint.description}</p>}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
