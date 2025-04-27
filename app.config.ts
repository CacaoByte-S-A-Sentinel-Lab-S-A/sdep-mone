import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const SdepMoneConfig: Configuration = {
  title: "",
  appTitle: {
    sdep: "Sdep",
    mone: "Mone",
  },
  subTitle: "Las mejores monedas para tus juegos móviles, al mejor precio y con total seguridad.",
  titleGame: "SdepMone",
  brandTitle: "SdepMone",
  
  logoUrl: "/sdeepmone.svg",

  description: "Necesitas monedas para los mejores juegos mobiles, solo en SdepMone tienes las mejores ofertas y con la mayor seguridad",

  site: "https://sdep-mone.vercel.app",

  locale: "es", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    // {
    //   nameKey: I18nKeys.nav_bar_archive,
    //   href: "/games",
    // },
  ],

  username: "Contacto",
  sign: "SdepMone",
  avatarUrl: "/sdepMone.png",
  socialLinks: [
    {
      icon: "mingcute:facebook-fill",
      link: "https://www.facebook.com/share/1CLQF99Lyi/",
    },
    {
      icon: "mingcute:tiktok-fill",
      link: "https://www.tiktok.com/@sdep.mone",
    },
    {
      icon: "mingcute:whatsapp-fill",
      link: "https://wa.me/50238349425",
    },
    {
      icon: "mingcute:mail-fill",
      link: "mailto:sdepmone@gmail.com", 
    }
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/categorias.webp",
    "/genshin.webp", // Genshin Impact
    "/mobile-legends.jpg", // Mobile Legends
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/video-thumbnails/x90npsk.jpg", // Honor of Kings
    "/hokai.webp", // Honkai Star Rail    
    "https://cdn12.idcgames.com/storage/image/1258/free-new-logo/default.jpg", // Free Fire
    "/blood.jpg", // Blood Strike
    "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/06/Zenless-Zone-Zero_2024_06-28-24_011.jpg", // Zenless Zone Zero
    "/arena.jpeg", // Arena Breakout
    "/farlight-84.jpg", // Farlight 84
    "/pubg.jpg", // PUBG Mobile
  ],

  gameBanner: {
    "sdepMone.png": "/sdepMone.png",
    "genshin-impact": "/genshin.webp",
    "mobile-legends": "/mobile-legends.jpg",
    "honor-kings": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/video-thumbnails/x90npsk.jpg",
    "free-fire": "https://cdn12.idcgames.com/storage/image/1258/free-new-logo/default.jpg",
    "honkai-start-rail": "/honkai.webp",
    "blood-strike": "/blood.jpg",
    "zenless-zone-zero": "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/06/Zenless-Zone-Zero_2024_06-28-24_011.jpg",
    "arena-breakout": "/arena.jpeg",
    "farlight": "/farlight-84.jpg",
    "pubg": "/pubg.jpg",

  },

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default SdepMoneConfig;
