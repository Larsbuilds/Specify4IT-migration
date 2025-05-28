import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  redirect(`/${defaultLocale}`);
}
