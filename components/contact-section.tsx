"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FourupLogo } from "@/components/logo"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Flag from "react-world-flags"

export function ContactSection({ id }: { id: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    countryCode: "+55",
    revenue: "",
    segment: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">("")

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | { target: { name: string; value: string } },
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          countryCode: "+55",
          revenue: "",
          segment: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#1C1C1C] to-[#2A2A2A]" id={id}>
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Entre em Contato</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          <div className="space-y-10">
            <FourupLogo className="h-24 w-auto" />
            <div className="space-y-8">
              <div className="relative">
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight font-montserrat tracking-tight">
                  Transformamos ideias em{" "}
                  <span className="relative inline-block">
                    resultados
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-fourup-orange"></span>
                  </span>
                </h3>
                <p className="text-white text-2xl md:text-3xl font-bold leading-tight font-montserrat tracking-tight mt-4">
                  através do marketing e design com um único{" "}
                  <span className="bg-fourup-orange text-white px-3 py-1 inline-block transform -skew-x-6">
                    objetivo
                  </span>
                </p>
              </div>
              <p className="text-lg text-gray-300 font-opensans leading-relaxed">
                Impulsionar sua marca para o próximo nível, criando conexões significativas com seu público-alvo e{" "}
                <span className="bg-fourup-orange text-white px-2 py-1 inline-block transform hover:scale-105 transition-transform">
                  MAXIMIZANDO
                </span>{" "}
                seu potencial no mercado digital.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              placeholder="Qual é o seu nome e sobrenome?"
              className="bg-white border-0 h-12"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Qual é o seu e-mail corporativo?"
              type="email"
              className="bg-white border-0 h-12"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Qual o nome da sua empresa?"
              className="bg-white border-0 h-12"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <div className="flex gap-2">
              <div className="w-28">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => handleChange({ target: { name: "countryCode", value } })}
                >
                  <SelectTrigger className="bg-white border-0 h-12">
                    <SelectValue placeholder="País" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="+55">
                      <div className="flex items-center">
                        <Flag code="BR" className="w-6 h-4 mr-2" />
                        +55
                      </div>
                    </SelectItem>
                    <SelectItem value="+1">
                      <div className="flex items-center">
                        <Flag code="US" className="w-6 h-4 mr-2" />
                        +1
                      </div>
                    </SelectItem>
                    <SelectItem value="+351">
                      <div className="flex items-center">
                        <Flag code="PT" className="w-6 h-4 mr-2" />
                        +351
                      </div>
                    </SelectItem>
                    <SelectItem value="+34">
                      <div className="flex items-center">
                        <Flag code="ES" className="w-6 h-4 mr-2" />
                        +34
                      </div>
                    </SelectItem>
                    <SelectItem value="+44">
                      <div className="flex items-center">
                        <Flag code="GB" className="w-6 h-4 mr-2" />
                        +44
                      </div>
                    </SelectItem>
                    <SelectItem value="+33">
                      <div className="flex items-center">
                        <Flag code="FR" className="w-6 h-4 mr-2" />
                        +33
                      </div>
                    </SelectItem>
                    <SelectItem value="+49">
                      <div className="flex items-center">
                        <Flag code="DE" className="w-6 h-4 mr-2" />
                        +49
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input
                placeholder="Telefone"
                type="tel"
                className="bg-white border-0 h-12 flex-1"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <Select
              value={formData.revenue}
              onValueChange={(value) => handleChange({ target: { name: "revenue", value } })}
            >
              <SelectTrigger className="bg-white border-0 h-12">
                <SelectValue placeholder="Qual é o faturamento da sua empresa?" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="ate-100k">Até R$ 100 mil</SelectItem>
                <SelectItem value="100k-500k">R$ 100 mil a R$ 500 mil</SelectItem>
                <SelectItem value="500k-1m">R$ 500 mil a R$ 1 milhão</SelectItem>
                <SelectItem value="mais-1m">Mais de R$ 1 milhão</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={formData.segment}
              onValueChange={(value) => handleChange({ target: { name: "segment", value } })}
            >
              <SelectTrigger className="bg-white border h-12">
                <SelectValue placeholder="Qual o seu segmento?" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="comercio">Comércio</SelectItem>
                <SelectItem value="servicos">Serviços</SelectItem>
                <SelectItem value="industria">Indústria</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            <Button
              type="submit"
              className="w-32 bg-fourup-orange hover:bg-fourup-orange/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
            {submitStatus === "success" && <p className="text-green-500">Formulário enviado com sucesso!</p>}
            {submitStatus === "error" && (
              <p className="text-red-500">Erro ao enviar o formulário. Por favor, tente novamente.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

