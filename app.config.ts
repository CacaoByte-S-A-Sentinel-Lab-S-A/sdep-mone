import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const SdepMoneConfig: Configuration = {
  title: "SdepMone",
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

  username: "SdepMone",
  sign: "Top 1 de los mejores precios",
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
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://cdn12.idcgames.com/storage/image/1258/free-new-logo/default.jpg", // Free Fire
    "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_1088324040958400144.jpeg", // Genshin Impact
    "https://kaleoz-media.seagmcdn.com/kaleoz-store/202407/oss-a2d7eb0b228031097472357bb332d7da.jpg", // Mobile Legends
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/video-thumbnails/x90npsk.jpg", // Honor of Kings
    "/Fondo_honkai_2.webp", // Honkai Star Rail
    "https://www.blood-strike.com/m/gw/20230920165203/img/1_d7a9db2.jpg", // Blood Strike
    "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/06/Zenless-Zone-Zero_2024_06-28-24_011.jpg", // Zenless Zone Zero
    "https://sm.ign.com/ign_es/cover/a/arena-brea/arena-breakout-infinite_2uy9.jpg", // Arena Breakout
    "https://i.blogs.es/ef8629/farlight-84-16mbi/1366_2000.jpeg", // Farlight 84
    "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/67885c33d4a048f2df9c8af2_66bea0b210c947d3792e798a_pubg-mobile-battle-royale-video-game-g65tnwjjt1iwoyto.jpeg", // PUBG Mobile
  ],

  gameBanner: {
    "free-fire": "https://cdn12.idcgames.com/storage/image/1258/free-new-logo/default.jpg",
    "genshin-impact": "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_1088324040958400144.jpeg",
    "mobile-legends": "https://kaleoz-media.seagmcdn.com/kaleoz-store/202407/oss-a2d7eb0b228031097472357bb332d7da.jpg",
    "honor-kings": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/video-thumbnails/x90npsk.jpg",
    "honkai-start-rail": "/Fondo_honkai_2.webp",
    "blood-strike": "https://www.blood-strike.com/m/gw/20230920165203/img/1_d7a9db2.jpg",
    "zenless-zone-zero": "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/06/Zenless-Zone-Zero_2024_06-28-24_011.jpg",
    "arena-breakout": "https://sm.ign.com/ign_es/cover/a/arena-brea/arena-breakout-infinite_2uy9.jpg",
    "farlight": "https://i.blogs.es/ef8629/farlight-84-16mbi/1366_2000.jpeg",
    "pubg": "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/67885c33d4a048f2df9c8af2_66bea0b210c947d3792e798a_pubg-mobile-battle-royale-video-game-g65tnwjjt1iwoyto.jpeg",

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
