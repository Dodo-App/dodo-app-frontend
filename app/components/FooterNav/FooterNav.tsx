import { useState } from 'react';
import { Home, Calendar, FileText, Settings } from 'lucide-react';

type NavItem = {
  icon: React.ElementType;
  label: string;
};

const navItems: NavItem[] = [
  { icon: Home, label: 'Home' },
  { icon: Calendar, label: 'Calendar' },
  { icon: FileText, label: 'Documents' },
  { icon: Settings, label: 'Settings' },
];

export const FooterNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="fixed inset-x-0 bottom-0 rounded-t-xl bg-gray-100 p-2 dark:bg-gray-800">
      <ul className="flex items-center justify-around">
        {navItems.map((item, index) => (
          <li key={item.label} className="flex-1">
            <button
              onClick={() => setActiveTab(index)}
              className={`flex w-full items-center justify-center rounded-full p-2 transition-all duration-200 ease-in-out ${
                activeTab === index
                  ? 'bg-white text-blue-600 shadow-lg dark:bg-gray-700 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <item.icon className="size-6" />
              {activeTab === index && (
                <span className="ml-2 text-sm font-medium">{item.label}</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
