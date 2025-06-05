import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tw = {
  typography: {
    // Headings
    h1: "font-inter font-medium text-[#232323] leading-[130.81%] tracking-[-0.08em]",
    h2: "font-inter font-medium text-[#232323] leading-[130.81%] tracking-[-0.07em]",
    h3: "font-inter font-medium text-[#232323] leading-[130.81%] tracking-[-0.06em]",
    
    // Textos body
    body: "font-inter font-normal text-base leading-[130.81%] tracking-[-0.02em]",
    bodySmall: "font-inter font-normal text-sm leading-[140%] tracking-[-0.02em]",
    bodyLarge: "font-inter font-normal text-lg leading-[130.81%] tracking-[-0.02em]",
    
    // Cor de textos
    primary: "text-[#232323]",
    secondary: "text-[#8D8D8D]",
    white: "text-white",
  },

  // Botões
  buttons: {
    primary: "bg-[#1B2543] hover:bg-[#243052] text-white rounded-[40px] transition-colors",
    secondary: "bg-[#F6C010] hover:bg-[#F6C010]/90 text-[#232323] rounded-[40px] transition-colors",
    outline: "border border-[#232323] hover:bg-gray-50 rounded-[40px] transition-colors",
    
    // Tamanhos
    sm: "px-4 py-2 h-[40px] text-sm",
    md: "px-5 py-2.5 h-[48px] text-base",
    lg: "px-5 py-3 h-[54px] text-base",
  },

  // Container classes
  containers: {
    main: "w-full max-w-[1440px] mx-auto",
    content: "w-full max-w-[1320px] mx-auto",
    narrow: "w-full max-w-[880px] mx-auto",
    
    // Padding
    paddingX: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px]",
    paddingY: "py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24",
  },

  // Layouts flex
  flex: {
    center: "flex items-center justify-center",
    between: "flex items-center justify-between",
    col: "flex flex-col",
    colCenter: "flex flex-col items-center",
    
    // Gaps
    gap: {
      xs: "gap-2 sm:gap-3",
      sm: "gap-3 sm:gap-4",
      md: "gap-4 sm:gap-6",
      lg: "gap-6 sm:gap-8",
      xl: "gap-8 sm:gap-10 lg:gap-[60px]",
    }
  },

  // Card classes
  cards: {
    base: "rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden",
    shadow: "shadow-[0px_4px_20px_rgba(0,0,0,0.06)]",
    hover: "cursor-pointer transform transition-all duration-300 hover:scale-105",
  },

  // Badge classes
  badges: {
    yellow: "bg-[#F6C010] text-[#232323] hover:bg-[#F6C010] rounded-[20px] shadow-[0px_4px_20px_rgba(0,0,0,0.06)]",
    transparent: "bg-white/15 backdrop-blur-[10px] rounded-[30px]",
  },

  // Textos responsivos
  responsive: {
    h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]",
    h2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44px]",
    h3: "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]",
    body: "text-sm sm:text-base",
    small: "text-xs sm:text-sm",
  },

  // Utility 
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}