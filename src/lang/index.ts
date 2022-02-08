import { createI18n } from 'vue-i18n'
// User defined lang
import frLocale from './fr'


const messages = {
    fr: {
        ...frLocale
    }
}

export const getLocale = () => {
    // local storage
    const lang = localStorage.getItem('language')
    if (lang !== null) {
        return lang
    }

    // browser
    const language = navigator.language.toLowerCase()
    const locales = Object.keys(messages)
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            document.documentElement.lang = locale
            return locale
        }
    }

    // default
    return 'fr'
}

const i18n = createI18n({
    locale: getLocale(),
    fallbackLocale: ['en'],
    messages
})

export default i18n