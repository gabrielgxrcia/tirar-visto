import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { tw, cn } from '@/lib/tailwind-utilities'

interface HeroImageProps {
  backgroundImageSrc: string
}

export const HeroImage = ({ backgroundImageSrc }: HeroImageProps) => {
  return (
    <section 
      className={cn(
        "relative overflow-hidden",
        "rounded-xl sm:rounded-2xl lg:rounded-3xl",
        "w-full",
        "h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
      )}
      aria-label="Imagem promocional com call-to-action"
    >

      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={backgroundImageSrc}
          alt="Família feliz em viagem"
          width={762}
          height={900}
          className="w-full h-full object-cover"
          priority
          quality={100}
          sizes="(max-width: 1536px) 100vw, 762px"
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center center'
          }}
        />
      </div>
      
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" 
        aria-hidden="true"
      />
      
      <Button
        className={cn(
          tw.buttons.secondary,
          "absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5",
          "w-auto px-4 sm:px-5",
          "h-[40px] sm:h-[44px]",
          "text-sm sm:text-base",
          "z-10"
        )}
        aria-label="Iniciar processo de solicitação de visto"
      >
        Tirar meu visto agora!
      </Button>
      
        <div className={cn(
        "absolute bottom-0 left-0 right-0",
        "p-6 sm:p-8 md:p-10 lg:p-12",
        "text-white z-10"
      )}>
        <div className="max-w-full">
          <h2 className={cn(
            "font-semibold leading-tight tracking-tight",
            "mb-3 sm:mb-4",
            "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          )}>
            Realize o seu sonho com<br />
            a ajuda da Tirar Visto!
          </h2>
          <p className={cn(
            "font-normal leading-relaxed tracking-tight",
            "text-sm sm:text-base md:text-lg lg:text-xl",
            "max-w-full sm:max-w-[90%] md:max-w-[80%]"
          )}>
            Com um serviço profissional, você não terá dor de cabeça para todo o processo do visto e entrevistas no consulado.
          </p>
        </div>
      </div>
    </section>
  )
}