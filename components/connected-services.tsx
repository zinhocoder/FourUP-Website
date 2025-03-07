"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

const processSteps = [
  {
    image: "group-40.png",
    number: "1",
    title: "Captação",
    description: "A estratégia que o seu negócio precisa para atrair mais clientes.",
  },
  {
    image: "group-37.png",
    number: "2",
    title: "Conexão",
    description: "Criamos conexões relevantes entre sua marca e seu público-alvo.",
  },
  {
    image: "group-38.png",
    number: "3",
    title: "Capitalização",
    description: "Transformamos interesse em resultados reais para seu negócio.",
  },
  {
    image: "group-39.png",
    number: "4",
    title: "Retenção",
    description: "Mantemos seus clientes engajados e fiéis à sua marca.",
  },
]

export default function ConnectedServices() {
  const handleContactClick = () => {
    scrollToSection("contato")
  }

  return (
    <div className="text-white space-y-12 md:space-y-16 bg-[#1A1A1A] py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14 mb-8">
        <Image src="Group 117.png" alt="FourUp" width={150} height={50} className="object-contain" />
        <Image src="Ativo-1-1.png" alt="4" width={80} height={50} className="object-contain" />
        <Image src="4design-1.png" alt="Quatro Design" width={200} height={50} className="object-contain" />
      </div>

      <p className="text-center text-base md:text-lg max-w-3xl mx-auto px-4">
        Oferecemos estratégias de marketing, design e tecnologia, indispensáveis para todos os negócios que querem
        crescer digitalmente e terem um UP na receita,{" "}
        <span className="bg-fourup-orange text-white px-2 py-1 mt-2 rounded-full inline-block">
          especialmente o seu.
        </span>
      </p>

      <div className="mt-8 md:mt-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative inline-block px-4">
          <span className="relative z-10">Método UP4</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-fourup-orange opacity-100"></span>
        </h3>
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-[#2A2A2A] border-none">
              <CardContent className="flex flex-col items-center p-6">
                <div className="text-4xl font-bold text-fourup-orange mb-4">{step.number}</div>
                <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm text-center">{step.description}</p>
                <img src={`/${step.image}`} alt={step.title} className="w-16 h-16 mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Carousel className="w-full max-w-xs mx-auto md:hidden">
          <CarouselContent>
            {processSteps.map((step, index) => (
              <CarouselItem key={index}>
                <Card className="bg-[#2A2A2A] border-none">
                  <CardContent className="flex flex-col items-center p-4">
                    <div className="text-3xl font-bold text-fourup-orange mb-2">{step.number}</div>
                    <h4 className="text-lg font-medium mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-sm text-center">{step.description}</p>
                    <img src={`/${step.image}`} alt={step.title} className="w-12 h-12 mt-4" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 relative">
            <CarouselPrevious className="absolute left-0 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
            <CarouselNext className="absolute right-0 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
          </div>
        </Carousel>
      </div>

      <div className="mt-8 md:mt-16 px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-right relative inline-block float-right">
          <span className="relative z-10">Na Prática</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-fourup-orange opacity-100"></span>
        </h3>
        <p className="text-base md:text-lg text-right max-w-4xl ml-auto clear-both mb-8">
          Desenvolvemos estratégias personalizadas e gerenciamos mensalmente o marketing digital nos canais mais
          adequados para atingir os objetivos do seu negócio. Além disso, criamos projetos de identidade visual que
          fortalecem a comunicação e destacam o potencial da sua marca.
        </p>
      </div>

      {/* Botão centralizado e mais próximo ao fim da seção */}
      <div className="text-center mt-12">
        <Button
          onClick={handleContactClick}
          className="bg-fourup-orange hover:bg-fourup-orange/90 text-white px-6 md:px-8 py-2 md:py-3 text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Bora subir de nível?
        </Button>
      </div>
    </div>
  )
}

