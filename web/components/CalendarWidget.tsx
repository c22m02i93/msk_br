import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarEvent } from "@/types/content";

export function CalendarWidget({ items }: { items: CalendarEvent[] }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2 text-xl">
          <CalendarDays className="h-5 w-5" /> Календарь
        </CardTitle>
        <span className="text-xs text-muted-foreground">службы и события</span>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg border border-border/80 bg-muted/40 p-3">
            <div className="text-xs uppercase text-primary">
              {new Date(item.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}
            </div>
            <div className="text-sm font-semibold text-foreground">{item.title}</div>
            {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
