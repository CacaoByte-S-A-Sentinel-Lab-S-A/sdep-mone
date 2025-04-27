import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Diamond } from "lucide-react"
import { cn } from "@/lib/utils"
import FormsGamesWhatsApp from "@/components/forms/FormsGames";

interface Producto {
  amount?: string
  price: string
  title?: string
  subtitle?: string
  description?: string
  image?: string
}

export interface JuegoProductos {
  [categoria: string]: Producto[]
}

interface GameWithDescription {
  description?: string;
  productos: JuegoProductos;
}

interface GameStoreProps {
  game: string
  gameData: Record<string, { description?: string; items?: string, productos: JuegoProductos; title?: string }>;
}

export default function GameStore({ game, gameData }: GameStoreProps) {
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [confirmedProduct, setConfirmedProduct] = useState<Producto | null>(null);

  const { productos: currentProductos = {}, title: titlegame, description: gameDescription, items: itemsGame  } = gameData[game] || {};

  const currentGame = gameData[game] || {}
  const selectedProduct = selectedCategoria && selectedIndex !== null
  ? currentProductos[selectedCategoria]?.[selectedIndex]
  : null;



  // const handleConfirm = () => {
  //   if (selectedCategoria && selectedIndex !== null) {
  //     const producto = currentGame[selectedCategoria]?.[selectedIndex] || null;
  //     setConfirmedProduct(producto);
  //     console.log("Confirmando compra:", producto);
  //   }
  // };
  
  return (
    <div>
    <div className="w-full max-w-4xl mx-auto rounded-3xl bg-[var(--card-color)] text-[var(--text-color)]  lg:p-6">
      <div className="text-3xl font-bold text-primary mb-3 pb-3">{titlegame}</div>
      <div>
        <h2 className="text-xl font-bold text-primary mb-3">Descripcion del juego</h2>
        {gameDescription && (
          <p className="text-sm text-[var(--text-color-lighten)]">{gameDescription}</p>
        )}
      </div>

      <div className="space-y-6">
        <Accordion type="multiple" className="w-full border-none select-none" defaultValue={[Object.keys(currentProductos)[0]]} >
        {Object.entries(currentProductos).map(([categoria, items]) => (

            <AccordionItem value={categoria} key={categoria} className="border-b-0">
              <AccordionTrigger className="py-2 hover:no-underline">
                <h2 className="text-xl font-bold text-orange-500 text-left capitalize">{categoria.replace(/-/g, ' ')}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2">
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {items.map((item, index) => (
                        <CarouselItem
                          key={index}
                          className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3"
                        >
                          <Card
                            className={cn(
                              "border-none cursor-pointer transition-all duration-200",
                              selectedCategoria === categoria && selectedIndex === index
                                ? "bg-primary/25"
                                : "bg-[var(--background-color)]"
                            )}
                            onClick={() => {
                              setSelectedCategoria(categoria)
                              setSelectedIndex(index)
                            }}
                          >
                          <CardContent className="p-4 flex flex-col items-center justify-between h-56">
                            {/* Imagen y cantidad */}
                            <div className="flex flex-col items-center ">
                              <div className="w-auto h-35  flex items-center justify-center ">
                                {item.image ? (
                                  <img src={item.image} alt="Icono" className="w-auto h-35 transition-transform duration-300 hover:scale-130 hover:rotate-1" />
                                ) : (
                                  <div className="w-auto h-35" />
                                )}
                              </div>
                              {item.amount && (
                                <span className="font-bold text-blue-400 text-sm">{item.amount}</span>
                              )}
                            </div>

                            {/* Título y subtítulo */}
                            {(item.title || item.subtitle) && (
                              <div className="text-center text-sm text-[var(--text-color)] dark:text-[var(--text-color-dark)] font-medium">
                                {item.title && <div className="text-base font-semibold">{item.title}</div>}
                                {item.subtitle && <div className="text-xs text-gray-300">{item.subtitle}</div>}
                              </div>
                            )}
                            {/* Precio */}
                            <div className="text-center font-bold text-orange-400 text-base">{item.price}</div>
                          </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                    <CarouselNext className="right-0 bg-orange-500 hover:bg-orange-600 border-none text-white hover:text-white" />
                  </Carousel>
                  <div className="flex justify-center mt-4">
                    {/* <Button
                      className="bg-orange-600 hover:bg-orange-700 text-white border-none"
                      onClick={handleConfirm}
                      disabled={selectedCategoria !== categoria || selectedIndex === null}
                    >
                      Confirmar
                    </Button> */}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    {selectedProduct && (
  <FormsGamesWhatsApp
    key={`${selectedProduct.title}-${selectedProduct.price}`} 
    gameName={game}
    coinAmount={selectedProduct.amount ?? selectedProduct.title ?? ""}
  />
)}

    </div>
  )
}


