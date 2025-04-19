import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const SdepMoneConfig: Configuration = {
  title: "SdepMone",
  subTitle: "Necesitas monedas para los mejores juegos mobiles, solo en SdepMone tienes las mejores ofertas y con la mayor seguridad",
  brandTitle: "SdepMone",
  logoUrl: "/logo.svg",

  description: "Necesitas monedas para los mejores juegos mobiles, solo en SdepMone tienes las mejores ofertas y con la mayor seguridad",

  site: "https://sdep-mone.vercel.app",

  locale: "es", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/games",
    },
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
      link: "https://whatsapp.com/channel/0029Vb9eM4ZCXC3JMC4UtB1W",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://cdn12.idcgames.com/storage/image/1258/free-new-logo/default.jpg",
    "https://kaleoz-media.seagmcdn.com/kaleoz-store/202407/oss-a2d7eb0b228031097472357bb332d7da.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/video-thumbnails/x90npsk.jpg",
    "https://fastcdn.hoyoverse.com/content-v2/plat/124031/5d2ba4371115d26de4c574b28311aed8_1088324040958400144.jpeg",
    "https://cdn1.epicgames.com/spt-assets/6f3979ff608f42e286c83507a69b27f5/honkai-star-rail-158c1.jpg",
    "https://www.blood-strike.com/m/gw/20230920165203/img/1_d7a9db2.jpg",
    "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2024/06/Zenless-Zone-Zero_2024_06-28-24_011.jpg",
    "https://sm.ign.com/ign_es/cover/a/arena-brea/arena-breakout-infinite_2uy9.jpg",
    "https://i.blogs.es/ef8629/farlight-84-16mbi/1366_2000.jpeg",
    "https://cdn.prod.website-files.com/6657421f71dedfccb6c0511b/67885c33d4a048f2df9c8af2_66bea0b210c947d3792e798a_pubg-mobile-battle-royale-video-game-g65tnwjjt1iwoyto.jpeg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default SdepMoneConfig;
