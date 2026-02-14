
import { cn } from '@/utils/cn'

interface LogoProps extends React.SVGProps<SVGSVGElement> { }

export function Logo({ className, ...props }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 40"
            fill="none"
            stroke="currentColor"
            className={cn('h-8 w-auto', className)}
            aria-label="Mark Ma Logo"
            {...props}
        >
            <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                {/* First 'm' */}
                <path d="M8 30V12a4 4 0 0 1 8 0v18" />
                <path d="M16 12a4 4 0 0 1 8 0v18" />

                {/* Second 'm' */}
                <path d="M32 30V12a4 4 0 0 1 8 0v18" />
                <path d="M40 12a4 4 0 0 1 8 0v18" />

                {/* Dot */}
                <circle cx="56" cy="26" r="3" fill="currentColor" stroke="none" />
            </g>
        </svg>
    )
}
