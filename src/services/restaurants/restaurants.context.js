import React, { useState, useEffect, createContext } from 'react';

import { restaurantRequest, restaurantTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRestaurants = async () => {
    try {
      const { results } = await restaurantRequest();
      setRestaurants(restaurantTransform(results));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

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
