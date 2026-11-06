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
    'nav.studies': 'Études',
    'nav.label': 'Navigation',
    'theme.toggle': 'Changer le thème',
    'portfolio.title': 'Mon Portfolio',
    'error.no-content': 'Aucun contenu disponible'
    

  },
  en: {
    'greeting': 'Hello',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.experience': 'Experience',
    'nav.studies': 'Studies',
    'nav.label': 'Navigation',
    'theme.toggle': 'Toggle theme',
    'portfolio.title': 'My Portfolio',
    'error.no-content': 'No content available'
  }
} as const;

export type Locale = keyof typeof ui;

export function getLang(locale: string | undefined): Locale {
    return locale && locale in ui ? (locale as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: keyof (typeof ui)[typeof defaultLocale]) => ui[locale][key];
}