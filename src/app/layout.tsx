import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { UserProvider } from '@store/ctx';
import { getCurrentUser } from '@services/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth with Next.js',
  description: 'Implementation of authentication with Next.js 13',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <UserProvider session={user}>{children}</UserProvider>
        </main>
      </body>
    </html>
  );
}
