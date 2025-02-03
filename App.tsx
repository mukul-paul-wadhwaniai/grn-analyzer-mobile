import QueryServiceProvider from '@context/QueryServiceProvider';
import AppNavigator from '@navigation/AppNavigator';
import { initI18n } from './i18n';

initI18n();

export default function App() {
  console.log(process.env.EXPO_PUBLIC_API_ENDPOINT_SERVER);
  const baseURL = 'https://ptbetaapi.dl6.in/api';
  const bearer =
    'ecd93e58c3e28c300fc8266ed0380d606c6bc9c7b9a2d525980c17329c768265';
  const angwId = '1739422';
  const apiEndpointTail = '';

  return (
    <QueryServiceProvider config={{ baseURL, bearer, angwId, apiEndpointTail }}>
      <AppNavigator />
    </QueryServiceProvider>
  );
}
