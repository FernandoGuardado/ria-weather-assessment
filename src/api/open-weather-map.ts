import { ref } from "vue";

export interface FiveDayForecast {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: Date;
  rain?: Rain;
}

export interface Clouds {
  all: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Rain {
  "3h": number;
}

export interface Snow {
  "3h": number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",  // day
  N = "n",  // night
}

export interface Weather {
  id: number;
  main: MainEnum;
  description: Description;
  icon: string;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  LightRain = "light rain",
  OvercastClouds = "overcast clouds",
  ScatteredClouds = "scattered clouds",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
  Rain = "Rain",
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

const API_KEY: string = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const FIVE_DAY_FORECAST_URL = `${BASE_URL}/forecast`;
export const ICON_URL = 'https://openweathermap.org/img/wn';

export class OpenWeatherMap {
  isLoading = ref(false);
  data = ref<FiveDayForecast | null>(null);
  error = ref<string | null>(null);
  units = ref<'standard' | 'metric' | 'imperial'>('metric');

  async getFiveDayForecast(
    lat: number,
    lon: number,
    cnt?: number,
  ) {
    if (this.isLoading.value) {
      return;
    }

    console.log('getFiveDayForecast', lat, lon, cnt);
    this.isLoading.value = true;
    this.error.value = null;
    console.log('HERE')

    const url = new URL(FIVE_DAY_FORECAST_URL);
    const params: { [key: string]: string } = {
      lat: lat.toString(),
      lon: lon.toString(),
      appid: API_KEY,
      units: this.units.value,
    };

    if (cnt) {
      params.cnt = cnt.toString();
    }

    url.search = new URLSearchParams(params).toString();
    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.data.value = data;
      return data as FiveDayForecast;
    } catch (error) {
      this.error.value = error instanceof Error ? error.message : 'An unknown error occurred';
    } finally {
      this.isLoading.value = false;
    }
  }
}