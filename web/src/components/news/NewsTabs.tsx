import { useState } from 'react';
import { useNews, usePublications } from '@/lib/hooks';
import NewsItem from './NewsItem';

const tabs = [
  { key: 'news', label: 'Новости' },
  { key: 'publications', label: 'Публикации' }
];

const NewsTabs = () => {
  const { data: news } = useNews();
  const { data: pubs } = usePublications();
  const [active, setActive] = useState<'news' | 'publications'>('news');
  const list = active === 'news' ? news : pubs;

  return (
    <div className="card-surface">
      <div className="flex gap-4 border-b border-neutral-200 px-6 pt-5">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key as 'news' | 'publications')}
            className={`relative pb-4 text-sm font-semibold ${
              active === tab.key ? 'text-brand-blue' : 'text-neutral-500'
            }`}
          >
            {tab.label}
            {active === tab.key && <span className="absolute -bottom-[1px] left-0 h-0.5 w-full bg-brand-blue" />}
          </button>
        ))}
      </div>
      <div className="grid gap-4 p-6 lg:grid-cols-3">
        {list?.map(item => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsTabs;
