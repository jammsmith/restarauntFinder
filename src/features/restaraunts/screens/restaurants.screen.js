import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeArea } from '../../../components/utilities/safe-area.component';

import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const Search = styled(Searchbar)`
  margin: 0 ${({ theme }) => theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

export const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeArea>
      <Search
        placeholder='Search'
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={({ placeId }) => placeId}
      />
    </SafeArea>
  );
};
