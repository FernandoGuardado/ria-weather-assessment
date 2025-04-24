<script setup lang="ts">
import { ICON_URL, type City, type List } from '../api/open-weather-map';

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
    <img :src="`${ICON_URL}/${forecast.weather[0].icon}@2x.png`" :alt="forecast.weather[0].description"
      :title="forecast.weather[0].description" :class="`icon-${forecast.weather[0].icon}`" />
    <h1>
      <!-- {{ new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} -->
      <!-- use city -->
      <!-- {{ city.timezone }} -->
      {{ new Date(forecast.dt * 1000 + city.timezone * 1000).toLocaleTimeString([], {
        hour: '2-digit', minute: '2-digit'
      }) }}
    </h1>
  </div>
</template>