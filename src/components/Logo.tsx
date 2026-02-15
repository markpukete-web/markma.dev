import { cn } from '@/utils/cn'

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <span
      className={cn('text-2xl md:text-3xl leading-none', className)}
      style={{ fontFamily: "'Baoli SC', 'STLiti', 'LiSu', 'AR PL UKai', serif" }}
      aria-label="Mark Ma Logo"
      {...props}
    >
      馬
    </span>
  )
}
