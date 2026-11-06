export const locales = {
  fr: 'Français',
  en: 'English'
};

export const defaultLocale = 'fr';

export const ui = {
  fr: {
    greeting: 'Bonjour'
  },
  en: {
    greeting: 'Hello'
  }
} as const;

export type Locale = keyof typeof ui;

export function getLang(locale: string | undefined): Locale {
    return locale && locale in ui ? (locale as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: keyof (typeof ui)[typeof defaultLocale]) => ui[locale][key];
}