import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantRequest = (location = '37.7749295,-122.4194155') => (
  new Promise((resolve, reject) => {
    const locationData = mocks[location];
    locationData
      ? resolve(locationData)
      : reject(new Error('No location found for', location));
  })
);

export const restaurantTransform = (results = []) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    restaurant.address = restaurant.vicinity;
    delete restaurant.vicinity;

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
    };
  });
  return camelize(mappedResults);
};
