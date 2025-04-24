<script setup lang="ts">
import { watch } from 'vue';
import type { City } from '../App.vue';
import CityListItem from './CityListItem.vue';

const { selectedCity } = defineProps<{
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

watch(() => selectedCity, () => {
  setTimeout(() => {
    const citiesList = document.querySelector('.cities-list');
    if (citiesList) {
      const left = citiesList.scrollWidth - citiesList.clientWidth;
      citiesList.scrollTo({
        left: left,
        behavior: 'smooth',
      });
    }
  }, 200);
}, { immediate: false });
</script>

<template>
  <div id="cities">
    <section class="cities-list">
      <CityListItem v-for="(city, index) in cities" :key="index" :city="city" :selectedCity="selectedCity.name"
        @update:selectedCity="handleCitySelect" :class="index === (cities.length - 1) && `last-item`" />
    </section>
    <button id="refresh" @click="emit('refresh-cities')">Refresh</button>
  </div>
</template>
