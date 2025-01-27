import React from 'react';
import { FooterNav } from '../Layout/FooterNav';
import { Header } from '../Layout/Header';

// TODO: Enable safe area after implementing the PWA

export const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Make header dynamic */}
      <Header title="Dodo" />
      <div className="mx-3 my-20 flex flex-col">{children}</div>
      <FooterNav />
    </>
  );
};
