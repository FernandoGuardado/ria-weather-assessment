<script setup lang="ts">
import { ICON_URL } from '../api/open-weather-map';

defineProps<{
  icon: string;
  description: string;
}>();
</script>

<template>
  <img :src="`${ICON_URL}/${icon}@2x.png`" :alt="description" :title="description" />
</template>