import type { Metadata } from 'next'
import ThemeRegistry from '@/_shared/config/theme/ThemeRegistry';
import { MainLayout } from '@/_app/routes/layouts';
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: 'BakerShop',
  description: 'Project',
}

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeRegistry>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  )
}
