import { HeroContent } from "../hero-content"
import { HeroImage } from "../hero-image"
import { Navigation } from "../layout/navigation"
import { Stats } from "./stats"
import { cn } from "@/lib/tailwind-utilities"

interface HeroProps {
  logoSrc?: string
  decorativeImageSrc?: string
  videoCardImageSrc?: string
  backgroundImageSrc?: string
}

export const Hero = ({
  logoSrc = "/images/logo-tirarvisto.png",
  decorativeImageSrc = "/images/hero-bg.png",
  videoCardImageSrc = "/images/bruna.png",
  backgroundImageSrc = "/images/hero-bg.png",
}: HeroProps) => {
  return (
    <section
      className="min-h-screen overflow-hidden bg-white p-4 sm:p-5 md:p-6 lg:p-7"
      aria-label="Seção principal do site"
    >
      <div className={cn(
        "flex flex-col",
        "gap-6 lg:gap-7",
        "2xl:flex-row 2xl:gap-8"
      )}>
        {/* Coluna de conteúdo */}
        <div className="w-full 2xl:flex-[1.8]">
          <div className="w-full relative">
            <Navigation logoSrc={logoSrc} />
            <HeroContent 
              decorativeImageSrc={decorativeImageSrc} 
              videoCardImageSrc={videoCardImageSrc} 
            />

            {/* Stats */}
            <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20">
              <Stats />
            </div>
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className={cn(
          "w-full mt-6",
          "2xl:w-[762px] 2xl:flex-shrink-0 2xl:mt-0"
        )}>
          <HeroImage backgroundImageSrc={backgroundImageSrc} />
        </div>
      </div>
    </section>
  )
}