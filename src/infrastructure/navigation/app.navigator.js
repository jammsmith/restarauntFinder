import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { MapScreen } from '../../features/map/screens/map.screen';
import { SettingsScreen } from '../../features/settings/screens/settings.screen';

import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
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
        <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
