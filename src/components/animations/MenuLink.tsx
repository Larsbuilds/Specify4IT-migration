import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuLinkProps {
  href: string;
  locale?: string;
  children: ReactNode;
  isActive?: boolean;
}

export function MenuLink({ href, locale, children, isActive }: MenuLinkProps) {
  return (
    <Link href={href} locale={locale} className="relative">
      <span className={`text-sm font-semibold leading-6 ${
        isActive ? 'text-primary-DEFAULT' : 'text-text-primary'
      }`}>
        {children}
      </span>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-light origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  );
}
