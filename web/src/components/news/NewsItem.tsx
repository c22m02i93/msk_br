import { ArrowRight } from 'lucide-react';
import { NewsItem as NewsItemType } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  item: NewsItemType;
  highlight?: boolean;
}

const NewsItem = ({ item, highlight = false }: Props) => (
  <Card className={highlight ? 'flex overflow-hidden' : ''}>
    <div className={`relative ${highlight ? 'w-1/2' : 'h-40'} overflow-hidden rounded-l-xl`}> 
      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-dark shadow-sm">
        {new Date(item.date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'long' })}
      </span>
    </div>
    <CardContent className={`flex flex-col ${highlight ? 'w-1/2 p-8' : 'p-4'} justify-between`}>
      <div>
        <p className="text-xs font-semibold uppercase text-brand-blue">{item.category}</p>
        <h3 className={`mt-2 font-semibold text-brand-dark ${highlight ? 'text-2xl leading-8' : 'text-lg leading-6'}`}>
          {item.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-700 line-clamp-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {item.excerpt}
        </p>
      </div>
      <a href={item.link} className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue hover:underline">
        Подробнее
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </CardContent>
  </Card>
);

export default NewsItem;
