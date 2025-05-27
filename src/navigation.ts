'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { locales } from './config';

export { Link, useRouter, usePathname, useLocale };

export function redirect(url: string) {
  const router = useRouter();
  router.push(url);
}
