import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';

import { restaurantRequest, restaurantTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext);

  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestaurants = useCallback(async (loc) => {
    try {
      setLoading(true);
      setRestaurants([]);
      const { results } = await restaurantRequest(loc);
      setRestaurants(restaurantTransform(results));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    if (location) {
      getRestaurants(`${location.lat},${location.lng}`);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{
      restaurants,
      loading,
      error
    }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
