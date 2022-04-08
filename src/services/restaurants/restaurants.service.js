import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const restaurantRequest = async (location) => (
  new Promise((resolve, reject) => {
    const locationData = mocks[location];

    locationData
      ? setTimeout(() => resolve(locationData), 2000)
      : reject(new Error('No location found for', location));
  })
);

export const restaurantTransform = (results = []) => {
  const mappedResults = results.map(restaurant => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY'
    };
  });

  return camelize(mappedResults);
};
