import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'SpaceGrotesk-Regular': require('../assets/fonts/space-grotesk/SpaceGrotesk-Regular.otf'),
        'SpaceGrotesk-Bold': require('../assets/fonts/space-grotesk/SpaceGrotesk-Bold.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return fontsLoaded;
}
