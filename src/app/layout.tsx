import type { Metadata } from 'next'
import ThemeRegistry from '@/_shared/config/theme/ThemeRegistry';
import { MainLayout } from '@/_app/routes/layouts';

export const metadata: Metadata = {
  title: 'BakerShop',
  description: 'Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  )
}
