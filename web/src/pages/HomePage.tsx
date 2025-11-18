import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import NewsItem from '@/components/news/NewsItem';
import NewsTabs from '@/components/news/NewsTabs';
import {
  useAnnouncements,
  useCalendar,
  useMainNews,
  usePopular,
  useVideos
} from '@/lib/hooks';
import { CalendarDays, Clock3, MapPin } from 'lucide-react';

const HomePage = () => {
  const { data: main } = useMainNews();
  const { data: announcements } = useAnnouncements();
  const { data: calendar } = useCalendar();
  const { data: popular } = usePopular();
  const { data: videos } = useVideos();

  return (
    <div className="min-h-screen bg-brand-beige">
      <TopBar />
      <Header />
      <main className="container-wide mt-10 space-y-12">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {main && <NewsItem item={main} highlight />}
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CalendarDays className="h-5 w-5 text-brand-blue" />
                  Церковный календарь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-700">
                {calendar && (
                  <>
                    <div className="flex items-center justify-between text-brand-dark">
                      <span className="font-semibold">{calendar.dayOfWeek}</span>
                      <span>{calendar.date}</span>
                    </div>
                    <Separator />
                    <div className="space-y-1">
                      <div className="text-xs uppercase text-neutral-500">Память святых</div>
                      {calendar.saints.map(saint => (
                        <p key={saint}>{saint}</p>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase text-neutral-500">Священное писание</div>
                      <p>{calendar.scripture}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs uppercase text-neutral-500">Пост</div>
                      <p>{calendar.fasting}</p>
                    </div>
                    <div className="rounded-lg bg-brand-beige px-3 py-2 text-sm text-brand-dark">{calendar.note}</div>
                  </>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Объявления</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements?.map(item => (
                  <div key={item.id} className="space-y-1 rounded-lg border border-neutral-100 p-3">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase text-brand-blue">
                      <CalendarDays className="h-4 w-4" />
                      {item.date}
                    </div>
                    <div className="text-sm font-semibold text-brand-dark">{item.title}</div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <Clock3 className="h-4 w-4" />
                      {item.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                    <a href={item.link} className="text-xs font-semibold text-brand-blue">
                      Подробнее
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Популярное</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {popular?.map(item => (
                  <a key={item.id} href={item.link} className="block text-sm font-medium text-brand-dark hover:text-brand-blue">
                    {item.title}
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <NewsTabs />
          </div>
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <img src="/images/banner-1.jpg" className="h-28 w-full object-cover" alt="Баннер 1" />
              <CardContent className="space-y-2 p-4">
                <div className="text-xs font-semibold uppercase text-brand-blue">Молодежный отдел</div>
                <div className="text-lg font-semibold text-brand-dark">Добровольческое движение</div>
                <p className="text-sm text-neutral-700">Присоединяйтесь к волонтёрам, помогайте ближним, участвуйте в акциях.</p>
                <Button variant="default" size="sm">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <img src="/images/banner-2.jpg" className="h-28 w-full object-cover" alt="Баннер 2" />
              <CardContent className="space-y-2 p-4">
                <div className="text-xs font-semibold uppercase text-brand-blue">Православная газета</div>
                <div className="text-lg font-semibold text-brand-dark">«Вестник епархии»</div>
                <p className="text-sm text-neutral-700">Свежие номера газеты, подписка, архив выпусков и интервью.</p>
                <Button variant="outline" size="sm">
                  Читать
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Видео</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {videos?.map(video => (
                <a key={video.id} href={video.link} className="group block overflow-hidden rounded-xl border border-neutral-100">
                  <div className="relative h-40 w-full overflow-hidden">
                    <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                      {video.duration}
                    </span>
                  </div>
                  <div className="p-3 text-sm font-semibold text-brand-dark group-hover:text-brand-blue">{video.title}</div>
                </a>
              ))}
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <img src="/images/banner-3.jpg" alt="Программа" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="relative space-y-4 bg-gradient-to-r from-white/90 via-white/80 to-white/0 p-6">
              <div className="text-xs font-semibold uppercase text-brand-blue">Телеканал</div>
              <div className="text-2xl font-bold text-brand-dark">Передача «Слово Пастыря»</div>
              <p className="text-sm text-neutral-700">Смотрите еженедельную программу с участием владыки Филарета, беседы о вере и семейных ценностях.</p>
              <Button size="lg">Смотреть эфир</Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
