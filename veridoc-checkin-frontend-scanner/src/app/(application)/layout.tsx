'use client'; // Required if using App Router

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { ReactNode } from 'react';

export default function RootLayout({ children, session }: {children: ReactNode, session: Session}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}