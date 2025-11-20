export default function DocumentSectionPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container space-y-4 py-8">
      <div className="section-title">Документы: {params.slug}</div>
      <p className="text-sm text-muted-foreground">Раздел готов к подключению API.</p>
    </div>
  );
}
