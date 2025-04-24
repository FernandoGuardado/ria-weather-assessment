import citiesMetadataCsv from '../../data/cities_20000.csv?raw';

export interface CityRecord {
  id: number;
  city: string;
  stateCode: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  longitude: number;
}

export interface CityRecords {
  [key: string]: CityRecord;
}

export function parseCities(): CityRecords {
  return citiesMetadataCsv.trim().split('\n').slice(1).reduce((acc, line) => {
    const [id, city, stateCode, countryCode, countryName, lat, lon] = line.split(',');

    acc[city] = {
      id: parseInt(id),
      city,
      stateCode,
      countryCode,
      countryName,
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
    };

    return acc;
  }, {} as CityRecords);
}
export const citiesMetadata = parseCities();

