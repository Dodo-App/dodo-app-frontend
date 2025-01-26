import { FooterNav } from './FooterNav';

// TODO: Enable safe area after implementing the PWA

export const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-screen flex-col">
      {children}
      <FooterNav />
    </div>
  );
};
