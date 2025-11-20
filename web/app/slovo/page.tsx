export default function SlovoPage() {
  return (
    <div className="container space-y-4 py-8">
      <div className="section-title">Слово архипастыря</div>
      <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
        <p className="text-muted-foreground">
          Здесь будет подборка посланий и видеобращений архипастыря. Секция готова к подключению API: достаточно заменить
          статический текст на данные, полученные с backend.
        </p>
      </div>
    </div>
  );
}
