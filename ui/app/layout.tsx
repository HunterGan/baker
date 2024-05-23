import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import { MainLayout } from '@/app/routes/layouts';
import AuthProvider from '@/app/providers/auth/AuthProvider';
import QueryProvider from '@/app/providers/query/QueryProvider';
import ThemeRegistry from '@/shared/config/theme/ThemeRegistry';
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: 'BakerShop',
  description: 'Project',
}

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <ThemeRegistry>
              <MainLayout>
                {children}
              </MainLayout>
            </ThemeRegistry>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
