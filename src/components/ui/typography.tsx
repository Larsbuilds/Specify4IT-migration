import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn(
      "text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight",
      className
    )}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn(
      "text-3xl md:text-4xl lg:text-[32px] font-bold leading-tight",
      className
    )}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn(
      "text-2xl md:text-3xl lg:text-[28px] font-medium leading-tight",
      className
    )}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn(
      "text-xl md:text-2xl lg:text-[24px] font-medium leading-tight",
      className
    )}>
      {children}
    </h4>
  );
}

export function H5({ children, className }: TypographyProps) {
  return (
    <h5 className={cn(
      "text-lg md:text-xl lg:text-[20px] font-medium leading-tight",
      className
    )}>
      {children}
    </h5>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-base md:text-[16px] leading-relaxed",
      className
    )}>
      {children}
    </p>
  );
}

export function Lead({ children, className }: TypographyProps) {
  return (
    <p className={cn(
      "text-xl md:text-2xl leading-relaxed",
      className
    )}>
      {children}
    </p>
  );
}

export function Large({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

export function Small({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

export function Subtle({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm text-text-secondary", className)}>
      {children}
    </p>
  );
}
