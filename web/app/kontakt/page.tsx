export default function ContactsPage() {
  return (
    <div className="container space-y-4 py-8">
      <div className="section-title">Контакты</div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Канцелярия</h3>
          <p className="text-sm text-muted-foreground">г. Барыш, ул. Центральная, 1</p>
          <p className="text-sm text-muted-foreground">Тел.: +7 (84253) 123-45</p>
          <p className="text-sm text-muted-foreground">Email: info@example.ru</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold">Прием граждан</h3>
          <p className="text-sm text-muted-foreground">Пн–Пт с 10:00 до 16:00.</p>
          <p className="text-sm text-muted-foreground">Предварительная запись по телефону канцелярии.</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
        Здесь будет интерактивная карта офиса и кафедрального собора.
      </div>
    </div>
  );
}
