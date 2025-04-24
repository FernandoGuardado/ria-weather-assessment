<script setup lang="ts">
import type { City } from '../App.vue';
import CityListItem from './CityListItem.vue';

defineProps<{
  cities: City[];
  selectedCity: City;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCity', city: City): void;
  (e: 'refresh-cities'): void;
}>()

const handleCitySelect = (city: City) => {
  emit('update:selectedCity', city);
}
</script>

<template>
  <div id="cities">
    <section>
      <CityListItem v-for="(city, index) in cities" :key="index" :city="city" :selectedCity="selectedCity.name"
        @update:selectedCity="handleCitySelect" :class="index === (cities.length - 1) && `last-item`" />
    </section>
    <button id="refresh" @click="emit('refresh-cities')">Refresh</button>
  </div>
</template>
