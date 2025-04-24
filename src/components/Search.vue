<script setup lang="ts">
import { ref, watch } from 'vue';
import { citiesMetadata, type CityRecords } from '../utils/csv'

const emit = defineEmits<{
  (e: 'search', city: string): void;
}>()

const handleCitySelect = (city: string) => {
  emit('search', city);
  search.value = ''
  metadata.value = citiesMetadata;
}

const search = ref('')

const metadata = ref(
  citiesMetadata
)

watch(() => search.value, (newSearch) => {
  if (newSearch.length > 0) {
    metadata.value = Object.values(citiesMetadata)
      .filter((c) => {
        return c.city.toLowerCase().includes(newSearch.toLowerCase());
      })
      .slice(0, 30)
      .reduce((obj: CityRecords, city) => {
        obj[city.city] = city;
        return obj;
      }, {});
  } else {
    metadata.value = citiesMetadata;
  }
});
</script>

<template>
  <div id="search">
    <input class="search-input" type="text" v-model="search" placeholder="Search for a city..." />
    <ul v-if="search" class="search-results">
      <li class="search-result-item" v-for="c in metadata" :key="c.city" @click="handleCitySelect(c.city)">
        {{ c.city }} {{ c.stateCode }}, {{ c.countryName }}
      </li>
    </ul>
  </div>
</template>