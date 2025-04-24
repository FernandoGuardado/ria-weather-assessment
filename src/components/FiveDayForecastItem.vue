<script setup lang="ts">
import type { List } from '../api/open-weather-map';

const { forecast } = defineProps<{
  forecast: List;
}>();
</script>

<template>
  <div class="five-day-forecast-item">
    <h2>
      {{ new Date(forecast.dt * 1000).toLocaleDateString([], { weekday: 'long' }) }}
    </h2>
  </div>
</template>