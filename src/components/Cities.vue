<script setup lang="ts">
import type { City } from '../App.vue';
import CityListItem from './CityListItem.vue';

defineProps<{
  cities: City[];
  selectedCity: City;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCity', city: City): void;
}>()

const handleCitySelect = (city: City) => {
  emit('update:selectedCity', city);
}
</script>

<template>
  <div id="cities">
    <div class="city-list" v-for="(city, index) in cities" :key="index">
      <CityListItem :city :selectedCity="selectedCity.name" @update:selectedCity="handleCitySelect" />
    </div>
  </div>
</template>
