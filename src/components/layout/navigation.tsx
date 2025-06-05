"use client"

import Image from "next/image"
import { memo, useState } from "react"
import { Menu, X } from "lucide-react"
import { tw, cn } from "@/lib/tailwind-utilities"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  logoSrc: string
  activeItem?: string
}

const navItems = ["Home", "Quem somos", "Serviços", "Contato"] as const
type NavItem = typeof navItems[number]

const Navigation = memo<NavigationProps>(({ logoSrc, activeItem = "Home" }) => {
  const [open, setOpen] = useState(false)

  const getHref = (item: NavItem) => `#${item.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <header className="w-full" role="banner">
      <nav 
        className={cn(
          "flex justify-between items-center",
          "px-4 sm:px-6 md:px-8 lg:px-[60px]",
          "gap-4 sm:gap-8 lg:gap-[177px]",
          "w-full lg:w-[658px] h-[100px]",
          "lg:justify-between md:justify-center"
        )}
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a 
          href="/"
          className={cn(
            "flex relative flex-shrink-0",
            "w-[100px] h-[28px]",
            "sm:w-[120px] sm:h-[33px]",
            "md:w-[152px] md:h-[42px]"
          )}
          aria-label="Tirar Visto - Página inicial"
        >
          <Image
            src={logoSrc}
            alt="Logo Tirar Visto"
            fill
            sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 152px"
            priority
            className="object-contain object-left"
          />
        </a>

        {/* Responsivo desktop */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className={cn(
            "flex flex-row items-center",
            "gap-1 w-[380px] h-[44px]"
          )}>
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={getHref(item)}
                  className={cn(
                    "flex justify-center items-center",
                    "px-3 py-[10px] gap-[10px] h-[44px]",
                    "text-[#232323] hover:text-neutral-600",
                    "transition-colors duration-200",
                    "bg-transparent whitespace-nowrap",
                    "font-inter text-base leading-[130.81%]",
                    activeItem === item ? "font-bold" : "font-normal",
                    item === "Home" && "w-[70px]",
                    item === "Quem somos" && "w-[123px]",
                    item === "Serviços" && "w-[90px]",
                    item === "Contato" && "w-[85px]"
                  )}
                  aria-current={activeItem === item ? "page" : undefined}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Tablet */}
        <NavigationMenu className="hidden md:flex lg:hidden">
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={getHref(item)}
                  className={cn(
                    tw.flex.center,
                    "px-3 py-2",
                    "text-[#232323] hover:text-neutral-600",
                    "transition-colors duration-200",
                    "font-inter text-base",
                    activeItem === item ? "font-bold" : "font-normal"
                  )}
                  aria-current={activeItem === item ? "page" : undefined}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile */}
        <div className="md:hidden flex-shrink-0 relative z-10">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="p-1 w-10 h-10"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px]"
              aria-label="Menu de navegação móvel"
            >
              <SheetHeader className="flex flex-row items-center justify-between mb-8">
                <SheetTitle className="text-left text-[#232323] font-semibold">
                  Menu
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="p-1 w-8 h-8"
                  aria-label="Fechar menu"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </SheetHeader>
              <nav 
                className="flex flex-col gap-2"
                aria-label="Menu de navegação móvel"
              >
                {navItems.map((item) => {
                  const isActive = item === activeItem
                  
                  return (
                    <a
                      key={item}
                      href={getHref(item)}
                      className={cn(
                        "text-[#232323] hover:text-neutral-600",
                        "transition-colors duration-200",
                        "text-lg py-3 px-4",
                        "rounded-md hover:bg-gray-50",
                        "border-b border-gray-100 last:border-b-0",
                        isActive && "font-semibold bg-gray-50"
                      )}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item}
                    </a>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
})

Navigation.displayName = "Navigation"

export { Navigation }