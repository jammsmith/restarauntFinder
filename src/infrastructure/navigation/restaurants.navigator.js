import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaraunts/screens/restaurants.screen';
import { RestaurantDetailsScreen } from '../../features/restaraunts/screens/restaurant-details.screen';

const Stack = createStackNavigator();

export const RestaurantsNavigator = () => {
  const transitionPresets = {
    ios: CardStyleInterpolators.forModalPresentationIOS,
    android: CardStyleInterpolators.forFadeFromBottomAndroid
  };
  const options = {
    cardStyleInterpolator: transitionPresets[Platform.OS]
  };

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='restaurant-main'
        component={RestaurantsScreen}
      />
      <Stack.Screen
        name='restaurant-details'
        component={RestaurantDetailsScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};
