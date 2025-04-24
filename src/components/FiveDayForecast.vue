<script setup lang="ts">
import { computed } from 'vue';
import type { FiveDayForecast } from '../api/open-weather-map';
import FiveDayForecastItem from './FiveDayForecastItem.vue';

const { forecast } = defineProps<{
  forecast: FiveDayForecast;
}>();

const dailyForecast = computed(() => {
  return forecast.list.filter((_, index) => {
    return index % 8 === 0;
  })
})
</script>

<template>
  <div id="five-day-forecast" class="content-container">
    <h2>5 Day Forecast</h2>

    <div class="five-day-forecast-item-container">
      <FiveDayForecastItem v-for="f in dailyForecast" :key="f.dt" :forecast="f" />
    </div>
  </div>
</template>