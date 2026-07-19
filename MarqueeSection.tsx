import { useEffect, useRef, useState } from 'react'

const allImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const row1Base = allImages.slice(0, 11)
const row2Base = allImages.slice(11)

const row1 = [...row1Base, ...row1Base, ...row1Base]
const row2 = [...row2Base, ...row2Base, ...row2Base]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ willChange: 'transform', transform: `translateX(${offset - 200}px)` }}>
          {row1.map((src, i) => (
            <div key={`row1-${i}`} className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden">
              <img src={src} alt="Project preview" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-3" style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}>
          {row2.map((src, i) => (
            <div key={`row2-${i}`} className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden">
              <img src={src} alt="Project preview" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
