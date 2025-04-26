import type { JuegoProductos } from "@/components/game-store"

interface GameWithDescription {
  items?: string;
  description?: string;
  productos: JuegoProductos;
}

export const gameData: Record<string, GameWithDescription > = {
  "free-fire": {
    description: "Recarga diamantes al instante en Free Fire. Compra rápida y segura.",
    items:"/sdeepmone.svg",
    productos: {
    diamantes: [
      { amount: "100 (+10)", price: "Q11.50", image: "/DiamantesFree.webp" },
      { amount: "200 (+20)", price: "Q23.00", image: "/DiamantesFree.webp" },
      { amount: "310 (+31)", price: "Q33.00", image: "/DiamantesFree.webp" },
      { amount: "520 (+52)", price: "Q54.00", image: "/DiamantesFree.webp" },
      { amount: "620 (+62)", price: "Q65.00", image: "/DiamantesFree.webp" },
      { amount: "830 (+80)", price: "Q85.00", image: "/DiamantesFree.webp" },
      { amount: "1060 (+106)", price: "Q104.00", image: "/DiamantesFree.webp" },
      { amount: "2180 (+218)", price: "Q202.00", image: "/DiamantesFree.webp" },
      { amount: "3240 (+324)", price: "Q300.00", image: "/DiamantesFree.webp" },
      { amount: "4360 (+436)", price: "Q392.00", image: "/DiamantesFree.webp" },
      { amount: "5600 (+560)", price: "Q462.00", image: "/DiamantesFree.webp" },
      { amount: "11200 (+1120)", price: "Q910.00", image: "/DiamantesFree.webp" }
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
    description: "Recarga diamantes y obtén pases semanales en Mobile Legends. Mejora tu experiencia MOBA.",
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
    description: "Consigue tokens y pases especiales para dominar en Honor of Kings con tus héroes favoritos.",
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
    description: "Recarga cristales y obtén bendiciones en Genshin Impact. Explora Teyvat al máximo.",
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
    description: "Compra cristales y el pase Expreso para avanzar rápidamente en Honkai: Star Rail.",
    productos: {
    cristales: [
      { amount: "60", price: "Q10.00", image: "/CristalesHonkai.webp" },
      { amount: "330", price: "Q51.00", image: "/CristalesHonkai.webp" },
      { amount: "1090", price: "Q149.00", image: "/CristalesHonkai.webp" },
      { amount: "2240", price: "Q319.00", image: "/CristalesHonkai.webp" },
      { amount: "3880", price: "Q485.00", image: "/CristalesHonkai.webp" },
      { amount: "8080", price: "Q954.00", image: "/CristalesHonkai.webp" },
      { amount: "Expreso", price: "Q47.00", image: "/CristalesHonkai.webp" }
    ]
  }
  },
  "blood-strike": {
    items:"/sdeepmone.svg",
    description: "Recarga oro y desbloquea pases exclusivos en Blood Strike. Acción intensa sin límites.",
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
    description: "Consigue monocromos y la suscripción Proxy en Zenless Zone Zero. Prepárate para el combate urbano.",
    productos: {
    monocromos: [
      { amount: "60", price: "Q11.00", image: "/monocromos.webp" },
      { amount: "300 (+30)", price: "Q50.00", image: "/monocromos.webp" },
      { amount: "980 (+110)", price: "Q145.00", image: "/monocromos.webp" },
      { amount: "1980 (+260)", price: "Q303.00", image: "/monocromos.webp" },
      { amount: "3280 (+600)", price: "Q457.00", image: "/monocromos.webp" },
      { amount: "6480 (+1600)", price: "Q900.00", image: "/monocromos.webp" },
      { amount: "Subscripción Proxy 30D", price: "Q47.00", image: "/monocromos.webp" }
    ]
  }
  },
  "arena-breakout": {
    items:"/sdeepmone.svg",
    description: "Equípate con bonos, pases y maletines en Arena Breakout. ¡Prepárate para sobrevivir!",
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
      { title: "Paquete Principiante", price: "Q9.00", image: "/ArenaBreakoutOtros.webp" },
      { title: "Elite De Prueba", price: "Q47.00", image: "/ArenaBreakoutOtros.webp" }
    ]
  }
  },
  "pubg": {
    items:"/sdeepmone.svg",
    description: "Recarga UC en PUBG Mobile para comprar skins, pases y más. ¡Juega como un pro!",
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
    description: "Obtén diamantes para Farlight y lleva tus batallas futuristas al siguiente nivel.",
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
