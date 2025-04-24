<script setup lang="ts">
import FiveDayForecast from './FiveDayForecast.vue';
import HourlyForecast from './HourlyForecast.vue';
import { OpenWeatherMap } from '../api/open-weather-map';
import { onBeforeMount, watch } from 'vue';
import type { City } from '../App.vue';

const { city } = defineProps<{
  city: City;
  selectedCity: City;
}>();

const api = new OpenWeatherMap();

watch(() => city, async (newCity) => {
  try {
    await api.getFiveDayForecast(newCity.lat, newCity.lon);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}, { immediate: true });

onBeforeMount(async () => {
  try {
    await api.getFiveDayForecast(city.lat, city.lon);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
})
</script>

<template>
  <div id="weather">
    <div v-if="!api.data.value">
      <h1>Loading...</h1>
    </div>
    <template v-else-if="api.data.value.list">
      <HourlyForecast :forecast="api.data.value" />
      <FiveDayForecast :forecast="api.data.value" />
    </template>
  </div>
</template>
