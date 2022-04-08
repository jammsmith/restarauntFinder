import camelize from 'camelize';

import { locations } from './location.mock';

export const locationRequest = (searchTerm) => (
  new Promise((resolve, reject) => {
    const location = locations[searchTerm];

    location
      ? resolve(location)
      : reject(new Error('Failed to get location for', searchTerm));
  })
);

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
