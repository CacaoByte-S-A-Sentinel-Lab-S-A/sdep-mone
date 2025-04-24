import type I18nKeys from "../locales/keys";

type GameBanner = Record<string, string>;

interface Configuration {
  title: string;
  appTitle: {
    sdep: string;
    mone: string;
  };
  subTitle: string;
  titleGame: string;
  brandTitle: string;
  logoUrl: string;

  description: string;

  site: string;

  locale: "es" | "en";

  navigators: { nameKey: I18nKeys; href: string }[];

  username: string;
  sign: string;
  avatarUrl: string;

  socialLinks: { icon: string; link: string }[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  banners: string[];

  gameBanner: GameBanner;

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
