"use client"

import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"

interface Blob {
  x: number
  y: number
  radius: number
  color: string
  noiseOffsetX: number
  noiseOffsetY: number
  noiseOffsetZ: number
  speed: number
  points: number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const noiseRef = useRef(createNoise3D())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const noise3D = noiseRef.current

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Blob definitions — saffron, turmeric, crimson palette
    const blobs: Blob[] = [
      {
        x: 0.3,
        y: 0.45,
        radius: 0.35,
        color: "rgba(244,161,0,0.18)",
        noiseOffsetX: 0,
        noiseOffsetY: 100,
        noiseOffsetZ: 200,
        speed: 0.00035,
        points: 8,
      },
      {
        x: 0.7,
        y: 0.55,
        radius: 0.3,
        color: "rgba(212,131,10,0.15)",
        noiseOffsetX: 300,
        noiseOffsetY: 400,
        noiseOffsetZ: 500,
        speed: 0.00028,
        points: 7,
      },
      {
        x: 0.55,
        y: 0.3,
        radius: 0.22,
        color: "rgba(139,26,26,0.22)",
        noiseOffsetX: 600,
        noiseOffsetY: 700,
        noiseOffsetZ: 800,
        speed: 0.00042,
        points: 9,
      },
      {
        x: 0.2,
        y: 0.7,
        radius: 0.25,
        color: "rgba(244,161,0,0.10)",
        noiseOffsetX: 900,
        noiseOffsetY: 1000,
        noiseOffsetZ: 1100,
        speed: 0.00025,
        points: 6,
      },
      {
        x: 0.8,
        y: 0.25,
        radius: 0.2,
        color: "rgba(139,26,26,0.14)",
        noiseOffsetX: 1200,
        noiseOffsetY: 1300,
        noiseOffsetZ: 1400,
        speed: 0.00038,
        points: 8,
      },
    ]

    let t = 0

    function drawBlob(ctx: CanvasRenderingContext2D, blob: Blob, t: number) {
      const w = canvas!.width
      const h = canvas!.height
      const cx = blob.x * w
      const cy = blob.y * h
      const r = blob.radius * Math.min(w, h)
      const points = blob.points
      const step = (Math.PI * 2) / points

      ctx.beginPath()

      for (let i = 0; i <= points; i++) {
        const angle = i * step
        const noise = noise3D(
          blob.noiseOffsetX + Math.cos(angle) * 0.8,
          blob.noiseOffsetY + Math.sin(angle) * 0.8,
          t * blob.speed * 1000
        )
        const noiseMag = 0.3
        const currentR = r * (1 + noise * noiseMag)
        const x = cx + Math.cos(angle) * currentR
        const y = cy + Math.sin(angle) * currentR

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          // Smooth cubic bezier between points
          const prevAngle = (i - 1) * step
          const prevNoise = noise3D(
            blob.noiseOffsetX + Math.cos(prevAngle) * 0.8,
            blob.noiseOffsetY + Math.sin(prevAngle) * 0.8,
            t * blob.speed * 1000
          )
          const prevR = r * (1 + prevNoise * noiseMag)
          const prevX = cx + Math.cos(prevAngle) * prevR
          const prevY = cy + Math.sin(prevAngle) * prevR
          const cpX = (prevX + x) / 2
          const cpY = (prevY + y) / 2
          ctx.quadraticCurveTo(prevX, prevY, cpX, cpY)
        }
      }

      ctx.closePath()

      // Radial gradient fill
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.3)
      grad.addColorStop(0, blob.color.replace(")", ", 1.5)").replace("rgba", "rgba").replace(", 1.5)", ")"))
      grad.addColorStop(0.6, blob.color)
      grad.addColorStop(1, "rgba(0,0,0,0)")

      ctx.fillStyle = grad
      ctx.filter = "blur(40px)"
      ctx.fill()
      ctx.filter = "none"
    }

    function render() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Very dark warm background
      ctx.fillStyle = "#0D0A07"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Subtle vignette
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.1,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.9
      )
      vignette.addColorStop(0, "rgba(0,0,0,0)")
      vignette.addColorStop(1, "rgba(0,0,0,0.6)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw blobs
      blobs.forEach((blob) => drawBlob(ctx, blob, t))

      // Spice particle dots
      ctx.save()
      for (let i = 0; i < 60; i++) {
        const nx = noise3D(i * 0.3, 0, t * 0.0002 + i * 0.1)
        const ny = noise3D(0, i * 0.3, t * 0.0002 + i * 0.1 + 50)
        const px = (nx * 0.5 + 0.5) * canvas.width
        const py = (ny * 0.5 + 0.5) * canvas.height
        const alpha = (noise3D(i * 0.5, t * 0.0003, 200) * 0.5 + 0.5) * 0.3
        const size = (noise3D(i * 0.7, 100, t * 0.0002) * 0.5 + 0.5) * 2 + 0.5
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(244,161,0,${alpha})`
        ctx.fill()
      }
      ctx.restore()

      t++
      animRef.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  )
}
