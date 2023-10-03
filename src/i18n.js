import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_en from '../src/i18n/en/resources.json'
import common_fr from '../src/i18n/fr/resources.json'
import common_es from '../src/i18n/es/resources.json'
import common_de from '../src/i18n/de/resources.json'

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: common_en
      },
      fr: {
        common: common_fr
      },
      de:{
        common: common_de
      },
      es:{
        common: common_es
      }
    },
    fallbackLng: 'es',
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    
    translateFuncName: 't',
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        console.log(value, lng)
        return value;
      }
    }
  });

export default i18n;


