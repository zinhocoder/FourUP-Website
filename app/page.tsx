"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UpLogo, FourupLogo } from "@/components/logo"
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from "@/components/service-icons"
import { TeamMember } from "@/components/team-member"
import { TrendingUp, TrendingDown } from "lucide-react"
import ConnectedServices from "@/components/connected-services"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ClientSection } from "@/components/footer"
import { GrowthChart, RocketMan } from "@/components/growth-chart"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { scrollToSection } from "@/lib/utils"

const teamMembers = [
  {
    image: "joao1.svg",
    name: "JOÃO LUIS",
    role: "Diretor",
  },
  {
    image: "Ever 3.svg",
    name: "EVERTON GARCIA",
    role: "Marketing de performance",
  },
  {
    image: "amanda 3.svg",
    name: "AMANDA CARVALHO",
    role: "Sucesso do cliente",
  },
  {
    image: "pedro 2.svg",
    name: "PEDRO FONTAN",
    role: "SDR",
  },
  {
    image: "Mafe 1.svg",
    name: "MARIA FERNANDA",
    role: "Designer",
  },
  {
    image: "Pedro 3.svg",
    name: "PEDRO LIMA",
    role: "Copywriter",
  },
  {
    image: "Estanis 1.svg",
    name: "ESTANISLAW LAGOAS",
    role: "Copywriter",
  },
]

const services = [
  {
    icon: <Icon1 />,
    title: "Marketing de performance",
    description:
      "Estratégias de marketing digital focadas em resultados mensuráveis. Identificamos e otimizamos os canais mais eficientes para promover a presença da sua marca em plataformas diversas.",
  },
  {
    icon: <Icon2 />,
    title: "Site Dev",
    description:
      "Desenvolvimento de sites modernos, responsivos e otimizados para conversão. Projetos personalizados e tecnicamente estruturados para uma experiência do usuário com foco na excelência do resultado.",
  },
  {
    icon: <Icon3 />,
    title: "Copywriting",
    description:
      "Criação de conteúdo persuasivo que conecta sua marca com seu público-alvo através de textos que geram resultados e negócios.",
  },
  {
    icon: <Icon4 />,
    title: "Identidade Visual",
    description:
      "Criação ou revisão da identidade visual da marca para consolidar a imagem e o posicionamento da empresa através de um manual completo e coerência conceitual.",
  },
  {
    icon: <Icon5 />,
    title: "Produção de Vídeo",
    description:
      "Oferecemos um serviço completo de produção audiovisual, dedicado a criar conteúdos de vídeo que se conectam com o público da sua marca com o público de maneira envolvente e impactante.",
  },
  {
    icon: <Icon6 />,
    title: "Contrate nossos serviços",
    description: "Encantado com todos os serviços? Entre em contato para saber mais!",
    onClick: () => scrollToSection("contato"),
  },
]

export default function Home() {
  const [isRocketFlying, setIsRocketFlying] = useState(false)

  const handleContactClick = () => {
    scrollToSection("contato")
  }

  return (
    <main className="min-h-screen bg-fourup-light" id="home">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white sticky top-0 z-50 shadow-lg">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <UpLogo className="h-11 w-auto" />
            <MainNav />
          </div>
        </div>
      </header>

      {/* Seção Hero */}
      <section className="bg-[#1A1A1A] text-white py-8 md:py-0 min-h-[90vh] flex items-center">
        <div className="container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl font-light">Agência de consultoria em Marketing e Design digital</p>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Se sua <span className="text-fourup-orange">empresa</span> não está no{" "}
                  <span className="text-fourup-orange">digital,</span> ela não existe.
                </h1>
                <h2 className="text-xl md:text-2xl font-bold">
                  <span className="text-fourup-orange">A metodologia 4Up</span> posiciona sua empresa no digital,
                  aumentando seu faturamento, fortalecendo sua marca e expandindo sua base de clientes; com estratégias
                  que vão na <span className="text-fourup-orange">contramão do amadorismo!</span>
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl">
                  <span className="font-bold">Mais resultados</span>,{" "}
                  <span className="font-light">menos complicações.</span>
                </p>
                <p className="text-xl md:text-2xl font-bold">Estratégias que impulsionam seu sucesso.</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2 bg-fourup-orange/10 rounded-full px-4 py-2">
                  <TrendingUp className="text-fourup-orange" />
                  <span className="text-fourup-orange font-semibold">FourUp</span>
                </div>
                <div className="flex items-center space-x-2 bg-red-500/10 rounded-full px-4 py-2">
                  <TrendingDown className="text-red-500" />
                  <span className="text-red-500 font-semibold">Marketing amador</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full space-y-8 md:space-y-16">
              <FourupLogo className="h-16 md:h-24 w-auto" />
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                  <RocketMan isFlying={isRocketFlying} />
                </div>
                <GrowthChart isFlying={isRocketFlying} />
              </div>
              <Button
                className="bg-fourup-orange hover:bg-fourup-orange/90 text-white px-6 md:px-8 py-2 md:py-3 text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setIsRocketFlying(true)}
                onMouseLeave={() => setIsRocketFlying(false)}
                onClick={handleContactClick}
              >
                Bora subir de nível?
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços conectados seção */}
      <section className="py-12 md:py-0 bg-[#1A1A1A]" id="up4">
        <div className="container px-4 md:px-0">
          <ConnectedServices />
        </div>
      </section>

      {/* Nossos Serviços Seção */}
      <section className="py-12 md:py-20 bg-[#E5E5E5]" id="servicos">
        <div className="container px-4 md:px-0">
          <h2 className="text-center mb-8 md:mb-16 text-2xl md:text-3xl font-bold">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-fourup-dark p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl group border-b-4 border-fourup-orange hover:border-white cursor-pointer"
                onClick={service.onClick}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:text-fourup-orange transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-fourup-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre seção */}
      <AboutSection id="sobre" />

      {/* Equipe seção */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#E5E5E5] to-[#F5F5F5]" id="equipe">
        <div className="container px-4 md:px-0">
          <h2 className="text-center mb-12 md:mb-20 text-3xl md:text-4xl font-bold text-fourup-dark">Nossa Equipe</h2>
          <Carousel className="w-full max-w-xs mx-auto md:hidden">
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index}>
                  <TeamMember {...member} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 relative">
              <CarouselPrevious className="absolute -left-12 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
              <CarouselNext className="absolute -right-12 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
            </div>
          </Carousel>
          <div className="hidden md:grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {teamMembers.slice(4).map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contato seção */}
      <ContactSection id="contato" />

      {/* Clientes seção */}
      <ClientSection id="cases" />

      {/* Footer */}
      <Footer />
    </main>
  )
}

