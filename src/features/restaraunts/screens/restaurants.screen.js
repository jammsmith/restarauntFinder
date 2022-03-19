import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { RestaurantComponent } from '../components/restaurant.component.js';

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
const ListContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        {
          [1, 2, 3].map((item) => (
            <RestaurantComponent key={item} />
          ))
        }
      </ListContainer>
    </>
  );
};
