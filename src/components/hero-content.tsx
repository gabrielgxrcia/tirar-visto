import { VideoCard } from "./video-card"
import { tw, cn } from "@/lib/tailwind-utilities"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroContentProps {
  decorativeImageSrc: string
  videoCardImageSrc: string
}

export const HeroContent = ({ decorativeImageSrc, videoCardImageSrc }: HeroContentProps) => {
  const contentText = {
    paragraph: "Com uma equipe altamente treinada, nós temos todos os procedimentos para que seu processo seja o mais tranquilo e rápido.",
    complement: "Uma consultoria completa para você e sua família não ter nenhuma preocupação na sua viagem."
  }

  return (
    <main className={cn(
      "pl-4 sm:pl-8 md:pl-12 lg:pl-16",
      "mt-6 sm:mt-8 lg:mt-10",
      "w-full"
    )}>
      <div className="relative">
        {/* Header Section */}
        <div className="w-full">
          <h1 className={cn(
            tw.typography.h1,
            tw.responsive.h1,
            "tracking-tighter"
          )}>
            Tire seu Visto conosco e<br />
            não tenha nenhuma<br />
            surpresa negativa!
          </h1>
          <hr className={cn(
            "mt-6 sm:mt-8",
            "border-t border-neutral-200",
            "w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[589px]"
          )} />
        </div>

        {/* Content Section - Responsive */}
        <ContentSection 
          contentText={contentText}
          videoCardImageSrc={videoCardImageSrc}
        />
      </div>
    </main>
  )
}

// Separate component for content section to avoid repetition
interface ContentSectionProps {
  contentText: {
    paragraph: string
    complement: string
  }
  videoCardImageSrc: string
}

const ContentSection = ({ contentText, videoCardImageSrc }: ContentSectionProps) => {
  return (
    <>
      {/* Desktop 2xl */}
      <div className="hidden 2xl:block">
        <ContentBlock 
          contentText={contentText}
          marginTop="mt-15"
          maxWidth="max-w-[450px]"
          buttonMarginTop="mt-10"
        />
        <VideoCard 
          imageSrc={videoCardImageSrc} 
          title="Conheça a Bruna" 
          subtitle="Ver vídeo" 
          className="absolute z-[2] bottom-[-30px] right-4 w-[191px] h-[167px]"
        />
      </div>

      {/* Desktop xl */}
      <div className="hidden xl:block 2xl:hidden">
        <ContentBlock 
          contentText={contentText}
          marginTop="mt-8"
          maxWidth="max-w-[500px]"
          buttonMarginTop="mt-8"
        />
        <div className="mt-8 flex justify-start">
          <VideoCard 
            imageSrc={videoCardImageSrc} 
            title="Conheça a Bruna" 
            subtitle="Ver vídeo" 
          />
        </div>
      </div>

      {/* Mobile and Tablet */}
      <div className="block xl:hidden">
        <ContentBlock 
          contentText={contentText}
          marginTop="mt-6 sm:mt-8"
          maxWidth="max-w-full"
          buttonMarginTop="mt-6 sm:mt-8 lg:mt-10"
          isMobile
        />
        <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
          <VideoCard 
            imageSrc={videoCardImageSrc} 
            title="Conheça a Bruna" 
            subtitle="Ver vídeo" 
          />
        </div>
      </div>
    </>
  )
}

// Reusable content block component
interface ContentBlockProps {
  contentText: {
    paragraph: string
    complement: string
  }
  marginTop: string
  maxWidth: string
  buttonMarginTop: string
  isMobile?: boolean
}

const ContentBlock = ({ 
  contentText, 
  marginTop, 
  maxWidth, 
  buttonMarginTop,
  isMobile = false 
}: ContentBlockProps) => {
  return (
    <div className={cn(marginTop, maxWidth)}>
      <p className={cn(
        isMobile ? tw.typography.bodySmall : tw.typography.body,
        isMobile && "sm:text-base",
        tw.typography.secondary
      )}>
        {contentText.paragraph}
        <br className={isMobile ? "hidden sm:block" : ""} />
        {contentText.complement}
      </p>

      <div className={buttonMarginTop}>
        <Button
          className={cn(
            tw.buttons.primary,
            isMobile ? "h-[44px] sm:h-[48px] lg:h-[54px]" : "h-[54px]",
            isMobile ? "px-4 sm:px-5" : "px-5",
            "w-fit",
            tw.flex.center,
            "gap-2 sm:gap-3"
          )}
          aria-label="Saiba mais sobre nossos serviços"
        >
          <span className={cn(
            tw.typography.white,
            "font-semibold",
            isMobile && "text-sm sm:text-base"
          )}>
            Saiba mais
          </span>
          <ArrowRight 
            className={cn(
              "text-white",
              isMobile ? "w-4 h-4 sm:w-5 sm:h-5" : "w-6 h-6"
            )}
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  )
}