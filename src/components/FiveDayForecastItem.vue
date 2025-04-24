<script setup lang="ts">
import type { List } from '../api/open-weather-map';
import WeatherIcon from './WeatherIcon.vue';

const { forecast } = defineProps<{
  forecast: List;
}>();
</script>

<template>
  <div class="five-day-forecast-item">
    <WeatherIcon :icon="forecast.weather[0].icon" :description="forecast.weather[0].description" />
    <div class="five-day-forecast-details">
      <h2>
        {{ new Date(forecast.dt * 1000).toLocaleDateString([], {
          weekday: 'short',
          month: 'long',
          day: '2-digit'
        }) }}
      </h2>
      <h3>{{ forecast.weather[0].description }}</h3>
    </div>
    <h2>
      {{ Math.round(forecast.main.temp_max) }}°C / {{ Math.round(forecast.main.temp_min) }}°C
    </h2>
  </div>
</template>