'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
    <header className="bg-[#1A2B3C] border-b border-[#3E7CB1]/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5">
            <span className="sr-only">Specify4IT</span>
            <img src="/specify4itlogo.svg" alt="Specify4IT" className="h-10 w-auto" />
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
          <LanguageSwitcher currentPath={pathname} />
        </div>
      </nav>
    </header>
  );
}

function LanguageSwitcher({ currentPath }: { currentPath: string }) {
  return (
    <div className="flex gap-4">
      <Link
        href={currentPath}
        locale="en"
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        EN
      </Link>
      <Link
        href={currentPath}
        locale="de"
        className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
      >
        DE
      </Link>
    </div>
  );
}
