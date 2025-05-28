import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  const locale = 'en';
  
  return (
    <html lang={locale} className={`${geist.className} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-[#1A2B3C] text-[#333333] dark:text-white antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
