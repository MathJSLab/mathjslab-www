import en from './i18n-en.js';
import es from './i18n-es.js';
import pt from './i18n-pt.js';
import { IntlMessageFormat } from 'intl-messageformat';

const source = {
    en,
    es,
    pt,
};

const formatValue = (value, locale, key = '') => {
    if (typeof value === 'string') {
        if (key.endsWith('Html') || key.endsWith('MathML')) {
            return value;
        }
        return new IntlMessageFormat(value, locale).format();
    }
    if (Array.isArray(value)) {
        return value.map((entry) => formatValue(entry, locale));
    }
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([entryKey, entry]) => [entryKey, formatValue(entry, locale, entryKey)]));
    }
    return value;
};

const pages = Object.fromEntries(Object.entries(source).map(([locale, values]) => [locale, formatValue(values, locale)]));

export default {
    defaultLocale: 'en',
    locales: Object.keys(source),
    languageNames: Object.fromEntries(Object.entries(source).map(([locale, values]) => [locale, values.languageName])),
    pages,
};
