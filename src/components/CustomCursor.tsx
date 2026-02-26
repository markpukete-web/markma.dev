import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-exclusion sm:block hidden"
                animate={{
                    x: mousePosition.x - (isHovering ? 20 : 8),
                    y: mousePosition.y - (isHovering ? 20 : 8),
                    width: isHovering ? 40 : 16,
                    height: isHovering ? 40 : 16,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 750,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div
                    className="h-full w-full rounded-full bg-accent/80 backdrop-blur-sm"
                    style={{
                        boxShadow: isHovering ? '0 0 20px 2px rgba(212, 168, 67, 0.4)' : 'none'
                    }}
                />
            </motion.div>
        </>
    );
}
