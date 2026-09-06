import appearanceModeTemplate from './components/appearance-mode/appearance-mode.template.html';
import languageSwitcherTemplate from './components/language-switcher/language-switcher.template.html';

const appendTemplate = (markup: string): void => {
    const templateId = markup.match(/<template\s+id="([^"]+)"/)?.[1];
    if (templateId && !document.getElementById(templateId)) {
        document.body.insertAdjacentHTML('beforeend', markup);
    }
};

appendTemplate(languageSwitcherTemplate);
appendTemplate(appearanceModeTemplate);

await import('./components/language-switcher/language-switcher.component');
await import('./components/appearance-mode/appearance-mode.component');

type ThemeMode = 'dark' | 'light';

const mediaQuery = globalThis.matchMedia?.('(prefers-color-scheme: dark)');

const getThemeMode = (): ThemeMode => {
    const theme = document.documentElement.dataset.theme;
    if (theme === 'dark' || theme === 'light') {
        return theme;
    }
    return mediaQuery?.matches ? 'dark' : 'light';
};

const themedHref = (href: string, mode: ThemeMode): string => `${href}${href.includes('?') ? '&' : '?'}theme=${mode}`;

const syncThemeIcons = (): void => {
    const mode = getThemeMode();
    document.querySelectorAll<HTMLLinkElement>('link[data-appearance-icon]').forEach((icon) => {
        const href = mode === 'dark' ? icon.dataset.darkHref : icon.dataset.lightHref;
        if (href) {
            icon.href = themedHref(href, mode);
        }
    });
};

syncThemeIcons();

new MutationObserver(syncThemeIcons).observe(document.documentElement, {
    attributeFilter: ['data-theme'],
    attributes: true,
});

mediaQuery?.addEventListener('change', () => {
    if (!document.documentElement.dataset.theme) {
        syncThemeIcons();
    }
});
