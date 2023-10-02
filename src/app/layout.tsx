import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { UserProvider } from '@store/ctx';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth with Next.js',
  description: 'Implementation of authentication with Next.js 13',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
