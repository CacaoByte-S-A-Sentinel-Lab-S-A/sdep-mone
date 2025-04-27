import type { JuegoProductos } from "@/components/game-store"

interface GameWithDescription {
  items?: string;
  title?: string;
  description?: string;
  productos: JuegoProductos;
}

export const gameData: Record<string, GameWithDescription > = {
  "free-fire": {
    description: "Free Fire es el popular juego de disparos de supervivencia en tercera persona para dispositivos móviles. Cada partida te lanza a una isla remota junto a otros 49 jugadores, donde todos luchan por ser el último en pie. Con partidas rápidas, personajes únicos, habilidades especiales y una enorme variedad de armas y estrategias, Free Fire te garantiza acción, adrenalina y diversión en cada segundo. ¡Forma tu escuadra, perfecciona tus habilidades y demuestra que tienes lo necesario para sobrevivir!",
    items:"/sdeepmone.svg",
    title:"Free Fire",
    productos: {
    diamantes: [
      { amount: "100 (+10)", price: "Q11.50", image: "/DiamantesFree1.webp" },
      { amount: "200 (+20)", price: "Q23.00", image: "/DiamantesFree1.webp" },
      { amount: "310 (+31)", price: "Q33.00", image: "/DiamantesFree1.webp" },
      { amount: "520 (+52)", price: "Q54.00", image: "/DiamantesFree1.webp" },
      { amount: "620 (+62)", price: "Q65.00", image: "/DiamantesFree1.webp" },
      { amount: "830 (+80)", price: "Q85.00", image: "/DiamantesFree1.webp" },
      { amount: "1060 (+106)", price: "Q104.00", image: "/DiamantesFree2.webp" },
      { amount: "2180 (+218)", price: "Q202.00", image: "/DiamantesFree2.webp" },
      { amount: "3240 (+324)", price: "Q300.00", image: "/DiamantesFree2.webp" },
      { amount: "4360 (+436)", price: "Q392.00", image: "/DiamantesFree2.webp" },
      { amount: "5600 (+560)", price: "Q462.00", image: "/DiamantesFree2.webp" },
      { amount: "11200 (+1120)", price: "Q910.00", image: "/DiamantesFree2.webp" }
    ],
  
    tarjetas: [
      { title: "Semanal 10 Diamantes", subtitle: "Inst. + 10/día (7 días)", price: "Q6.00", image: "/Semanal_Free.webp" },
      { title: "Semanal Plus 60 Diamantes", subtitle: "Inst. + 40/día (7 días)", price: "Q22.00", image: "/SemanalFreePlus.webp" },
      { title: "Mensual 300 Diamantes", subtitle: "Inst. + 50/día (30 días)", price: "Q104.00", image: "/MensualFreeFire.webp" }
    ],
  }
  },
  "mobile-legends": {
    items:"/sdeepmone.svg",
    title:"Mobile Legends",
    description: "Mobile Legends es el MOBA (Multiplayer Online Battle Arena) definitivo para dispositivos móviles. Forma tu equipo de 5 jugadores y enfréntate en batallas estratégicas de 5v5 en tiempo real. Elige entre una gran variedad de héroes, domina sus habilidades únicas y trabaja en equipo para destruir la base enemiga. Con partidas rápidas, controles intuitivos y acción intensa, Mobile Legends te ofrece una experiencia de batalla épica estés donde estés. ¡Demuestra tu habilidad y conquista la gloria!",
    productos: {
    diamantes: [
      { amount: "172", price: "Q32.63", image: "/DiamantesFree.webp" },
      { amount: "280", price: "Q54.00", image: "/DiamantesFree.webp" },
      { amount: "344", price: "Q63.00", image: "/DiamantesFree.webp" },
      { amount: "570", price: "Q105.00", image: "/DiamantesFree.webp" },
      { amount: "792", price: "Q139.00", image: "/DiamantesFree.webp" },
      { amount: "964", price: "Q167.00", image: "/DiamantesFree.webp" },
      { amount: "1050", price: "Q184.00", image: "/DiamantesFree.webp" },
      { amount: "1756", price: "Q299.00", image: "/DiamantesFree.webp" },
      { amount: "2711", price: "Q431.00", image: "/DiamantesFree.webp" },
      { amount: "3688", price: "Q567.00", image: "/DiamantesFree.webp" },
      { amount: "5532", price: "Q821.00", image: "/DiamantesFree.webp" },
      { amount: "9288", price: "Q1,358.00", image: "/DiamantesFree.webp" }
    ],
    pase: [
      { title: "Semanal", subtitle: "(80+20/día)", price: "Q24.05", image: "/MobileLegendsSemanal.webp" },
      { title: "Doble Semanal", subtitle: "(160+20/día)", price: "Q47.00", image: "/MobileLegendsSemanal.webp" },
      { title: "Triple Semanal", subtitle: "(240+20/día)", price: "Q70.00", image: "/MobileLegendsSemanal.webp" },
      { title: "Mensual", subtitle: "(320+20/día)", price: "Q89.00", image: "/MobileLegendsSemanal.webp" },
      { title: "172 Diamantes + Semanal", price: "Q54.00", image: "/MobileLegendsSemanal.webp" },
      { title: "86 Diamantes + Doble Semanal", price: "Q60.00", image: "/MobileLegendsSemanal.webp" },
      { title: "Crepuscular", subtitle: "(Skin + Recompensas)", price: "Q106.00", image: "/MobileLegendsSemanal.webp" }
    ]
  }
  },
  "honor-kings": {
    items:"/sdeepmone.svg",
    title:"Honor of Kings",
    description: "Honor of Kings es uno de los MOBAs más populares del mundo, ahora disponible para todos los jugadores móviles. Sumérgete en batallas estratégicas de 5v5, elige entre héroes inspirados en la mitología y la historia, y domina sus habilidades únicas para llevar a tu equipo a la victoria. Con gráficos impresionantes, partidas dinámicas y un enfoque en la estrategia en equipo, Honor of Kings te reta a demostrar tu valor en cada enfrentamiento. ¡Forma tu escuadra y forja tu propia leyenda!",
    productos: {
    tokens: [
      { amount: "80 (+8)", price: "Q11.00", image: "/TokensHonor.webp" },
      { amount: "240 (+17)", price: "Q34.00", image: "/TokensHonor.webp" },
      { amount: "400 (+32)", price: "Q57.00", image: "/TokensHonor.webp" },
      { amount: "560 (+45)", price: "Q77.00", image: "/TokensHonor.webp" },
      { amount: "800 (+95)", price: "Q98.00", image: "/TokensHonor.webp" },
      { amount: "1200 (+153)", price: "Q153.00", image: "/TokensHonor.webp" },
      { amount: "2400 (+324)", price: "Q334.00", image: "/TokensHonor.webp" }
    ],
    pase: [
      { title: "Pase Semanal Azul", price: "Q10.00", image: "/HonorKingsTarjetaSemanal.webp" },
      { title: "Pase Semanal Plus Amarillo", price: "Q31.00", image: "/HonorKingsTarjetaSemanalPlus.webp" }
    ]
  }
  },
  "genshin-impact": {
    items:"/sdeepmone.svg",
    title:"Genshin Impact",
    description: "Genshin Impact es un RPG de acción de mundo abierto que te invita a explorar el impresionante reino de Teyvat. Viaja a través de vastos paisajes, resuelve misterios ancestrales y enfréntate a enemigos poderosos con un sistema de combate elemental único. Forma tu equipo de personajes, cada uno con habilidades especiales, y vive una historia épica llena de magia, amistad y desafíos. ¡Descubre los secretos de Teyvat y forja tu propio destino!",
    productos: {
    "cristales-genesis": [
      { amount: "60", price: "Q10.00", image: "/genshinImpactCristales.webp" },
      { amount: "300 (+30)", price: "Q51.00", image: "/genshinImpactCristales.webp" },
      { amount: "980 + 110", price: "Q149.00", image: "/genshinImpactCristales.webp" },
      { amount: "1980 + 260", price: "Q319.00", image: "/genshinImpactCristales.webp" },
      { amount: "3280 (+600)", price: "Q485.00", image: "/genshinImpactCristales.webp" },
      { amount: "6480 (+1600)", price: "Q954.00", image: "/genshinImpactCristales.webp" }
    ],
    "bendicion": [
      { title: "Lunar x1 (30 días)", subtitle: "300 Cristales + 90 protogemas/día", price: "Q54.00", image: "/BendicionLunar.webp" },
      { title: "Lunar x2 (60 días)", subtitle: "600 Cristales + 90 protogemas/día", price: "Q107.00", image: "/BendicionLunar.webp" },
      { title: "Lunar x3 (90 días)", subtitle: "900 Cristales + 90 protogemas/día", price: "Q158.00", image: "/BendicionLunar.webp" },
      { title: "Lunar x4 (120 días)", subtitle: "1200 Cristales + 90 protogemas/día", price: "Q208.00", image: "/BendicionLunar.webp" }
    ]
  }
  },
  "honkai-start-rail": {
    items:"/sdeepmone.svg",
    title:"Honkai Star Rail",
    description: "Honkai Star Rail es un juego de rol estratégico que te lleva a través de un universo lleno de misterios, criaturas y batallas épicas. Forma tu equipo de héroes y viaja por los vastos rincones del espacio a bordo de un tren espacial, enfrentándote a enemigos y desentrañando los secretos de una trama fascinante. Con un sistema de combate por turnos, habilidades únicas de cada personaje y una historia envolvente, Honkai: Star Rail ofrece una experiencia de juego profunda y emocionante. ¡Únete a la lucha y descubre lo que el futuro del universo tiene reservado!",
    productos: {
    cristales: [
      { amount: "60", price: "Q10.00", image: "/CristalesHonkai.webp" },
      { amount: "330", price: "Q51.00", image: "/CristalesHonkai.webp" },
      { amount: "1090", price: "Q149.00", image: "/CristalesHonkai.webp" },
      { amount: "2240", price: "Q319.00", image: "/CristalesHonkai.webp" },
      { amount: "3880", price: "Q485.00", image: "/CristalesHonkai.webp" },
      { amount: "8080", price: "Q954.00", image: "/CristalesHonkai.webp" },
      { amount: "Expreso", price: "Q47.00", image: "/expreso.webp" }
    ]
  }
  },
  "blood-strike": {
    items:"/sdeepmone.svg",
    title:"Blood Strike",
    description: "Blood Strike es un juego de disparos en primera persona lleno de acción, donde te enfrentas a hordas de enemigos en escenarios llenos de adrenalina. Con una amplia variedad de armas y personajes, cada partida se convierte en una prueba de habilidad, estrategia y reflejos. Lucha por tu supervivencia en mapas desafiantes, mejora tus armas y demuestra quién es el mejor en este campo de batalla sangriento. ¡Elige tu personaje, forma tu equipo y haz lo necesario para salir victorioso!",
    productos: {
    golds: [
      { amount: "105", price: "Q10.00", image: "/Golds.webp" },
      { amount: "320", price: "Q29.00", image: "/Golds.webp" },
      { amount: "540", price: "Q46.00", image: "/Golds.webp" },
      { amount: "1100", price: "Q89.00", image: "/Golds.webp" },
      { amount: "2260", price: "Q171.00", image: "/Golds.webp" },
      { amount: "5800", price: "Q429.00", image: "/Golds.webp" }
    ],
    pase: [
      { title: "Elite", price: "Q41.00", image: "/bloodStrikePaseElite.webp" },
      { title: "Elite Plus", price: "Q94.00", image: "/bloodStrikePasePlus.webp" }
    ]
  }
  },
  "zenless-zone-zero": {
    items:"/sdeepmone.svg",
    title:"Zenless Zone Zero",
    description: "Zenless Zone Zero es un juego de acción y aventura que te transporta a un futuro post-apocalíptico, donde el caos y la lucha por la supervivencia son el pan de cada día. Explora una ciudad devastada, conocida como la Zona Zero, enfrentándote a enemigos extraños y criaturas misteriosas. Con un sistema de combate dinámico y personajes con habilidades únicas, este juego te invita a formar equipos estratégicos para desbloquear secretos, completar misiones y sobrevivir en un mundo sin reglas. ¡Prepárate para enfrentarte a lo desconocido en una aventura que desafiará todos tus límites!",
    productos: {
    monocromos: [
      { amount: "60", price: "Q11.00", image: "/monocromos.webp" },
      { amount: "300 (+30)", price: "Q50.00", image: "/monocromos.webp" },
      { amount: "980 (+110)", price: "Q145.00", image: "/monocromos2.webp" },
      { amount: "1980 (+260)", price: "Q303.00", image: "/monocromos2.webp" },
      { amount: "3280 (+600)", price: "Q457.00", image: "/monocromos3.webp" },
      { amount: "6480 (+1600)", price: "Q900.00", image: "/monocromos3.webp" },
      { amount: "Subscripción Proxy 30 Dias", price: "Q47.00", image: "/suscripcionP.webp" }
    ]
  }
  },
  "arena-breakout": {
    items:"/sdeepmone.svg",
    title:"Arena Breakout",
    description: "Arena Breakout es un juego de acción y supervivencia donde los jugadores deben luchar por su libertad en una arena implacable. Con una jugabilidad intensa, debes enfrentar a otros jugadores y a poderosos enemigos mientras buscas formas de escapar y sobrevivir en este brutal campo de batalla. Equipado con armas personalizables y habilidades únicas, cada partida es un desafío lleno de emoción y estrategia. ¡Solo los más habilidosos lograrán escapar y ser los campeones de la Arena!",
    productos: {
    bonds: [
      { amount: "220", price: "Q21.00", image: "/bonds.webp" },
      { amount: "330", price: "Q32.00", image: "/bonds.webp" },
      { amount: "880", price: "Q83.00", image: "/bonds.webp" },
      { amount: "2240", price: "Q204.00", image: "/bonds.webp" },
      { amount: "4700", price: "Q374.00", image: "/bonds.webp" },
      { amount: "60", price: "Q10.00", image: "/bonds.webp" },
      { amount: "335", price: "Q51.00", image: "/bonds.webp" },
      { amount: "675", price: "Q99.00", image: "/bonds.webp" },
      { amount: "1690", price: "Q243.00", image: "/bonds.webp" },
      { amount: "3400", price: "Q450.00", image: "/bonds.webp" },
      { amount: "6820", price: "Q934.00", image: "/bonds.webp" }
    ],
    pase: [
      { title: "Avanzado", price: "Q49.00", image: "/PaseAvances.webp" },
      { title: "Premium", price: "Q140.00", image: "/PasePremium.webp" },
    ],
    maletin: [
      { title: "Antibalas", price: "Q28.00", image: "/MaletinAntibalas.webp" },
      { title: "Compuesto", price: "Q82.00", image: "/MaletinCompuesto.webp" },
    ],
    otros: [
      { title: "Paquete Principiante", price: "Q9.00", image: "/paquetePrincipiante.webp" },
      { title: "Elite De Prueba", price: "Q47.00", image: "/paquetePrincipiante.webp" }
    ]
  }
  },
  "pubg": {
    items:"/sdeepmone.svg",
    title:"PUBG",
    description: "PUBG (PlayerUnknown's Battlegrounds) es el icónico juego de batalla real que revolucionó el género. Lucha por tu supervivencia en una isla remota, donde cada partida enfrenta a 100 jugadores en un escenario masivo. Recoge armas, equipo y vehículos mientras te enfrentas a otros jugadores en una batalla sin piedad para ser el último en pie. Con un enfoque en la estrategia y el trabajo en equipo, PUBG ofrece intensas partidas de acción, donde cada movimiento puede ser la diferencia entre la vida y la muerte. ¡Solo los más fuertes sobrevivirán!",
    productos: {
    uc: [
      { amount: "60", price: "Q10.00", image: "/Uc.webp" },
      { amount: "325 (+25)", price: "Q50.00", image: "/Uc.webp" },
      { amount: "660 (+60)", price: "Q97.00", image: "/Uc.webp" },
      { amount: "1800 (+300)", price: "Q238.00", image: "/Uc.webp" },
      { amount: "3850 (+850)", price: "Q470.00", image: "/Uc.webp" },
      { amount: "8110 (+2100)", price: "Q926.00", image: "/Uc.webp" }
    ]
  }
  },
  "farlight": {
    items:"/sdeepmone.svg",
    title:"Farlight 84",
    description: "Farlight 84 es un juego de disparos en tercera persona en un mundo post-apocalíptico futurista. Los jugadores deben enfrentarse en intensas batallas de batalla real, donde la habilidad y la estrategia son clave para dominar el campo de batalla. Con vehículos futuristas, personajes únicos y una amplia variedad de armas, Farlight 84 ofrece una experiencia llena de acción y emoción. La jugabilidad rápida y dinámica, combinada con un mundo de ciencia ficción vibrante, hará que cada partida sea impredecible y desafiante. ¡Es hora de sobrevivir en el 84!",
    productos: {
    Diamantes: [
      { amount: "220", price: "Q21.00", image: "/DiamantesFree.webp" },
      { amount: "330", price: "Q32.00", image: "/DiamantesFree.webp" },
      { amount: "880", price: "Q83.00", image: "/DiamantesFree.webp" },
      { amount: "2240", price: "Q204.00", image: "/DiamantesFree.webp" },
      { amount: "4700", price: "Q374.00", image: "/DiamantesFree.webp" },
    ]
  }
}
}
