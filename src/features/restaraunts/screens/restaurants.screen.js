import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, loading } = useContext(RestaurantsContext);

  const handleCardPress = (item) => {
    navigation.navigate('restaurant-details', {
      restaurant: item
    });
  };

  return (
    <SafeArea>
      <Search />
      {
        loading
          ? <LoadingIndicator />
          : (
            <RestaurantList
              data={restaurants}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCardPress(item)}>
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              )}
              keyExtractor={({ placeId }) => placeId}
            />
          )
      }
    </SafeArea>
  );
};
