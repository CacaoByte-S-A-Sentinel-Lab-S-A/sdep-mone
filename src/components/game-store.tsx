import { useState } from "react"
import { Diamond } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface Producto {
  amount?: string
  title?: string
  subtitle?: string
  price: string
}

interface JuegoProductos {
  diamantes?: Producto[]
  tarjetas?: Producto[]
}

const gameData: Record<string, JuegoProductos> = {
  "free-fire": {
    diamantes: [
      { amount: "100 (+10)", price: "Q11.50" },
      { amount: "200 (+20)", price: "Q23.00" },
      { amount: "310 (+31)", price: "Q33.00" },
      { amount: "520 (+52)", price: "Q54.00" },
      { amount: "620 (+62)", price: "Q65.00" },
      { amount: "830 (+80)", price: "Q85.00" },
      { amount: "1060 (+106)", price: "Q104.00" },
      { amount: "2180 (+218)", price: "Q202.00" },
      { amount: "3240 (+324)", price: "Q300.00" },
      { amount: "4360 (+436)", price: "Q392.00" },
      { amount: "5600 (+560)", price: "Q462.00" },
      { amount: "11200 (+1120)", price: "Q910.00" }
    ],
    tarjetas: [
      { title: "Semanal 10 Diamantes", subtitle: "Inst. + 10/día (7 días)", price: "Q6.00" },
      { title: "Semanal Plus 60 Diamantes", subtitle: "Inst. + 40/día (7 días)", price: "Q22.00" },
      { title: "Mensual 300 Diamantes", subtitle: "Inst. + 50/día (30 días)", price: "Q104.00" }
    ]
  },
  "mobile-legends": {
    diamantes: [
      { amount: "172", price: "Q32.63" },
      { amount: "280", price: "Q54.00" },
      { amount: "344", price: "Q63.00" },
      { amount: "570", price: "Q105.00" },
      { amount: "792", price: "Q139.00" },
      { amount: "964", price: "Q167.00" },
      { amount: "1050", price: "Q184.00" },
      { amount: "1756", price: "Q299.00" },
      { amount: "2711", price: "Q431.00" },
      { amount: "3688", price: "Q567.00" },
      { amount: "5532", price: "Q821.00" },
      { amount: "9288", price: "Q1,358.00" }
    ],
    tarjetas: [
      { title: "Semanal", subtitle: "(80+20/día)", price: "Q24.05" },
      { title: "Doble Semanal", subtitle: "(160+20/día)", price: "Q47.00" },
      { title: "Triple Semanal", subtitle: "(240+20/día)", price: "Q70.00" },
      { title: "Mensual", subtitle: "(320+20/día)", price: "Q89.00" },
      { title: "172 Diamantes + Semanal", price: "Q54.00" },
      { title: "86 Diamantes + Doble Semanal", price: "Q60.00" },
      { title: "Crepuscular", subtitle: "(Skin + Recompensas)", price: "Q106.00" }
    ]
  },
  "honor-of-kings": {
    diamantes: [
      { amount: "80 (+8)", price: "Q11.00" },
      { amount: "240 (+17)", price: "Q34.00" },
      { amount: "400 (+32)", price: "Q57.00" },
      { amount: "560 (+45)", price: "Q77.00" },
      { amount: "800 (+95)", price: "Q98.00" },
      { amount: "1200 (+153)", price: "Q153.00" },
      { amount: "2400 (+324)", price: "Q334.00" }
    ],
    tarjetas: [
      { title: "Pase Semanal Azul", price: "Q10.00" },
      { title: "Pase Semanal Plus Amarillo", price: "Q31.00" }
    ]
  },
  "genshin-impact": {
    diamantes: [
      { amount: "60", price: "Q10.00" },
      { amount: "300 (+30)", price: "Q51.00" },
      { amount: "980 + 110", price: "Q149.00" },
      { amount: "1980 + 260", price: "Q319.00" },
      { amount: "3280 (+600)", price: "Q485.00" },
      { amount: "6480 (+1600)", price: "Q954.00" }
    ],
    tarjetas: [
      { title: "Lunar x1 (30 días)", subtitle: "300 Cristales + 90 protogemas/día", price: "Q54.00" },
      { title: "Lunar x2 (60 días)", subtitle: "600 Cristales + 90 protogemas/día", price: "Q107.00" },
      { title: "Lunar x3 (90 días)", subtitle: "900 Cristales + 90 protogemas/día", price: "Q158.00" },
      { title: "Lunar x4 (120 días)", subtitle: "1200 Cristales + 90 protogemas/día", price: "Q208.00" }
    ]
  },
  "honkai-star-rail": {
    diamantes: [
      { amount: "60", price: "Q10.00" },
      { amount: "330", price: "Q51.00" },
      { amount: "1090", price: "Q149.00" },
      { amount: "2240", price: "Q319.00" },
      { amount: "3880", price: "Q485.00" },
      { amount: "8080", price: "Q954.00" },
      { title: "Expreso", price: "Q47.00" }
    ]
  },
  "blood-strike": {
    diamantes: [
      { amount: "105", price: "Q10.00" },
      { amount: "320", price: "Q29.00" },
      { amount: "540", price: "Q46.00" },
      { amount: "1100", price: "Q89.00" },
      { amount: "2260", price: "Q171.00" },
      { amount: "5800", price: "Q429.00" }
    ],
    tarjetas: [
      { title: "Elite", price: "Q41.00" },
      { title: "Elite Plus", price: "Q94.00" }
    ]
  },
  "zenless-zone-zero": {
    diamantes: [
      { amount: "60", price: "Q11.00" },
      { amount: "300 (+30)", price: "Q50.00" },
      { amount: "980 (+110)", price: "Q145.00" },
      { amount: "1980 (+260)", price: "Q303.00" },
      { amount: "3280 (+600)", price: "Q457.00" },
      { amount: "6480 (+1600)", price: "Q900.00" },
      { title: "Subscripción Proxy 30D", price: "Q47.00" }
    ]
  },
  "arena-breakout": {
    diamantes: [
      { amount: "220", price: "Q21.00" },
      { amount: "330", price: "Q32.00" },
      { amount: "880", price: "Q83.00" },
      { amount: "2240", price: "Q204.00" },
      { amount: "4700", price: "Q374.00" },
      { amount: "60", price: "Q10.00" },
      { amount: "335", price: "Q51.00" },
      { amount: "675", price: "Q99.00" },
      { amount: "1690", price: "Q243.00" },
      { amount: "3400", price: "Q450.00" },
      { amount: "6820", price: "Q934.00" }
    ],
    tarjetas: [
      { title: "Avanzado", price: "Q49.00" },
      { title: "Premium", price: "Q140.00" },
      { title: "Antibalas", price: "Q28.00" },
      { title: "Compuesto", price: "Q82.00" },
      { title: "Paquete Principiante", price: "Q9.00" },
      { title: "Elite De Prueba", price: "Q47.00" }
    ]
  },
  "pubg": {
    diamantes: [
      { amount: "60", price: "Q10.00" },
      { amount: "325 (+25)", price: "Q50.00" },
      { amount: "660 (+60)", price: "Q97.00" },
      { amount: "1800 (+300)", price: "Q238.00" },
      { amount: "3850 (+850)", price: "Q470.00" },
      { amount: "8110 (+2100)", price: "Q926.00" }
    ]
  }
}

