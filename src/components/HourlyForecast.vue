<script setup lang="ts">
import { computed } from 'vue';
import type { FiveDayForecast, List } from '../api/open-weather-map';
import HourlyForecastCard from './HourlyForecastCard.vue';

const { forecast } = defineProps<{
  forecast: FiveDayForecast;
}>();

const dailyForecast = computed(() => {
  return forecast.list.slice(0, 9).map((item) => item);
})
</script>

<template>
  <div id="hourly-forecast" class="content-container">
    <h2>Hourly Forecast</h2>

    <div class="hourly-forecast-item-container">
      <HourlyForecastCard v-for="f in dailyForecast" :key="f.dt" :city="forecast.city" :forecast="f" />
    </div>
  </div>
</template>
