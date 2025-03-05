import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Avatar, AvatarImage } from '@/components/ShadcnUI/avatar';

interface HeaderProps {
  title: string;
  controlComponents?: React.ReactNode[];
}

export const Header = ({ title, controlComponents }: Readonly<HeaderProps>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 flex items-center justify-between bg-background px-3 py-2 text-2xl font-bold ${
        isScrolled ? 'border-b border-gray-200' : ''
      }`}
    >
      {/* TODO: Add/Mock user avatar and link the component to the profile page, and add mock server for user data as well as the React Query for user api */}
      <div className="flex items-center gap-2">
        <Link to="/user">
          <Avatar>
            <AvatarImage src={faker.image.avatar()} />
          </Avatar>
        </Link>
        <h1>{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {controlComponents?.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>
    </header>
  );
};