export default function GameStore({ game }: { game: string }) {
  const [selectedDiamante, setSelectedDiamante] = useState<number | null>(null)
  const [selectedTarjeta, setSelectedTarjeta] = useState<number | null>(null)

  const currentGame = gameData[game] || { diamantes: [], tarjetas: [] }

  const handleConfirmDiamantes = () => {
    if (selectedDiamante !== null) {
      console.log("Confirmando compra de diamantes:", currentGame.diamantes?.[selectedDiamante])
    }
  }

  const handleConfirmTarjeta = () => {
    if (selectedTarjeta !== null) {
      console.log("Confirmando compra de tarjeta:", currentGame.tarjetas?.[selectedTarjeta])
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[var(--card-color)] text-[var(--text-color)] p-6">
      <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["diamantes", "tarjeta"]} className="w-full border-none select-none">
          <AccordionItem value="diamantes" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <h2 className="text-xl font-bold text-primary text-left">Diamantes</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {currentGame.diamantes?.map((option, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/4">
                        <Card
                          className={cn(
                            "border-none cursor-pointer transition-all duration-200",
                            selectedDiamante === index ? "bg-primary/25" : "bg-[var(--background-color)]"
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

          <AccordionItem value="tarjeta" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <h2 className="text-xl font-bold text-orange-500 text-left">Tarjeta</h2>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-2">
                <Carousel className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {currentGame.tarjetas?.map((option, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/3">
                        <Card
                          className={cn(
                            "border-none cursor-pointer transition-all duration-200",
                            selectedTarjeta === index ? "bg-primary/25" : "bg-[var(--background-color)]"
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
