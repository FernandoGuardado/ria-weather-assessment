<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import Cities from './components/Cities.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Weather from './components/Weather.vue'

export type City = {
  name: string
  lat: number
  lon: number
}

const cities = ref<City[]>([
  { name: 'Rio de Janeiro', lat: -22.90278, lon: -43.2075 },
  { name: 'Beijing', lat: 39.9075, lon: 116.39723 },
  { name: 'Los Angeles', lat: 34.05223, lon: -118.24368 },
  // { name: 'New York', lat: 40.71278, lon: -74.00594 },
  // { name: 'Tokyo', lat: 35.6895, lon: 139.69171 },
  // { name: 'London', lat: 51.50722, lon: -0.1275 },
  // { name: 'Paris', lat: 48.85661, lon: 2.35222 },
  // { name: 'Berlin', lat: 52.52437, lon: 13.41053 },
  // { name: 'Moscow', lat: 55.75583, lon: 37.6173 },
  // { name: 'São Paulo', lat: -23.5505, lon: -46.6333 },
  // { name: 'Buenos Aires', lat: -34.6033, lon: -58.3817 },
  // { name: 'Cape Town', lat: -33.9258, lon: 18.4233 },
  // { name: 'Sydney', lat: -33.86785, lon: 151.20732 },
  // { name: 'Dubai', lat: 25.276987, lon: 55.296249 }
])
const selectedCity = ref(cities.value[0])
const lastUpdated = ref(new Date())

watch(selectedCity, () => {
  lastUpdated.value = new Date()
})

onMounted(() => {
  console.log('App mounted')
  console.log('Selected City:', selectedCity.value)
  console.log('Cities:', cities.value)
})
</script>

<template>
  <div id="app">
    <Navbar />
    <Cities :cities="cities" v-model:selectedCity="selectedCity" />
    <Weather :city="selectedCity" :selectedCity />
    <Footer :lastUpdated />
  </div>
</template>