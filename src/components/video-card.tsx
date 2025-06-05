"use client"

import type React from "react"

interface VideoCardProps {
  imageSrc: string
  title: string
  subtitle: string
  className?: string
}

export const VideoCard: React.FC<VideoCardProps> = ({ imageSrc, title, subtitle, className = "" }) => {
  const baseClasses = "bg-white rounded-[20px] flex flex-col items-start p-0 gap-4"

  return (
    <div className={`${baseClasses} ${className}`}>
      {/* Imagem */}
      <img
        src={imageSrc || "/placeholder.svg?height=110&width=191"}
        alt={title}
        className="w-full sm:w-[191px] h-[110px] rounded-[16px] object-cover flex-none"
      />

      {/* Container do conteúdo */}
      <div className="flex flex-row justify-between items-end w-full px-0 pb-0">
        {/* Textos */}
        <div className="flex flex-col items-start gap-1 flex-grow">
          <h3 className="font-inter font-semibold text-sm sm:text-base leading-[130.81%] text-[#232323]">
            {title}
          </h3>
          <p className="font-inter font-normal text-xs leading-[130.81%] text-[#8D8D8D]">
            {subtitle}
          </p>
        </div>

        {/* Botão */}
        <button className="flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 bg-[#1B2543] border border-black rounded-full flex-shrink-0 ml-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  )
}