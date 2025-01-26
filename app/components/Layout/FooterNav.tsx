import { Link, useMatchRoute } from '@tanstack/react-router';
import { Home, CirclePlus, CalendarRange } from 'lucide-react';

type NavItem = {
  icon: React.ElementType;
  label: string;
  to: string;
};

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: CirclePlus, label: 'Add', to: '/add' },
  // Default for Pet or Home?
  { icon: CalendarRange, label: 'Timeline', to: '/timeline' },
];

export const FooterNav = () => {
  const matchRoute = useMatchRoute();

  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-gray-200 bg-background px-3 py-2">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.label} className="flex-1">
            <Link
              className={`flex w-full flex-col items-center justify-center  ${
                matchRoute({ to: item.to })
                  ? 'text-primary'
                  : 'text-muted-foreground'
              }`}
              to={item.to}
            >
              <item.icon className="size-6" />
              <span className="mt-1 text-xs font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
