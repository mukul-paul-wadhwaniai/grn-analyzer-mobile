import axios from 'axios';
import { AxiosConfigContext } from './AxiosConfigContext';
import { ReactNode } from 'react';
import { QueryConfig } from '../types';

interface AxiosConfigProviderProps {
  children: ReactNode;
  config: QueryConfig;
}

export const AxiosConfigProvider = ({
  children,
  config,
}: AxiosConfigProviderProps) => {
  const axiosInstance = axios.create({
    baseURL: config.baseURL,
    headers: {
      'Accept-Language': 'en',
      Authorization: `Bearer ${config.bearer}`,
      'Content-Type': 'application/json',
      'X-Language': 'en',
    },
    maxBodyLength: Infinity,
  });

  const providerValue = {
    axiosInstance,
    angwId: config.angwId,
    apiEndpointTail: config.apiEndpointTail,
  };

  return (
    <AxiosConfigContext.Provider value={providerValue}>
      {children}
    </AxiosConfigContext.Provider>
  );
};
