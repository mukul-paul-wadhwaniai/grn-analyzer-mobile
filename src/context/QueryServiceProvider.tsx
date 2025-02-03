import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ConnectivityProvider } from './ConnectivityProvider';
import { AxiosConfigProvider } from './AxiosConfigProvider';
import { ReactNode } from 'react';
import { QueryConfig } from '../types';

const queryClient = new QueryClient();

interface QueryServiceProviderProps {
  children: ReactNode;
  config: QueryConfig;
}

const QueryServiceProvider = ({
  children,
  config,
}: QueryServiceProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectivityProvider>
        <AxiosConfigProvider config={config}>{children}</AxiosConfigProvider>
      </ConnectivityProvider>
    </QueryClientProvider>
  );
};

export default QueryServiceProvider;
