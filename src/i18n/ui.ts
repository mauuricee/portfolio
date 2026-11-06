export const locales = {
  fr: 'Français',
  en: 'English'
};

export const defaultLocale = 'fr';

export const ui = {
  fr: {
    'greeting': 'Bonjour',
    'nav.projects': 'Projets',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'nav.experience': 'Expérience',
    'nav.studies': 'Études'
    

  },
  en: {
    'greeting': 'Hello',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.experience': 'Experience',
    'nav.studies': 'Studies'
  }
} as const;

export type Locale = keyof typeof ui;

export function getLang(locale: string | undefined): Locale {
    return locale && locale in ui ? (locale as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: keyof (typeof ui)[typeof defaultLocale]) => ui[locale][key];
}