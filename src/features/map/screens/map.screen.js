import React, { useState, useEffect, useContext } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import MapView from 'react-native-maps';

import { Search } from '../components/search.component.js';
import { MapCallout } from '../components/map-callout.component.js';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

const { width, height } = Dimensions.get('window');
const screenWidth = `${width}px`;
const screenHeight = `${height}px`;

const MapContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
const Map = styled(MapView)`
  width: ${screenWidth};
  height: ${screenHeight};
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <MapContainer>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}
      >
        {
          restaurants.map((restaurant, index) => (
            <MapView.Marker
              key={index}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng
              }}
            >
              <MapView.Callout
                onPress={() => navigation.navigate('restaurant-details', {
                  restaurant
                })}
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          ))
        }
      </Map>
    </MapContainer>
  );
};
