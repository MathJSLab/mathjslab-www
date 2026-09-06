export type Locale = 'en' | 'es' | 'pt';

const locales = ['en', 'es', 'pt'] as const;

const languageNames: Record<Locale, string> = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
};

const languageLabels: Record<Locale, { label: string; menu: string }> = {
    en: { label: 'Language', menu: 'Language' },
    es: { label: 'Idioma', menu: 'Idioma' },
    pt: { label: 'Idioma', menu: 'Idioma' },
};

const isLocale = (locale: string | null): locale is Locale => locales.includes(locale as Locale);

const detectLocale = (): Locale => {
    const documentLocale = document.documentElement.lang.split('-')[0];
    return isLocale(documentLocale) ? documentLocale : 'en';
};

class SiteI18n extends EventTarget {
    public readonly locales = [...locales] as Locale[];
    public readonly languageNames = languageNames;

    private currentLocale = detectLocale();

    public get locale(): Locale {
        return this.currentLocale;
    }

    public get page(): { language: { label: string; menu: string } } {
        return {
            language: languageLabels[this.currentLocale],
        };
    }

    public setLocale(locale: Locale): void {
        if (this.currentLocale === locale) {
            return;
        }
        this.currentLocale = locale;
        this.dispatchEvent(new Event('languagechange'));
    }
}

const i18n = new SiteI18n();

export default i18n;
