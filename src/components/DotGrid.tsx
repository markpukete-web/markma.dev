import { useRef, useEffect } from 'react'

export function DotGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        let animationFrameId: number
        let mouseX = -1000
        let mouseY = -1000
        let needsRedraw = true

        function resize() {
            if (!canvas) return

            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()

            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr

            ctx?.scale(dpr, dpr)

            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`

            needsRedraw = true
        }

        function handleMouseMove(e: MouseEvent) {
            if (!canvas) return
            const rect = canvas.getBoundingClientRect()
            mouseX = e.clientX - rect.left
            mouseY = e.clientY - rect.top
            needsRedraw = true
        }

        /** Draw dots in their base state — no mouse proximity effect */
        function drawStatic() {
            if (!ctx || !canvas) return

            const dpr = window.devicePixelRatio || 1

            ctx.save()
            ctx.setTransform(1, 0, 0, 1, 0, 0)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.restore()

            const spacing = 40
            const width = canvas.width / dpr
            const height = canvas.height / dpr

            const rows = Math.ceil(height / spacing)
            const cols = Math.ceil(width / spacing)

            const colorValue = Math.floor(0.1 * 255)
            ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const x = j * spacing
                    const y = i * spacing

                    ctx.beginPath()
                    ctx.arc(x, y, 1.5, 0, Math.PI * 2)
                    ctx.fill()
                }
            }
        }

        function draw() {
            if (needsRedraw && ctx && canvas) {
                needsRedraw = false
                const dpr = window.devicePixelRatio || 1

                ctx.save()
                ctx.setTransform(1, 0, 0, 1, 0, 0)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.restore()

                const spacing = 40
                const width = canvas.width / dpr
                const height = canvas.height / dpr

                const rows = Math.ceil(height / spacing)
                const cols = Math.ceil(width / spacing)

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        const x = j * spacing
                        const y = i * spacing

                        const dx = x - mouseX
                        const dy = y - mouseY
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        // Base brightness
                        let brightness = 0.1 // #1a1a1a is ~10% grey

                        // Proximity brightness
                        if (distance < 200) {
                            brightness = 0.1 + (1 - distance / 200) * 0.2
                        }

                        const colorValue = Math.floor(brightness * 255)
                        ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`

                        ctx.beginPath()
                        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
                        ctx.fill()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener('resize', resize)
        resize()

        if (prefersReducedMotion) {
            // Draw once in base state — no animation loop, no mouse tracking
            drawStatic()
        } else {
            if (window.matchMedia('(hover: hover)').matches) {
                window.addEventListener('mousemove', handleMouseMove)
            }
            draw()
        }

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 opacity-50"
            style={{ pointerEvents: 'none' }}
        />
    )
}
