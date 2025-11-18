import { MenuItem } from '@/types';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Props {
  menu: MenuItem[];
}

const MobileMenu = ({ menu }: Props) => (
  <Sheet>
    <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Menu className="h-5 w-5" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <div className="text-lg font-semibold text-brand-dark">Меню</div>
        <p className="text-sm text-neutral-600">Быстрый доступ к разделам</p>
      </SheetHeader>
      <div className="space-y-4">
        {menu.map(item => (
          <div key={item.label} className="rounded-lg border border-neutral-200 p-3">
            <a href={item.link} className="block text-base font-semibold text-brand-dark">
              {item.label}
            </a>
            {item.children && (
              <div className="mt-2 space-y-1 text-sm text-neutral-700">
                {item.children.map(child => (
                  <div key={child.label} className="flex items-center gap-2">
                    <Separator orientation="vertical" className="h-4 bg-neutral-300" />
                    <a href={child.link} className="hover:text-brand-blue">
                      {child.label}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

export default MobileMenu;
