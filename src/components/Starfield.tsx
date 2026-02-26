import { useEffect, useRef } from 'react';
import { useScroll, useSpring } from 'motion/react';

export function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        // Star properties
        const stars: {
            x: number;
            y: number;
            z: number;
            size: number;
            alpha: number;
            phase: number;
        }[] = [];

        const numStars = window.innerWidth < 768 ? 80 : 250;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * (window.innerWidth || 1000),
                    y: Math.random() * (window.innerHeight || 1000) * 2, // Spread them out vertically across scroll space
                    z: Math.random() * 2 + 0.5,
                    size: Math.random() * 1.5 + 0.5,
                    alpha: Math.random(),
                    phase: Math.random() * Math.PI * 2,
                });
            }
        };

        window.addEventListener('resize', resize);
        resize();
        initStars();

        let lastScrollY = smoothScrollY.get();

        const render = () => {
            const currentScrollY = smoothScrollY.get();
            const delta = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Scroll parallax + gentle continuous drift upwards
                star.y -= (delta * (1 / (star.z * 1.5))) + (0.1 * (1 / star.z));

                // Wrap around vertically
                if (star.y < -canvas.height * 0.5) star.y += canvas.height * 2;
                if (star.y > canvas.height * 1.5) star.y -= canvas.height * 2;

                star.phase += 0.015;
                const currentAlpha = Math.abs(Math.sin(star.phase)) * 0.7 + 0.1;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

                // Closer stars are white/bright, further stars are dim gold
                if (star.z < 1) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
                } else {
                    ctx.fillStyle = `rgba(212, 168, 67, ${currentAlpha * 0.6})`;
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = 'rgba(212, 168, 67, 0.2)';
                }

                ctx.fill();
                ctx.shadowBlur = 0; // reset
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [smoothScrollY]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-80"
            aria-hidden="true"
        />
    );
}
