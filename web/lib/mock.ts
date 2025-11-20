import { Announcement, DayItem, NewsItem, Parish, Publication, SaintItem, VideoItem, GalleryAlbum, CalendarEvent } from "@/types/content";

export const fallbackDay: DayItem = {
  title: "День святого праведного Иоанна",
  subtitle: "Память святителя",
  date: new Date().toISOString(),
  description: "Празднуем память святого, вспоминая его подвиг и молитву.",
  image: "/images/day.jpg",
  link: "/slovo",
};

export const fallbackNews: NewsItem[] = [
  {
    id: 1,
    title: "Освящение нового храма",
    slug: "osvyashenie-hrama",
    date: new Date().toISOString(),
    description: "Владыка совершил чин великого освящения храмового здания.",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Молодежная встреча в кафедральном соборе",
    slug: "vstrecha-sobor",
    date: new Date().toISOString(),
    description: "Состоялось обсуждение миссионерских проектов с молодежью.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Благотворительная ярмарка",
    slug: "yarmarka",
    date: new Date().toISOString(),
    description: "Средства направлены на поддержку воскресной школы.",
    image: "/images/news3.jpg",
  },
];

export const fallbackAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "Праздничная литургия",
    date: new Date().toISOString(),
    description: "Служба в соборе в 9:00, возглавит архиерей.",
  },
  {
    id: 2,
    title: "Лекторий о литургике",
    date: new Date().toISOString(),
    description: "Беседа с преподавателем духовной семинарии.",
  },
];

export const fallbackPublications: Publication[] = [
  {
    id: 1,
    title: "История иконы",
    description: "Как появилась чудотворная икона и в чем ее значение.",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: "О милосердии",
    description: "Размышления священника о делах милосердия.",
    date: new Date().toISOString(),
  },
];

export const fallbackVideo: VideoItem[] = [
  {
    id: 1,
    title: "Интервью с архипастырем",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Беседа о служении и миссии.",
    image: "/images/video.jpg",
  },
];

export const fallbackSaints: SaintItem[] = [
  { id: 1, name: "Святитель Николай", date: "19 декабря", description: "Чудотворец, архиепископ Мир Ликийских." },
  { id: 2, name: "Преподобный Сергий", date: "8 октября", description: "Игумен Радонежский." },
];

export const fallbackGallery: GalleryAlbum[] = [
  { id: 1, title: "Праздничное богослужение", cover: "/images/gallery1.jpg", photos: ["/images/gallery1.jpg"] },
  { id: 2, title: "Поездка паломников", cover: "/images/gallery2.jpg", photos: ["/images/gallery2.jpg"] },
];

export const fallbackCalendar: CalendarEvent[] = [
  { id: 1, title: "Литургия", date: new Date().toISOString(), description: "Кафедральный собор" },
  { id: 2, title: "Молебен", date: new Date().toISOString(), description: "Храм святителя Николая" },
];

export const fallbackParishes: Parish[] = [
  {
    id: 1,
    title: "Кафедральный собор",
    address: "г. Барыш, ул. Центральная, 1",
    phone: "+7 (84253) 123-45",
    description: "Главный храм епархии.",
    lat: 54.2905,
    lng: 46.7576,
  },
];
