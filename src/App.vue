<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
])
const selectedCity = ref(cities.value[0])
const lastUpdated = ref(new Date())

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