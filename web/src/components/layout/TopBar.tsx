import { Mail, MapPin, Phone, Send } from 'lucide-react';

const TopBar = () => (
  <div className="hidden border-b border-white/20 bg-brand-dark text-white lg:block">
    <div className="container-wide flex items-center justify-between py-2 text-xs font-medium">
      <div className="flex items-center gap-4">
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
      <div className="flex items-center gap-4">
        <a href="https://t.me" className="flex items-center gap-2 hover:text-brand-gold">
          <Send className="h-4 w-4" />
          <span>Telegram</span>
        </a>
        <a href="https://vk.com" className="flex items-center gap-2 hover:text-brand-gold">
          <span>ВКонтакте</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
