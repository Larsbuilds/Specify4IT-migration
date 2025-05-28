'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { LanguageDropdown } from '@/components/ui/LanguageDropdown';

export function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('product'), href: '/product' },
  ].map(item => ({
    ...item,
    href: `/${locale}${item.href === '/' ? '' : item.href}`
  }));

  return (
    <header className="bg-[#1A2B3C] border-b border-[#3E7CB1]/10 relative z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5">
            <span className="sr-only">Specify4IT</span>
            <Image src="/specify4itlogo.svg" alt="Specify4IT" width={40} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-2">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  active={pathname === item.href}
                  className={`${navigationMenuTriggerStyle()} text-white hover:text-[#3E7CB1] transition-colors font-medium px-4 py-2 text-sm ${pathname === item.href ? 'bg-[#3E7CB1]/10' : ''}`}
                >
                  <Link href={item.href} locale={locale}>
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex lg:flex-1 lg:justify-end">
          <LanguageDropdown />
        </div>
      </nav>
    </header>
  );
}
