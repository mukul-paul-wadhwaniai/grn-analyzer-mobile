import type { AxiosInstance } from 'axios';
import { createContext, useContext } from 'react';

interface AxiosConfigContextProps {
  axiosInstance: AxiosInstance;
  angwId: string;
  apiEndpointTail?: string;
}

export const AxiosConfigContext = createContext<
  AxiosConfigContextProps | undefined
>(undefined);

export const useAxios = () => {
  return useContext(AxiosConfigContext);
};
