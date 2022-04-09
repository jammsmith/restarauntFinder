import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = styled.View`
  z-index: 999;
  width: 100%;
  position: absolute;
  top: 50px;
  padding: 0 16px;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    if (keyword !== searchKeyword) {
      setSearchKeyword(keyword);
    }
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a location'
        icon='map'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={setSearchKeyword}
      />
    </SearchContainer>
  );
};
