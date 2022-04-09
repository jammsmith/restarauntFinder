import React from 'react';
import { View, Text } from 'react-native';

import { SafeArea } from '../../../components/utilities/safe-area.component';

export const SettingsScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>settings screen</Text>
        <Text>bottom</Text>
      </View>
    </SafeArea>
  );
};
