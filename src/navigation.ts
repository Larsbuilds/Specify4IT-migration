'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';


export { Link, useRouter, usePathname, useLocale };

export function useRedirect() {
  const router = useRouter();
  return (url: string) => router.push(url);
}
