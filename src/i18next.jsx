import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import uzt from './lang/Uz.json'
import rut from './lang/Ru.json'
import ent from './lang/En.json'
i18n
  .use(initReactI18next)
  .init({
    resources:{
        uz:{
            translation:uzt
        },ru:{
            translation:rut
        },en:{
            translation:ent
        }
    },
    lng: 'en', // Dastlabki til

    fallbackLng: 'en', // Dastlabki til
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Tarjima faylining to'g'ri yo'li
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
