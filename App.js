import 'react-native-gesture-handler'; // has to be above everything
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import { AppNavigator } from './src/infrastructure/navigation/app.navigator';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { theme } from './src/infrastructure/theme';

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <ThemeProvider theme={theme}>
          <AppNavigator />
          <StatusBar style='auto' />
        </ThemeProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
};

export default App;
