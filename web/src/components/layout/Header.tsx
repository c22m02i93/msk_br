import { useState } from 'react';
import { ChevronDown, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useMenu, useSearch } from '@/lib/hooks';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { data: menu } = useMenu();
  const [query, setQuery] = useState('');
  const { data: results } = useSearch(query);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="bg-white shadow-header">
      <div className="container-wide flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Барышская епархия" className="h-12 w-auto" />
          <div>
            <div className="text-lg font-bold text-brand-dark">Барышская епархия</div>
            <p className="text-sm text-neutral-600">Официальный сайт Ульяновской митрополии</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 xl:flex">
          {menu?.main.map(item => (
            <div key={item.label} className="group relative">
              <a href={item.link} className="flex items-center gap-1 text-sm font-semibold text-brand-dark hover:text-brand-blue">
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-40 mt-3 w-56 rounded-lg bg-white p-4 shadow-card opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {item.children.map(child => (
                      <li key={child.label}>
                        <a href={child.link} className="hover:text-brand-blue">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="relative hidden w-72 items-center xl:flex">
          <Input
            placeholder="Поиск по сайту"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
            className="pr-12"
          />
          <Search className="absolute right-4 h-4 w-4 text-neutral-400" />
          {searchFocused && query.length > 1 && results && (
            <div className="absolute top-12 z-30 w-full rounded-lg bg-white p-4 shadow-card">
              <div className="mb-2 text-xs font-semibold uppercase text-neutral-500">Результаты</div>
              <ul className="space-y-2 text-sm">
                {results.length === 0 && <li className="text-neutral-500">Ничего не найдено</li>}
                {results.map(item => (
                  <li key={item.id}>
                    <a href={item.link} className="flex items-center justify-between hover:text-brand-blue">
                      <span>{item.title}</span>
                      <span className="text-xs text-neutral-500">{item.category}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 xl:hidden">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <Search className="h-4 w-4" />
            <span className="ml-2">Поиск</span>
          </Button>
          <MobileMenu menu={menu?.main || []} />
        </div>
      </div>
      <Separator className="bg-neutral-200" />
      <div className="container-wide flex items-center gap-4 py-3 text-sm font-medium text-brand-dark xl:hidden">
        <Menu className="h-4 w-4 text-neutral-500" />
        <span>Меню</span>
      </div>
    </header>
  );
};

export default Header;
