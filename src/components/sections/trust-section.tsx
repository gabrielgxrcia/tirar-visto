import { Clock, PhoneCall } from "lucide-react"
import { tw, cn } from "@/lib/tailwind-utilities"

export const TrustSection = () => {
  return (
    <section className={cn("relative w-full h-auto bg-[#f6f6f6]", tw.containers.paddingY)}>
      <div className={cn("container mx-auto", tw.containers.paddingX)}>
        <div className={cn("relative w-full max-w-[1324px] mx-auto")}>
          <div className="">
            <h2
              className={cn(
                tw.typography.h1,
                tw.responsive.h1,
                "text-[#222223] max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[854px]",
              )}
            >
              CONSULTORIA COMPLETA PARA TIRAR SEU VISTO
            </h2>

            <h2
              className={cn(
                tw.typography.h1,
                tw.responsive.h1,
                "text-[#222223] italic text-left sm:text-right mt-2 sm:mt-3 md:mt-4",
              )}
            >
              VOCÊ ESTÁ EM BOAS MÃOS!
            </h2>
          </div>

          <div
            className={cn(
              "hidden sm:inline-flex items-center justify-center",
              "p-1.5 sm:p-2 md:p-2.5 absolute",
              "top-[80px] sm:top-[120px] md:top-[140px] lg:top-[160px] xl:top-[191px]",
              "left-[20px] sm:left-[100px] md:left-[200px] lg:left-[250px] xl:left-[271px]",
              "bg-white rounded-[8px] sm:rounded-[10px] rotate-[-9.85deg]",
              "shadow-[0px_4px_40px_#0000001a]",
              "w-[35px] sm:w-[40px] md:w-[45px] lg:w-[47.78px]",
              "h-[35px] sm:h-[40px] md:h-[45px] lg:h-[47.78px]",
            )}
          >
            <Clock
              className={cn(
                "w-[20px] sm:w-[22px] md:w-[26px] lg:w-[30px]",
                "h-[20px] sm:h-[22px] md:h-[26px] lg:h-[30px]",
                "rotate-[9.85deg]",
                tw.typography.primary,
              )}
              strokeWidth={1.5}
            />
          </div>

          <div
            className={cn(
              "hidden sm:inline-flex items-center justify-center",
              "p-1.5 sm:p-2 md:p-2.5 absolute",
              "top-[5px] sm:top-[5px]",
              "md:top-[-50px]",
              "lg:top-[-60px]",
              "xl:top-[-10px]",

              "right-[20px] sm:right-[100px]",
              "md:right-[10px]",
              "lg:right-[40px]",
              "xl:right-[280px]",

              "bg-white rounded-[8px] sm:rounded-[10px] rotate-[12.39deg]",
              "shadow-[0px_4px_40px_#0000001a]",
              "w-[35px] sm:w-[40px] md:w-[45px] lg:w-[47.78px]",
              "h-[35px] sm:h-[40px] md:h-[45px] lg:h-[47.78px]",
            )}
          >
            <PhoneCall
              className={cn(
                "w-[18px] sm:w-[20px] md:w-[22px] lg:w-[25px]",
                "h-[18px] sm:h-[20px] md:h-[22px] lg:h-[25px]",
                "rotate-[-12.39deg]",
                tw.typography.primary,
              )}
              strokeWidth={1.5}
            />
          </div>

          <div className={cn(tw.flex.center, "sm:hidden mt-6", tw.flex.gap.lg)}>
            <div
              className={cn(
                tw.flex.center,
                "p-2 bg-white rounded-[8px] shadow-[0px_4px_40px_#0000001a] w-[40px] h-[40px]",
              )}
            >
              <Clock className={cn("w-[24px] h-[24px]", tw.typography.primary)} strokeWidth={1.5} />
            </div>
            <div
              className={cn(
                tw.flex.center,
                "p-2 bg-white rounded-[8px] shadow-[0px_4px_40px_#0000001a] w-[40px] h-[40px]",
              )}
            >
              <PhoneCall className={cn("w-[22px] h-[22px]", tw.typography.primary)} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
