import axios from 'axios';
import { AxiosConfigContext } from './AxiosConfigContext';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { QueryConfig } from '../types';

interface AxiosConfigProviderProps {
  children: ReactNode;
  config: QueryConfig;
}

export const AxiosConfigProvider = ({ children }: AxiosConfigProviderProps) => {
  const [jwtToken, setJwtTokenState] = useState('');
  const [language, setLanguageState] = useState('hi');

  const jwtTokenMemo = useMemo(() => jwtToken, [jwtToken]);
  const languageMemo = useMemo(() => language, [language]);

  const setJwtToken = useCallback((token: string) => {
    setJwtTokenState(token);
  }, []);

  const setLanguage = useCallback((lang: string) => {
    setLanguageState(lang);
  }, []);

  const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_ENDPOINT_SERVER,
    headers: {
      'Accept-Language': 'en',
      Authorization: `Bearer ${jwtToken}`,
      'Content-Type': 'application/json',
      'X-App-Lang': language,
    },
    maxBodyLength: Infinity,
  });

  const providerValue = {
    axiosInstance,
    language: languageMemo,
    jwtToken: jwtTokenMemo,
    setLanguage,
    setJwtToken,
  };

  return (
    <AxiosConfigContext.Provider value={providerValue}>
      {children}
    </AxiosConfigContext.Provider>
  );
};
