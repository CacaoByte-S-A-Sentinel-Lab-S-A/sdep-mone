import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "SdepMone",
  subTitle: "SdepMone Page",
  brandTitle: "SdepMone",

  description: "SdepMone Site",

  site: "https://yukina-blog.vercel.app",

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

  username: "WhitePaper 白芷",
  sign: "Ad Astra Per Aspera.",
  avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
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
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
