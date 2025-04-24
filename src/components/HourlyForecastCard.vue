<script setup lang="ts">
import { type City, type List } from '../api/open-weather-map';
import WeatherIcon from './WeatherIcon.vue';

const { forecast, city } = defineProps<{
  forecast: List;
  city: City
}>();
</script>


<template>
  <div class="hourly-forecast-card">
    <h1>
      {{ Math.round(forecast.main.temp) }}°C
    </h1>
    <WeatherIcon :icon="forecast.weather[0].icon" :description="forecast.weather[0].description" />
    <h1>
      {{ new Date(forecast.dt * 1000 + city.timezone * 1000).toLocaleTimeString([], {
        hour: '2-digit', minute: '2-digit'
      }) }}
    </h1>
  </div>
</template>