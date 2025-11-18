import { useMenu } from '@/lib/hooks';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { data: menu } = useMenu();

  return (
    <footer className="mt-16 bg-brand-dark text-white">
      <div className="container-wide grid gap-8 py-12 lg:grid-cols-4 xl:grid-cols-7">
        {menu?.footer.map(section => (
          <div key={section.title} className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">{section.title}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {section.items.map(item => (
                <li key={item.label}>
                  <a href={item.link} className="hover:text-brand-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-3 text-sm text-white/80 xl:col-span-1">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-brand-gold">Контакты</h4>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>г. Барыш, ул. Советская 12</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+7 (84268) 4-00-01</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@barysh-eparchy.ru</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-wide flex flex-col gap-2 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <span>© 2024 Барышская епархия. Все права защищены.</span>
          <span>Разработка: Monorepo Demo</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
