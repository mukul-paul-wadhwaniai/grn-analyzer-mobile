import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/locals/en.json';
import hi from './src/locals/hi.json';
import mr from './src/locals/mr.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const initI18n = async () => {
  const storedLanguage = await AsyncStorage.getItem('language');
  const defaultLanguage = storedLanguage || 'en';
  i18next.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      mr: { translation: mr },
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

export { i18next };
