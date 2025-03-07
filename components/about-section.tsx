import { FourupLogo, WhatsappLogo } from "@/components/logo"
import { Check } from "lucide-react"

export function AboutSection({ id }: { id: string }) {
  return (
    <section className="bg-[#1C1C1C] py-24" id={id}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Quem Somos Section */}
          <div id="quem-somos">
            <h2 className="text-4xl font-bold text-white">Quem somos?</h2>
            <div className="mt-8 space-y-6 text-gray-300 text-lg">
              <p>
                A UP é uma assessoria de marketing focada em construir e otimizar o processo de vendas através da
                internet conectando pessoas que geram resultados com empresas que buscam vender mais.
              </p>
              <p>
                A principal característica do nosso serviço é uma maneira de atuar diferente das velhas práticas de
                mercado. O Método UP4 está fundamentado em 4 pilares essenciais para as vendas de qualquer produto ou
                serviço: Aquisição, Engajamento, Monetização e Retenção.
              </p>
              <p>
                Existimos para vender o seu produto, vender mais vezes, vender para mais pessoas e vender pelo maior
                valor.
              </p>
            </div>
          </div>

          {/* Por que contratar Seção */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Título e Logo */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
                Porque contratar
                <br />
                os serviços
                <br />
                da fourUP?
              </h2>
              <div className="mt-8 md:mt-20 flex flex-col items-center relative">
                <div className="bg-fourup-dark p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="text-fourup-orange text-2xl font-bold mb-4 text-center">Marketing</div>
                  <FourupLogo className="h-20 md:h-22 w-auto my-4" />
                  <div className="text-fourup-orange text-2xl font-bold mt-4 text-center">Design</div>
                  <div className="absolute -left-4 -right-4 h-1 bg-gradient-to-r from-transparent via-fourup-orange to-transparent top-0"></div>
                  <div className="absolute -left-4 -right-4 h-1 bg-gradient-to-r from-transparent via-fourup-orange to-transparent bottom-0"></div>
                </div>
              </div>
            </div>

            {/* Caixas de serviços */}
            <div className="space-y-4 flex-grow w-full">
              <div className="border border-fourup-orange rounded-lg p-4 md:p-6 flex items-start gap-4 transition-all duration-300 hover:bg-fourup-orange/10">
                <Check className="w-6 h-6 text-fourup-orange flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">
                  Oferecemos uma ampla gama de serviços que integra o marketing digital ao design, criando soluções
                  completas e estratégicas para{" "}
                  <span className="text-white">fortalecer a presença e gerando receita ao seu negócio.</span>
                </p>
              </div>

              <div className="border border-fourup-orange rounded-lg p-4 md:p-6 flex items-start gap-4 transition-all duration-300 hover:bg-fourup-orange/10">
                <Check className="w-6 h-6 text-fourup-orange flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">
                  Desenvolvemos nossas estratégias de forma totalmente personalizada e adaptando-as às{" "}
                  <span className="text-white">necessidades específicas dos seus problemas.</span>
                </p>
              </div>

              <div className="border border-fourup-orange rounded-lg p-4 md:p-6 flex items-start gap-4 transition-all duration-300 hover:bg-fourup-orange/10">
                <Check className="w-6 h-6 text-fourup-orange flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm md:text-base">
                  Garantimos soluções que impulsionem o <span className="text-white">crescimento do seu negócio.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Por que a FourUp é diferente Seção */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              Porque a FourUp
              <br />é diferente de tudo
              <br />o que você já viu?
            </h2>
            <div className="mt-8 space-y-6 text-gray-300 text-lg">
              <p>
                A FourUp é uma iniciativa que reúne as principais mentes do marketing digital brasileiro, nossa
                organização é composta pelos melhores entre os melhores.
              </p>
              <p>
                Sabe quando a copa do mundo começa e somente os melhores jogadores brasileiros são convocados? A FourUp
                foi construída sob os mesmos princípios!
              </p>
              <p>
                Cada integrante foi convocado por um único motivo: serem hiper destacados em suas respectivas áreas…
              </p>
              <p>
                {" "}
                E cada um deles aceitou o convite por um único motivo: a vontade de fazer a diferença em um mercado tão
                carente de inovação e profissionalismo!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botão do WhatsApp */}
      <a
        href="https://wa.me/47992865256"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <WhatsappLogo />
      </a>
    </section>
  )
}