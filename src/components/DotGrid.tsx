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

        function draw() {
            if (needsRedraw && ctx && canvas) {
                needsRedraw = false
                const dpr = window.devicePixelRatio || 1
                // Clear the entire canvas (in device pixels)
                // Since we scaled the context, clearing (0,0, width, height) clears logical pixels
                // But width/height are set to physical pixels. 
                // Best approach: reset transform, clear, restore transform? 
                // Or just clear a large area.
                // Or simpler: unscaled clear.

                ctx.save()
                ctx.setTransform(1, 0, 0, 1, 0, 0)
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.restore()

                const spacing = 40
                // Use logical dimensions for loop
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
