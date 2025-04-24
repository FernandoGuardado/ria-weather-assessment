<script setup lang="ts">
import type { List } from '../api/open-weather-map';
import FiveDayForecastItem from './FiveDayForecastItem.vue';

const { forecast } = defineProps<{
  forecast: List[];
}>();
</script>

<template>
  <div id="five-day-forecast" class="content-container">
    <h2>5 Day Forecast</h2>

    <div class="five-day-forecast-item-container">
      <FiveDayForecastItem v-for="f in forecast" :key="f.dt" :forecast="f" />
    </div>
  </div>
</template>