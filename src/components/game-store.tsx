"use client"

import { useState } from "react"
import { Diamond } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export default function GameStore() {
  const [selectedDiamante, setSelectedDiamante] = useState<number | null>(null)
  const [selectedTarjeta, setSelectedTarjeta] = useState<number | null>(null)

  const diamantesOptions = [
    { amount: "100 (+10)", price: "$ Q 11.50" },
    { amount: "100 (+10)", price: "$ Q 11.50" },
    { amount: "100 (+10)", price: "$ Q 11.50" },
    { amount: "100 (+10)", price: "$ Q 11.50" },
    { amount: "200 (+20)", price: "$ Q 22.00" },
    { amount: "300 (+30)", price: "$ Q 33.00" },
  ]

  const tarjetaOptions = [
    { title: "Semanal 10 Diamantes", subtitle: "Inst. + 10/día (7 días)", price: "$ Q 6.00" },
    { title: "Semanal 10 Diamantes", subtitle: "Inst. + 10/día (7 días)", price: "$ Q 6.00" },
    { title: "Semanal 10 Diamantes", subtitle: "Inst. + 10/día (7 días)", price: "$ Q 6.00" },
    { title: "Mensual 50 Diamantes", subtitle: "Inst. + 20/día (30 días)", price: "$ Q 25.00" },
  ]

  const handleConfirmDiamantes = () => {
    if (selectedDiamante !== null) {
      console.log("Confirmando compra de diamantes:", diamantesOptions[selectedDiamante])
    } else {
      console.log("Por favor selecciona una opción de diamantes")
    }
  }

  const handleConfirmTarjeta = () => {
    if (selectedTarjeta !== null) {
      console.log("Confirmando compra de tarjeta:", tarjetaOptions[selectedTarjeta])
    } else {
      console.log("Por favor selecciona una opción de tarjeta")
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[var(--card-color)] text-[var(--text-color)] p-6">
      <div className="space-y-6">
        {/* Descripción del juego */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-3">Descripcion del juego</h2>
          <p className="text-sm text-[var(--text-color-lighten)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
            placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
            vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisi malesuada lacinia integer nunc
            posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
            inceptos himenaeos.
          </p>
        </div>

        <Accordion type="multiple" defaultValue={["diamantes", "tarjeta"]} className="w-full border-none select-none">
          {/* Sección de Diamantes */}
          <AccordionItem value="diamantes" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <h2 className="text-xl font-bold text-primary text-left">Daimantes</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {diamantesOptions.map((option, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/4">
                        <Card
                          className={cn(
                            "border-none cursor-pointer transition-all duration-200",
                            selectedDiamante === index ? "bg-primary/25" : "bg-[var(--background-color)]",
                          )}
                          onClick={() => setSelectedDiamante(index)}
                        >
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="flex items-center text-blue-400 mb-2 mt-2">
                              <Diamond className="fill-blue-400 stroke-blue-400 mr-2" size={20} />
                              <span className="font-bold">{option.amount}</span>
                            </div>
                            <div className="text-center font-bold">{option.price}</div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                  <CarouselNext className="right-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                </Carousel>
                <div className="flex justify-center mt-4">
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white border-none"
                    onClick={handleConfirmDiamantes}
                    disabled={selectedDiamante === null}
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Sección de Tarjeta */}
          <AccordionItem value="tarjeta" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <h2 className="text-xl font-bold text-orange-500 text-left">Tarjeta</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {tarjetaOptions.map((option, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/3">
                        <Card
                          className={cn(
                            "border-none cursor-pointer transition-all duration-200",
                            selectedTarjeta === index ? "bg-primary/25" : "bg-[var(--background-color)]",
                          )}
                          onClick={() => setSelectedTarjeta(index)}
                        >
                          <CardContent className="p-4 flex flex-col items-center">
                            <div className="text-center font-medium mb-2 mt-2">
                              {option.title}
                              <br />
                              {option.subtitle}
                            </div>
                            <div className="text-center font-bold">{option.price}</div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                  <CarouselNext className="right-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                </Carousel>
                <div className="flex justify-center mt-4">
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white border-none"
                    onClick={handleConfirmTarjeta}
                    disabled={selectedTarjeta === null}
                  >
                    Confirmar
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
