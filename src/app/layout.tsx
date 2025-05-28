import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { locale?: string };
}) {
  const locale = params?.locale || 'en';
  
  return (
    <html lang={locale} className={`${geist.className} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-[#1A2B3C] text-[#333333] dark:text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
