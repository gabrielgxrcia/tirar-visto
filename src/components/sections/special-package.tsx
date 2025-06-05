import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { tw, cn } from "@/lib/tailwind-utilities"

const packageData = [
  {
    title: "Passaporte",
    serviceType: "Atendimento",
    serviceDetail: "On-line",
    timeType: "Tempo",
    timeDetail: "45 dias",
    price: "R$ 890,00",
    image: "/packages/passport.png",
  },
  {
    title: "Passaporte + Visto",
    serviceType: "Atendimento",
    serviceDetail: "On-line + Presencial",
    timeType: "Tempo",
    timeDetail: "25 dias",
    price: "R$ 1.290,00",
    image: "/packages/passport-visa.png",
  },
  {
    title: "Consultoria Completa",
    serviceType: "Atendimento",
    serviceDetail: "Presencial Completo",
    timeType: "Tempo",
    timeDetail: "10 dias",
    price: "R$ 1.890,00",
    image: "/packages/consulting.png",
  },
]

export default function SpecialPackage() {
  return (
    <section className={cn(
      "w-full bg-white",
      tw.containers.paddingY,
      tw.containers.paddingX
    )}>
      <div className={cn(
        "max-w-7xl mx-auto",
        tw.flex.col,
        tw.flex.gap.xl
      )}>
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
          <div className={cn(tw.flex.col, tw.flex.gap.xs)}>
            {/* Badge */}
            <Badge className={cn(
              tw.badges.yellow,
              tw.responsive.body,
              "px-4 sm:px-5 py-2 sm:py-2.5",
              "font-medium w-fit"
            )}>
              Pacotes
            </Badge>

            {/* Title */}
            <h1 className={cn(
              tw.typography.h1,
              tw.responsive.h1
            )}>
              Confira nossos pacotes
            </h1>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "w-12 h-12 sm:w-[54px] sm:h-[54px]",
                "border-[1.5px] border-[#1B2543]",
                "rounded-full",
                "bg-transparent hover:bg-gray-50"
              )}
              aria-label="Pacote anterior"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B2543]" strokeWidth={2} />
            </Button>

            <Button
              size="icon"
              className={cn(
                tw.buttons.primary,
                "w-12 h-12 sm:w-[54px] sm:h-[54px]",
                "rounded-full"
              )}
              aria-label="Próximo pacote"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
            </Button>
          </div>
        </div>

        {/* Package Cards - Horizontal scroll on mobile */}
        <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
          <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-max sm:w-full">
            {packageData.map((pkg, index) => (
              <article
                key={index}
                className={cn(
                  "flex-shrink-0 w-[320px] sm:w-full lg:w-full max-w-[424px] mx-auto",
                  "border border-[#E5E5E5] rounded-[20px] sm:rounded-[24px]",
                  "p-4 flex flex-col gap-6 sm:gap-8"
                )}
              >
                {/* Package Image */}
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[300px] rounded-[12px] sm:rounded-[16px] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className={cn(tw.flex.col, tw.flex.gap.md)}>
                  {/* Toggle Options */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className={cn(
                      "border border-[#232323] rounded-full",
                      "px-4 sm:px-5 py-1.5 sm:py-2"
                    )}>
                      <span className={cn(
                        tw.typography.body,
                        tw.typography.primary,
                        "font-semibold whitespace-nowrap"
                      )}>
                        Basic
                      </span>
                    </div>

                    <div className={cn(
                      "border border-[#8D8D8D] rounded-full",
                      "px-4 sm:px-5 py-1.5 sm:py-2"
                    )}>
                      <span className={cn(
                        tw.typography.body,
                        tw.typography.secondary,
                        "font-semibold whitespace-nowrap"
                      )}>
                        Premium
                      </span>
                    </div>
                  </div>

                  {/* Title and details */}
                  <div className={cn(tw.flex.col, tw.flex.gap.sm)}>
                    <h2 className={cn(
                      "font-inter font-semibold text-[#232323]",
                      "text-xl sm:text-2xl lg:text-[28px]",
                      "leading-[130.81%]"
                    )}>
                      {pkg.title}
                    </h2>

                    {/* Service Details */}
                    <div className="flex justify-between items-start pb-5 border-b border-[#E5E5E5]">
                      <div className={cn(tw.flex.col, "gap-1 sm:gap-2")}>
                        <span className={cn(
                          tw.typography.body,
                          tw.typography.primary,
                          "font-medium"
                        )}>
                          {pkg.serviceType}
                        </span>
                        <span className={cn(
                          tw.typography.body,
                          tw.typography.secondary
                        )}>
                          {pkg.serviceDetail}
                        </span>
                      </div>

                      <div className={cn(tw.flex.col, "gap-1 sm:gap-2")}>
                        <span className={cn(
                          tw.typography.body,
                          tw.typography.primary,
                          "font-medium"
                        )}>
                          {pkg.timeType}
                        </span>
                        <span className={cn(
                          tw.typography.body,
                          tw.typography.secondary
                        )}>
                          {pkg.timeDetail}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className={tw.flex.between}>
                    <div className={cn(tw.flex.col, "gap-1")}>
                      <span className={cn(
                        tw.typography.body,
                        tw.typography.secondary
                      )}>
                        A partir de
                      </span>
                      <span className={cn(
                        "font-inter font-semibold text-[#232323]",
                        "text-2xl sm:text-[28px] lg:text-[32px]",
                        "leading-[130.81%]"
                      )}>
                        {pkg.price}
                      </span>
                    </div>

                    <Button className={cn(
                      tw.buttons.primary,
                      "rounded-full",
                      "px-4 sm:px-5 py-2 sm:py-2.5",
                      "h-[48px] sm:h-[54px]"
                    )}>
                      <span className={cn(
                        tw.typography.white,
                        "font-semibold"
                      )}>
                        Contratar
                      </span>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}