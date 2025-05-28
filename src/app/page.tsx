import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { defaultLocale } from '@/config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  redirect(`/${defaultLocale}`);
}
