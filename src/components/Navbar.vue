<script lang="ts" setup>
import Search from './Search.vue';

const emit = defineEmits<{
  (e: 'search', city: string): void;
}>();
</script>

<template>
  <div id="navbar">
    <h1>Simple Weather</h1>
    <Search @search="(city) => emit('search', city)" />
  </div>
</template>
