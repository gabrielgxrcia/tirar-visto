import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tirar Visto - Consultoria Completa para Visto e Passaporte',
  description: 'Tire seu visto conosco com segurança e tranquilidade. Consultoria completa para passaporte e visto.',
  keywords: 'visto, passaporte, consultoria, viagem internacional, documentos',
  openGraph: {
    title: 'Tirar Visto - Consultoria Completa',
    description: 'Tire seu visto conosco com segurança e tranquilidade.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} overscroll-none antialiased`}>
        <div className="transform-gpu will-change-scroll snap-y snap-mandatory min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}