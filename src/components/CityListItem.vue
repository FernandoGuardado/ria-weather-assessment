<script setup lang="ts">
import type { City } from '../App.vue';

defineProps<{
  city: City;
  selectedCity: string;
}>();

const emit = defineEmits<{
  (e: 'update:selectedCity', city: City): void;
}>();
</script>

<template>
  <div class="city-list-item" :class="{ selected: city.name === selectedCity }"
    @click="emit('update:selectedCity', city)">
    <h2>{{ city.name }}</h2>
  </div>
</template>