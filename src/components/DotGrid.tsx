import { useRef, useEffect } from 'react'

export function DotGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let mouseX = -1000
        let mouseY = -1000
        let needsRedraw = true

        function resize() {
            if (!canvas) return
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            needsRedraw = true
        }

        function handleMouseMove(e: MouseEvent) {
            mouseX = e.clientX
            mouseY = e.clientY
            needsRedraw = true
        }

        function draw() {
            if (needsRedraw && ctx && canvas) {
                needsRedraw = false
                ctx.clearRect(0, 0, canvas.width, canvas.height)

                const spacing = 40
                const rows = Math.ceil(canvas.height / spacing)
                const cols = Math.ceil(canvas.width / spacing)

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        const x = j * spacing
                        const y = i * spacing

                        const dx = x - mouseX
                        const dy = y - mouseY
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        // Base brightness
                        let brightness = 0.1 // #1a1a1a is ~10% gray

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
        if (window.matchMedia('(hover: hover)').matches) {
            window.addEventListener('mousemove', handleMouseMove)
        }

        resize()
        draw()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
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
