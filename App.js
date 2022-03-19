import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaraunts/screens/restaurants.screen';

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  ${Platform.OS === 'android' && `padding-top: ${StatusBar.currentHeight}px`};
`;

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <RestaurantsScreen />
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </ThemeProvider>
  );
};

export default App;
