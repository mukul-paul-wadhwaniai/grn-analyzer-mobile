import type { AxiosInstance } from 'axios';
import { createContext, useContext } from 'react';

export type AxiosConfigContextProps = {
  axiosInstance: AxiosInstance;
  language: string;
  jwtToken: string;
  setLanguage: (lang: string) => void;
  setJwtToken: (token: string) => void;
};

export const AxiosConfigContext = createContext<
  AxiosConfigContextProps | undefined
>(undefined);

export const useAxios = () => {
  const context = useContext(AxiosConfigContext);
  if (!context) {
    throw new Error('useAxios must be used within an AxiosConfigProvider');
  }
  return context;
};
