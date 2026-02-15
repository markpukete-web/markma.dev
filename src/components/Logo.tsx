import { cn } from '@/utils/cn'

import maCharacter from '@/assets/ma-character.png'

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> { }

export function Logo({ className, ...props }: LogoProps) {
  return (
    <span
      className={cn('block bg-current text-2xl md:text-3xl', className)}
      style={{
        maskImage: `url(${maCharacter})`,
        WebkitMaskImage: `url(${maCharacter})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        width: '1em',
        height: '1em',
      }}
      aria-label="Mark Ma Logo"
      {...props}
    />
  )
}
