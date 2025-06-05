import { ArrowUpRight } from "lucide-react"
import { tw, cn } from "@/lib/tailwind-utilities"

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "X", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Youtube", href: "#" },
  ]

  const footerLinks = [
    {
      title: "Empresa",
      links: [
        { name: "Home", href: "#" },
        { name: "Quem somos", href: "#" },
        { name: "Serviços", href: "#" },
        { name: "Contato", href: "#" },
      ],
    },
    {
      title: "Novidades",
      links: [
        { name: "Passaporte", href: "#" },
        { name: "Visto", href: "#" },
        { name: "Entrevista", href: "#" },
        { name: "Polícia Federal", href: "#" },
      ],
    },
    {
      title: "Suporte",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Contato", href: "#" },
        { name: "Dúvidas Frequentes", href: "#" },
      ],
    },
  ]

  return (
    <div className={tw.flex.col}>
      {/* Footer Principal */}
      <footer
        className={cn(tw.flex.col, tw.containers.paddingX, tw.containers.paddingY, tw.flex.gap.lg, "w-full bg-white")}
      >
        {/* Seção Superior */}
        <div
          className={cn(
            "flex flex-col lg:flex-row lg:justify-between lg:items-center",
            "pb-8 sm:pb-10 gap-8 lg:gap-10 xl:gap-[372px]",
            tw.containers.content,
          )}
        >
          {/* Coluna Esquerda */}
          <div className={cn(tw.flex.col, tw.flex.gap.lg, "w-full lg:w-[456px]")}>
            {/* Container do texto */}
            <div className={cn(tw.flex.col, tw.flex.gap.sm, "w-full")}>
              {/* Título */}
              <h2 className={cn(tw.typography.h1, tw.responsive.h1)}>Está com alguma dúvida?</h2>

              {/* Texto descritivo */}
              <p className={cn(tw.typography.body, tw.typography.secondary, tw.responsive.body)}>
                Entre em contato através do nosso canal direto ao cliente através do botão abaixo
              </p>
            </div>

            {/* Botão Central de Atendimento */}
            <button className={cn(tw.buttons.primary, tw.buttons.lg, "w-auto sm:w-[225px]")}>
              <span className={cn(tw.typography.white, tw.responsive.body, "font-semibold")}>
                Central de Atendimento
              </span>
            </button>
          </div>

          {/* Coluna Direita "Receba novidades"*/}
          <div
            className={cn(
              tw.flex.between,
              "pb-3 gap-4 sm:gap-6 md:gap-8 lg:gap-[176px] w-full lg:w-auto lg:min-w-[500px] border-b border-[#232323]",
            )}
          >
            {/* Título */}
            <h3
              className={cn(
                tw.typography.h2,
                "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] tracking-[-0.06em] whitespace-nowrap",
              )}
            >
              Receba novidades
            </h3>

            {/* Ícone de seta */}
            <div className="flex-shrink-0">
              <ArrowUpRight
                className={cn("w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10", tw.typography.primary)}
                strokeWidth={2}
              />
            </div>
          </div>
        </div>

        {/* Seção Inferior */}
        <div
          className={cn(
            "flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-[257px]",
            tw.containers.content,
          )}
        >
          {/* Redes Sociais */}
          <div className={cn(tw.flex.col, tw.flex.gap.md, "w-full lg:w-[451px]")}>
            {/* Título */}
            <h4 className={cn(tw.typography.body, tw.typography.primary, "font-semibold")}>Siga em nossa redes:</h4>

            {/* Container dos botões de redes sociais */}
            <div
              className={cn(
                "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4",
                "gap-3 sm:gap-4 lg:gap-3 xl:gap-5",
                "w-full",
                "md:flex md:flex-wrap md:justify-start",
              )}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={cn(
                    tw.flex.center,
                    tw.buttons.outline,
                    tw.buttons.sm,
                    "sm:h-10 whitespace-nowrap",
                    "min-w-fit",
                  )}
                >
                  <span className={cn(tw.typography.primary, tw.responsive.body, "font-semibold")}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links do Footer */}
          <div className={cn("grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16", "w-full lg:w-auto")}>
            {footerLinks.map((section, index) => (
              <div key={index} className={cn(tw.flex.col, tw.flex.gap.md)}>
                <h4
                  className={cn(
                    tw.typography.body,
                    tw.typography.primary,
                    "font-medium tracking-[-0.32px] leading-[20.9px]",
                  )}
                >
                  {section.title}
                </h4>

                <div className={cn(tw.flex.col, tw.flex.gap.sm)}>
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={cn(
                        tw.typography.body,
                        tw.typography.secondary,
                        "tracking-[-0.32px] leading-[20.9px] hover:text-[#232323] transition-colors",
                      )}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Rodapé de Copyright */}
      <div
        className={cn(
          tw.flex.center,
          tw.containers.paddingX,
          "py-4 sm:py-5 w-full h-16 sm:h-20 bg-white border-t border-[#E5E3E3]",
        )}
      >
        {/* Copyright */}
        <p className={cn(tw.typography.body, tw.typography.primary, "text-xs sm:text-sm font-medium text-center")}>
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </p>
      </div>
    </div>
  )
}

export default Footer
