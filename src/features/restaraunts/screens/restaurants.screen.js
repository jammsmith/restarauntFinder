import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Search } from '../components/search.component';
import { SafeArea } from '../../../components/utilities/safe-area.component';
import { LoadingIndicator } from '../../../components/utilities/loading-indicator.components';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

export const RestaurantsScreen = () => {
  const { restaurants, loading } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {
        loading
          ? <LoadingIndicator />
          : (
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
              keyExtractor={({ placeId }) => placeId}
            />
          )
      }
    </SafeArea>
  );
};
