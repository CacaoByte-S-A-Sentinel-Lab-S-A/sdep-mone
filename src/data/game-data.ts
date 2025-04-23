import type { JuegoProductos } from "@/components/game-store"

export const gameData: Record<string, JuegoProductos> = {
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
    pase: [
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
    tokens: [
      { amount: "80 (+8)", price: "Q11.00" },
      { amount: "240 (+17)", price: "Q34.00" },
      { amount: "400 (+32)", price: "Q57.00" },
      { amount: "560 (+45)", price: "Q77.00" },
      { amount: "800 (+95)", price: "Q98.00" },
      { amount: "1200 (+153)", price: "Q153.00" },
      { amount: "2400 (+324)", price: "Q334.00" }
    ],
    pase: [
      { title: "Pase Semanal Azul", price: "Q10.00" },
      { title: "Pase Semanal Plus Amarillo", price: "Q31.00" }
    ]
  },
  "genshin-impact": {
    "cristales-genesis": [
      { amount: "60", price: "Q10.00" },
      { amount: "300 (+30)", price: "Q51.00" },
      { amount: "980 + 110", price: "Q149.00" },
      { amount: "1980 + 260", price: "Q319.00" },
      { amount: "3280 (+600)", price: "Q485.00" },
      { amount: "6480 (+1600)", price: "Q954.00" }
    ],
    "bendicion": [
      { title: "Lunar x1 (30 días)", subtitle: "300 Cristales + 90 protogemas/día", price: "Q54.00" },
      { title: "Lunar x2 (60 días)", subtitle: "600 Cristales + 90 protogemas/día", price: "Q107.00" },
      { title: "Lunar x3 (90 días)", subtitle: "900 Cristales + 90 protogemas/día", price: "Q158.00" },
      { title: "Lunar x4 (120 días)", subtitle: "1200 Cristales + 90 protogemas/día", price: "Q208.00" }
    ]
  },
  "honkai-star-rail": {
    cristales: [
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
    golds: [
      { amount: "105", price: "Q10.00" },
      { amount: "320", price: "Q29.00" },
      { amount: "540", price: "Q46.00" },
      { amount: "1100", price: "Q89.00" },
      { amount: "2260", price: "Q171.00" },
      { amount: "5800", price: "Q429.00" }
    ],
    pase: [
      { title: "Elite", price: "Q41.00" },
      { title: "Elite Plus", price: "Q94.00" }
    ]
  },
  "zenless-zone-zero": {
    monocromos: [
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
    bonds: [
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
    pase: [
      { title: "Avanzado", price: "Q49.00" },
      { title: "Premium", price: "Q140.00" },
    ],
    maletin: [
      { title: "Antibalas", price: "Q28.00" },
      { title: "Compuesto", price: "Q82.00" },
    ],
    otros: [
      { title: "Paquete Principiante", price: "Q9.00" },
      { title: "Elite De Prueba", price: "Q47.00" }
    ]
  },
  "pubg": {
    uc: [
      { amount: "60", price: "Q10.00" },
      { amount: "325 (+25)", price: "Q50.00" },
      { amount: "660 (+60)", price: "Q97.00" },
      { amount: "1800 (+300)", price: "Q238.00" },
      { amount: "3850 (+850)", price: "Q470.00" },
      { amount: "8110 (+2100)", price: "Q926.00" }
    ]
  }
}
