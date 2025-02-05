import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFormatedDatetime = () => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return now.toLocaleString('en-GB', options).replace(',', ' |');
};

export const getSelectedLanguage = async (): Promise<string | null> => {
  const language = await AsyncStorage.getItem('language');
  return language ? language : 'en'; // Return 'en' as the default language
};
