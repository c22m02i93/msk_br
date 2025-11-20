"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { contentApi } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentItem } from "@/types/content";

const sections = [
  { key: "ukazy", label: "Указы" },
  { key: "rasporyazheniya", label: "Распоряжения" },
  { key: "cirkulyary", label: "Циркуляры" },
];

function DocumentList({ section }: { section: string }) {
  const { data } = useQuery({
    queryKey: ["documents", section],
    queryFn: () => contentApi.documents(section, { page_size: 20 }),
    initialData: { results: [] as DocumentItem[], count: 0, next: null, previous: null },
  });

  return (
    <div className="space-y-3">
      {data?.results.map((doc) => (
        <Card key={doc.id}>
          <CardHeader>
            <CardTitle className="text-lg">{doc.title}</CardTitle>
            <div className="text-xs text-muted-foreground">
              {new Date(doc.date || Date.now()).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {doc.description}
            {doc.file_url && (
              <a href={doc.file_url} className="mt-2 block text-primary">
                Скачать документ
              </a>
            )}
          </CardContent>
        </Card>
      ))}
      {!data?.results.length && <p className="text-sm text-muted-foreground">Нет документов в этом разделе.</p>}
    </div>
  );
}

export default function DocumentsPage() {
  const [current, setCurrent] = useState(sections[0].key);
  return (
    <div className="container space-y-6 py-8">
      <div className="section-title">Документы</div>
      <Tabs value={current} onValueChange={setCurrent}>
        <TabsList className="flex-wrap">
          {sections.map((section) => (
            <TabsTrigger key={section.key} value={section.key}>
              {section.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {sections.map((section) => (
          <TabsContent key={section.key} value={section.key}>
            <DocumentList section={section.key} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
