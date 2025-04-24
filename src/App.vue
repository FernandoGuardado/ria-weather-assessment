<script setup lang="ts">
import { ref, watch } from 'vue'
import Cities from './components/Cities.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Weather from './components/Weather.vue'
import { OpenWeatherMap } from './api/open-weather-map'
import { citiesMetadata } from './utils/csv'

export type City = {
  name: string
  lat: number
  lon: number
}

const defaultCities = [
  "Rio de Janeiro",
  "Beijing",
  "Los Angeles",
]

const cities = ref<City[]>([])
defaultCities.forEach((city) => {
  const record = citiesMetadata[city]
  if (record) {
    cities.value.push({
      name: record.city,
      lat: record.latitude,
      lon: record.longitude
    })
  } else {
    console.warn(`City ${city} not found in metadata`)
  }
})

const api = new OpenWeatherMap();
const selectedCity = ref(cities.value[0])
const lastUpdated = ref(new Date())

const handleRefreshCities = async () => {
  try {
    await api.getFiveDayForecast(selectedCity.value.lat, selectedCity.value.lon)
    lastUpdated.value = new Date()
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

const handleSearch = async (cityName: string) => {
  const city = citiesMetadata[cityName]
  if (city) {
    selectedCity.value = {
      name: city.city,
      lat: city.latitude,
      lon: city.longitude
    }
    await handleRefreshCities()
    cities.value.push({
      name: city.city,
      lat: city.latitude,
      lon: city.longitude
    })
  } else {
    console.warn(`City ${cityName} not found in metadata`)
  }
}

watch(selectedCity, () => {
  lastUpdated.value = new Date()
})
</script>

<template>
  <div id="app">
    <Navbar @search="handleSearch" />
    <Cities :cities="cities" v-model:selectedCity="selectedCity" @refresh-cities="handleRefreshCities" />
    <Weather :city="selectedCity" :selectedCity :api />
    <Footer :lastUpdated />
  </div>
</template>