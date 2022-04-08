import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { theme } from './src/infrastructure/theme';
import {
  MapScreen,
  RestaurantsScreen,
  SettingsScreen
} from './src/features/restaraunts/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  const navigationIconNames = {
    restaurants: { standard: 'md-restaurant-outline', focused: 'md-restaurant-sharp' },
    settings: { standard: 'md-settings-outline', focused: 'md-settings-sharp' },
    map: { standard: 'map-outline', focused: 'map' }
  };
  const getIconName = (name, focused) => {
    const item = navigationIconNames[name.toLowerCase()];
    return focused ? item.focused : item.standard;
  };

  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  const iconName = getIconName(route.name, focused);
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
              })}
            >
              <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
              <Tab.Screen name='Settings' component={SettingsScreen} />
              <Tab.Screen name='Map' component={MapScreen} />
            </Tab.Navigator>
          </NavigationContainer>
          <StatusBar style='auto' />
        </ThemeProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
};

export default App;
