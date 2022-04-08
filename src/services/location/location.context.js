import React, { useState, useEffect, createContext, useCallback } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('san francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword = 'Antwerp') => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  const getLocation = useCallback(async () => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    try {
      const locationData = await locationRequest(keyword.toLowerCase());
      const transformedLocationData = locationTransform(locationData);
      setLocation(transformedLocationData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [keyword]);

  useEffect(() => {
    getLocation();
  }, [keyword, getLocation]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
