
import { cn } from '@/utils/cn'

interface LogoProps extends React.SVGProps<SVGSVGElement> { }

export function Logo({ className, ...props }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 40"
            fill="none"
            className={cn('h-8 w-auto', className)}
            aria-label="Mark Ma Logo"
            {...props}
        >
            {/*
            Design Concept: "Digital Frequency"
            Sharp, angular, high-tech.
            Constructed with a single continuous path logic or hard geometric blocks.
        */}
            <path
                d="M 6 32 L 6 12 L 14 20 L 22 12 L 22 32"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
            <path
                d="M 34 32 L 34 12 L 42 20 L 50 12 L 50 32"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />

            {/* Square Dot for consistency with sharp edges */}
            <rect x="62" y="26" width="6" height="6" fill="currentColor" />
        </svg>
    )
}
