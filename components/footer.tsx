import { FourupLogo } from "@/components/logo"
import { UpLogo } from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Linkedin } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const clients = [
  {
    name: "Camada 4",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camada-4-1@2x-qTkiYZ8nPeFeubjtvbGX2Dnr9f30oa.png",
  },
  {
    name: "Power Kitchen",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camada-3-1@2x-XUw8UnTPh1ExXIEjahFKDGm7QPp9vj.png",
  },
  {
    name: "Startup Academy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camada-2-1@2x-MYqWUL9TtdiuDhd8r4uoYUcT6kUIAM.png",
  },
  {
    name: "Liberta XP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camada-1-11@2x-FK0q2PmYO7ssYVhF6cHrxxLzJlvFzU.png",
  },
  {
    name: "Aware Investment",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aware-1@2x-aaFtcmTHmarqMM9n7w1K2u5YcgDXRm.png",
  },
  {
    name: "Group 29",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-29-RPTIlkfi9fOSl5z3lOuFPsCo39sXjC.svg",
  },
]

export function ClientSection({ id }: { id: string }) {
  return (
    <section className="bg-[#E5E5E5] py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-x2 font-medium mb-8 text-center text-fourup-dark">Alguns de nossos clientes</h3>
        <Carousel className="w-full max-w-xs mx-auto md:hidden">
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-[80px] relative grayscale opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 relative">
            <CarouselPrevious className="absolute left-0 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
            <CarouselNext className="absolute right-0 bg-fourup-orange text-white hover:bg-fourup-orange/80" />
          </div>
        </Carousel>
        <div className="hidden md:block overflow-x-auto scrollbar-hide">
          <div className="inline-flex gap-16 min-w-max px-4 pb-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="w-[200px] h-[80px] relative grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-fourup-dark text-white py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="hidden md:block">
              <FourupLogo className="h-8 w-20 mb-4" />
            </div>
            <p className="text-gray-300 text-sm mb-2 font-light tracking-wide">
              R. José Roberto Macedo Soares, 15 Gávea
            </p>
            <p className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">21 99899-0444</p>
            <p className="text-white text-sm font-medium tracking-wide">contato@up.com.br</p>
          </div>

          {/* Coluna da direita */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-2 md:gap-4 text-3xl md:text-5xl mb-6 md:mb-10">
              <span className="font-extralight">Dê um</span>
              <UpLogo className="h-8 md:h-12 w-auto" />
              <span className="font-extralight">no seu</span>
              <span className="bg-fourup-orange px-2 md:px-4 py-1 md:py-2 font-bold tracking-wide transform -skew-x-6">
                negócio
              </span>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 mt-4">
              <p className="text-gray-400 mb-2 text-xs uppercase tracking-widest font-semibold">Conecte-se conosco</p>
              <div className="flex gap-3">
                <Link href="#" className="text-gray-300 hover:text-fourup-orange transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-fourup-orange transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-fourup-orange transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs font-light tracking-wider">Dev Roberto Gonçalves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

