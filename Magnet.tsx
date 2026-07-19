import { useRef, useState } from 'react'
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const withinX = e.clientX > rect.left - padding && e.clientX < rect.right + padding
    const withinY = e.clientY > rect.top - padding && e.clientY < rect.bottom + padding

    if (withinX && withinY) {
      const dx = (e.clientX - centerX) / strength
      const dy = (e.clientY - centerY) / strength
      setTranslate({ x: dx, y: dy })
      setActive(true)
    } else {
      setTranslate({ x: 0, y: 0 })
      setActive(false)
    }
  }

  const handleMouseLeave = () => {
    setTranslate({ x: 0, y: 0 })
    setActive(false)
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}
