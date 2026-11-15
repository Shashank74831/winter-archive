import { useEffect, useRef } from 'react'

export default function Snowfall() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let w, h, flakes = []
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 120; i++) flakes.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, r: Math.random() * 3 + 1, s: Math.random() * 1 + 0.5 })
    let id
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = 'white'
      flakes.forEach(f => { ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill(); f.y += f.s; f.x += Math.sin(f.y / 50) * 0.5; if (f.y > h) { f.y = 0; f.x = Math.random() * w } })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 50 }} />
}