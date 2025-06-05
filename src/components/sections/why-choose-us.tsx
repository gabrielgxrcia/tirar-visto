import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Image from "next/image"
import { tw, cn } from "@/lib/tailwind-utilities"

export default function WhyChooseUs() {
  const steps = [
    {
      title: "Etapa Inicial",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      expanded: true,
      hasReadMore: false,
    },
    {
      title: "Processo de Entrevista",
      content: "",
      expanded: false,
      hasReadMore: true,
    },
    {
      title: "Entrega de Documentos",
      content: "",
      expanded: false,
      hasReadMore: true,
    },
  ]

  return (
    <section className={cn(
      tw.containers.main,
      tw.containers.paddingY,
      tw.containers.paddingX,
      "bg-white"
    )}>
      <div className={cn(
        tw.flex.col,
        tw.containers.content,
        tw.flex.gap.xl
      )}>
        {/* Header Section */}
        <div className={cn(tw.flex.col, tw.flex.gap.sm, "w-full")}>
          <Badge className={cn(
            tw.badges.yellow,
            "px-4 sm:px-5 py-2 sm:py-2.5",
            "font-medium text-sm sm:text-base",
            "w-fit",
            "flex items-center justify-center"
          )}>
            Veja como funciona
          </Badge>

          <div className={cn(
            "flex flex-col lg:flex-row lg:items-center lg:justify-between",
            "w-full gap-4 lg:gap-8"
          )}>
            <h2 className={cn(
              tw.typography.h1,
              tw.responsive.h1,
              "w-full lg:w-[420px]"
            )}>
              Sua tranquilidade não tem preço!
            </h2>
            
            <p className={cn(
              tw.typography.body,
              tw.typography.secondary,
              "w-full lg:w-[826px]"
            )}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className={cn(
          "flex flex-col lg:flex-row lg:items-center lg:justify-between",
          "w-full gap-8 lg:gap-10"
        )}>
          {/* Image */}
          <div className="w-full lg:w-[756px]">
            <Image
              className={cn(
                "w-full h-auto object-cover",
                tw.cards.base
              )}
              alt="Happy tourist sightseeing city with map"
              src="/images/whychooseus.png"
              width={756}
              height={444}
              quality={100}
              sizes="(max-width: 1024px) 100vw, 756px"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          <div className="w-full lg:w-[528px]">
            {/* Etapa Inicial - Always open */}
            <div className="border-b border-[#E5E5E5] px-3 py-4 sm:py-5 w-full">
              <h3 className={cn(
                tw.typography.h2,
                tw.responsive.h2,
                "w-full text-left"
              )}>
                {steps[0].title}
              </h3>
              <div className="pt-2 sm:pt-3">
                <p className={cn(
                  tw.typography.body,
                  tw.typography.secondary,
                  "w-full mb-2 sm:mb-3"
                )}>
                  {steps[0].content}
                </p>
              </div>
            </div>

            {/* Processo de Entrevista */}
            <div className="border-b border-[#E5E5E5] px-3 py-4 sm:py-5 w-full">
              <h3 className={cn(
                tw.typography.h2,
                tw.responsive.h2,
                "w-full text-left"
              )}>
                {steps[1].title}
              </h3>
              <div className="pt-2 sm:pt-3">
                <Button
                  variant="ghost"
                  className="flex flex-row items-center p-0 gap-2 h-6 hover:bg-transparent w-fit"
                >
                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#232323]" strokeWidth={1.5} />
                  <span className={cn(
                    tw.typography.body,
                    tw.typography.primary,
                    "font-medium"
                  )}>
                    Leia mais
                  </span>
                </Button>
              </div>
            </div>

            {/* Entrega de Documentos */}
            <div className="border-b border-[#E5E5E5] px-3 py-4 sm:py-5 w-full">
              <h3 className={cn(
                tw.typography.h2,
                tw.responsive.h2,
                "w-full text-left"
              )}>
                {steps[2].title}
              </h3>
              <div className="pt-2 sm:pt-3">
                <Button
                  variant="ghost"
                  className="flex flex-row items-center p-0 gap-2 h-6 hover:bg-transparent w-fit"
                >
                  <PlusIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#232323]" strokeWidth={1.5} />
                  <span className={cn(
                    tw.typography.body,
                    tw.typography.primary,
                    "font-medium"
                  )}>
                    Leia mais
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}