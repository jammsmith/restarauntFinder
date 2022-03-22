import React, { useState, useContext } from 'react';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Spacer } from '../../../components/spacer/spacer.component';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

export const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView>
      <Spacer position='all' size='medium'>
        <Spacer position='bottom' size='large'>
          <Searchbar
            placeholder='Search'
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </Spacer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={({ placeId }) => placeId}
        />
      </Spacer>
    </SafeAreaView>
  );
};
