# Tirar Visto - Landing Page

![Tirar Visto](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-38B2AC?style=for-the-badge&logo=react)

## 📋 Sobre o Projeto

Landing page desenvolvida como teste técnico para a empresa **NoWeb**. O projeto "Tirar Visto" é uma aplicação web moderna para uma consultoria especializada em processos de visto e passaporte, oferecendo uma experiência completa e intuitiva aos usuários.

### 🎯 Objetivos Alcançados

- ✅ **Código limpo e bem organizado** - Arquitetura modular com componentes reutilizáveis
- ✅ **Fidelidade ao layout do Figma** - Implementação pixel-perfect do design fornecido
- ✅ **Responsividade completa** - Funciona perfeitamente em todos os dispositivos

## 🚀 Demonstração

- **[Demo ao vivo](https://tirar-visto-pccguvclx-gabrielgxrcias-projects.vercel.app/)** 
- **[Repositório GitHub](https://github.com/gabrielgxrcia/tirar-visto)** 

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety 
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Estilização utility-first

### Bibliotecas
- **[Framer Motion](https://www.framer.com/motion/)** - Animações 
- **[Lucide React](https://lucide.dev/)** - Ícones 
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Gerenciamento de classes
- **[Radix UI](https://ui.shadcn.com/)** - Componentes shadcn/ui

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── ui/                # Componentes base (shadcn/ui)
│   ├── layout/            # Componentes de layout
│   │   ├── navigation.tsx # Navegação responsiva
│   │   └── footer.tsx     # Footer
│   ├── sections/          # Seções da página
│   │   ├── hero.tsx       # Hero section
│   │   ├── stats.tsx      # Estatísticas animadas
│   │   ├── top-destinations.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── trust-section.tsx
│   │   └── special-package.tsx
│   ├── shared/            # Componentes compartilhados
│   │   └── animated-counter.tsx
│   ├── hero-content.tsx   # Conteúdo do hero
│   ├── hero-image.tsx     # Imagem do hero
│   └── video-card.tsx     # Card de vídeo
├── lib/
│   ├── tailwind-utilities.ts # Classes reutilizáveis
│   ├── constants.ts       # Constantes do projeto
│   └── utils.ts           # Funções utilitárias
└── types/
    └── index.ts           # TypeScript interfaces
```

## ✨ Funcionalidades

### 🎨 Design System
- Sistema de cores consistente
- Tipografia padronizada (Inter)
- Componentes reutilizáveis
- Utilities centralizadas para manutenção facilitada

### 📱 Responsividade
- Mobile-first approach
- Breakpoints otimizados (sm, md, lg, xl, 2xl)
- Menu hambúrguer para dispositivos móveis
- Grid system adaptativo

### ⚡ Performance
- Otimização de imagens com Next.js Image
- Lazy loading de componentes
- Code splitting automático
- Animações com Framer Motion

### ♿ Acessibilidade
- Navegação por teclado
- ARIA labels apropriados
- Contraste de cores WCAG AA
- Semântica HTML5 correta

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabrielgxrcia/tirar-visto.git

# Entre no diretório
cd tirar-visto

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Scripts Disponíveis

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de produção
npm run start     # Executar build
npm run lint      # Verificar código
```

## 🎯 Diferenciais Implementados

### 1. **Arquitetura Modular**
- Componentes pequenos e focados
- Separação clara de responsabilidades
- Fácil manutenção e escalabilidade

### 2. **Tailwind Utilities Customizadas**
```typescript
// Exemplo de utilities centralizadas
export const tw = {
  typography: {
    h1: "font-inter font-medium text-[#232323] leading-[130.81%]",
    body: "font-inter font-normal text-base leading-[130.81%]"
  },
  buttons: {
    primary: "bg-[#1B2543] hover:bg-[#243052] text-white rounded-[40px]",
    secondary: "bg-[#F6C010] hover:bg-[#F6C010]/90 text-[#232323]"
  }
}
```

### 3. **Animações Suaves**
- Contadores animados nas estatísticas
- Hover effects nos cards
- Transições entre estados

### 4. **Grid de Destinos Complexo**
- Layout assimétrico fiel ao Figma
- Cards de tamanhos diferentes (280x240 e 280x280)
- Totalmente responsivo com fallback para mobile

## 🔍 Pontos de Destaque

1. **Pixel Perfect** - Implementação exata do design do Figma
2. **Clean Code** - Código limpo, comentado e bem estruturado
3. **Type Safety** - TypeScript em todo o projeto
5. **SEO Ready** - Meta tags e estrutura otimizada

## 📝 Notas de Desenvolvimento

- Utilizei a abordagem mobile-first para garantir melhor experiência em dispositivos móveis
- O grid de destinos mantém posicionamento absoluto no desktop conforme design, mas usa CSS Grid em mobile
- Implementei um sistema de utilities para facilitar manutenção futura
- Todos os componentes são totalmente tipados com TypeScript

## 🤝 Considerações Finais

Este projeto foi desenvolvido com foco em qualidade, manutenibilidade e fidelidade ao design. Cada decisão técnica foi tomada pensando em performance, acessibilidade e experiência do usuário.

Agradeço a oportunidade de demonstrar minhas habilidades técnicas e estou à disposição para discutir as decisões tomadas durante o desenvolvimento.

---

**Desenvolvido por:** [Gabriel Garcia]  
**Data:** [05/06/2025]  
**Contato:** [gabrielgrazeffi123@gmail.com]