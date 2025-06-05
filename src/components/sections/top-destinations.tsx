import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const TopDestination = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      image: "/cities/bali-indonesia.png",
      size: "medium",
      gridPosition: { top: "40px", left: "0px" }
    },
    {
      id: 2,
      name: "Nova York, Estados Unidos",
      image: "/cities/new-york-eua.png",
      size: "large",
      gridPosition: { top: "0px", left: "300px" }
    },
    {
      id: 3,
      name: "Santorini, Grecia",
      image: "/cities/santorini-grecia.png",
      size: "medium",
      gridPosition: { top: "40px", left: "600px" }
    },
    {
      id: 4,
      name: "Paris, França",
      image: "/cities/paris-franca.png",
      size: "medium",
      gridPosition: { top: "300px", left: "0px" }
    },
    {
      id: 5,
      name: "Cidade do Cabo, África do Sul",
      image: "/cities/cidade-do-cabo-africa-do-sul.png",
      size: "large",
      gridPosition: { top: "300px", left: "300px" }
    },
    {
      id: 6,
      name: "Mumbai, India",
      image: "/cities/mumbai-india.png",
      size: "medium",
      gridPosition: { top: "300px", left: "600px" }
    },
  ]

  return (
    <section className="relative w-full max-w-[1440px] mx-auto bg-white 
                        px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="w-full relative">
        <div className="hidden lg:block absolute w-full h-[423px] top-0 left-0 overflow-hidden pointer-events-none">
          {/* Retangulo da esquerda */}
          <div className="w-[476px] h-[423px] left-0 absolute top-0">
            <Image
              className="absolute w-[280px] h-[158px] top-[264px] left-0"
              alt=""
              src="/vectors/vector-52.png"
              width={280}
              height={158}
              quality={100}
              style={{ width: "280px", height: "158px" }}
            />
            <Image
              className="absolute w-[476px] h-[86px] top-0 left-0"
              alt=""
              src="/vectors/vector-55.png"
              width={476}
              height={86}
              quality={100}
              style={{ width: "476px", height: "86px" }}
            />
            <div className="left-0 absolute w-[167px] h-[181px] top-[84px] 
                            bg-gradient-to-r from-[rgba(217,217,217,0.05)] to-[rgba(217,217,217,0)]" />
          </div>
          
          {/* Retangulo da direita */}
          <div className="w-[476px] h-[423px] left-[964px] absolute top-0">
            <Image
              className="absolute w-[280px] h-[158px] top-[264px] left-[195px]"
              alt=""
              src="/vectors/vector-53.png"
              width={280}
              height={158}
              quality={100}
              style={{ width: "280px", height: "158px" }}
            />
            <Image
              className="absolute w-[476px] h-[86px] top-0 left-0"
              alt=""
              src="/vectors/vector-54.png"
              width={476}
              height={86}
              quality={100}
              style={{ width: "476px", height: "86px" }}
            />
            <div className="left-[308px] absolute w-[167px] h-[181px] top-[84px] 
                            bg-gradient-to-r from-[rgba(217,217,217,0)] to-[rgba(217,217,217,0.05)]" />
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col w-full max-w-[880px] mx-auto items-center 
                        gap-8 sm:gap-10 lg:gap-[60px] 
                        pt-8 sm:pt-12 lg:pt-[84px] pb-8 sm:pb-12 lg:pb-16">
          
          {/* Header section */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full">
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                {/* Badge */}
                <Badge className="bg-[#F6C010] hover:bg-[#F6C010] text-[#232323] 
                                  rounded-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.06)]
                                  px-4 sm:px-5 py-2 sm:py-2.5 
                                  font-medium text-sm sm:text-base 
                                  leading-[130.81%] tracking-[-0.08em]">
                  Top Destinos
                </Badge>

                {/* Titulo */}
                <h1 className="font-inter font-medium text-[#232323] text-center
                               text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] 
                               leading-[120%] sm:leading-[125%] lg:leading-[130.81%] 
                               tracking-[-0.08em] max-w-full">
                  Destinos mais procurados
                </h1>
              </div>

              {/* Descrição */}
              <p className="font-inter font-normal text-[#8D8D8D] text-center
                            text-sm sm:text-base 
                            leading-[140%] sm:leading-[130.81%] 
                            tracking-[-0.02em] 
                            max-w-full sm:max-w-[584px] px-4 sm:px-0">
                Confira os destinos mais procurados por nossos clientes nos últimos meses, 
                qual seria o seu novo destino?
              </p>
            </div>

            {/* CTA Botão */}
            <Button className="bg-[#1B2543] hover:bg-[#243052] rounded-[40px]
                               px-4 sm:px-5 py-2.5 
                               h-[44px] sm:h-[48px] lg:h-[54px]">
              <span className="font-inter font-semibold text-white
                               text-sm sm:text-base 
                               leading-[130.81%]">
                Conheça mais
              </span>
            </Button>
          </div>

          {/* Grid destinos */}
          <div className="w-full">
            {/* Desktop Grid  */}
            <div className="hidden lg:block relative w-[880px] h-[580px] mx-auto">
              {destinations.map((destination) => {
                const cardSize = destination.size === "large" 
                  ? "w-[280px] h-[280px]" 
                  : "w-[280px] h-[240px]"

                return (
                  <Card
                    key={destination.id}
                    className={`absolute ${cardSize}
                                rounded-[28px] overflow-hidden p-0 
                                bg-gradient-to-t from-black/30 to-black/10
                                cursor-pointer transform transition-all duration-300 
                                hover:scale-105 hover:shadow-2xl`}
                    style={{
                      top: destination.gridPosition.top,
                      left: destination.gridPosition.left,
                      backgroundImage: `url(${destination.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Destination label */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="inline-flex items-center justify-center 
                                      px-4 py-2.5 
                                      bg-white/15 rounded-[30px] 
                                      backdrop-blur-[10px]">
                        <span className="font-inter font-normal text-white text-center 
                                         text-base leading-[130.81%] tracking-[-0.08em]
                                         whitespace-nowrap">
                          {destination.name}
                        </span>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Tablet Grid - 2 colunas */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-5 max-w-[600px] mx-auto">
              {destinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="relative h-[200px] md:h-[220px]
                             rounded-[24px] overflow-hidden p-0 
                             bg-gradient-to-t from-black/30 to-black/10
                             cursor-pointer transform transition-all duration-300 
                             hover:scale-105"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center justify-center 
                                    px-3 py-2 
                                    bg-white/15 rounded-[25px] 
                                    backdrop-blur-[10px]">
                      <span className="font-inter font-normal text-white text-center 
                                       text-sm leading-[130.81%] tracking-[-0.08em]
                                       whitespace-nowrap">
                        {destination.name}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile Grid - 1 coluna */}
            <div className="sm:hidden grid grid-cols-1 gap-4 max-w-[320px] mx-auto">
              {destinations.map((destination) => (
                <Card
                  key={destination.id}
                  className="relative h-[180px]
                             rounded-[20px] overflow-hidden p-0 
                             bg-gradient-to-t from-black/30 to-black/10
                             cursor-pointer transform transition-all duration-300 
                             active:scale-95"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="inline-flex items-center justify-center 
                                    px-3 py-1.5 
                                    bg-white/15 rounded-[20px] 
                                    backdrop-blur-[10px]">
                      <span className="font-inter font-normal text-white text-center 
                                       text-xs leading-[130.81%] tracking-[-0.08em]
                                       whitespace-nowrap">
                        {destination.name}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopDestination