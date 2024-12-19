import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from './navbar_comp';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const isLoginPage = router.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">{children}</main>
    </div>
  );
}