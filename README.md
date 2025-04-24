# ria open weather map api assessment
# summary
This project is a simple weather app that uses the Open Weather Map API to display the current weather for a given city. It is built with Vite, Vue, and TypeScript. You are able to pick from a list of 3 predefined cities or search for a city of your choice using metadata from https://www.weatherbit.io/api/meta, cities > 15,000 population ~20,000 cities.

The app displays both an hourly and daily forecast; due to restrictions on the free tier of the Open Weather Map API, the hourly forecast is restricted to every 3 hours, and the daily forecast is restricted to 5 days. 

I used pnpm to manage the dependencies of this project, if you'd like to use npm or yarn, delete the `pnpm-lock.yaml` file and run the following commands with the package manager of your choice.

# steps to run & build project
### install dependencies
```bash
pnpm install
```
### run dev project make sure you have a .env file with variables in .env.template
```bash
pnpm dev
```
### you can also add it directly to your run dev script
```bash
VITE_OPEN_WEATHER_MAP_API_KEY=open_weather_map_api_key pnpm dev
```
### build
```bash
pnpm build
``` 
### or 
```bash
VITE_OPEN_WEATHER_MAP_API_KEY=open_weather_map_api_key pnpm build
```
### run
```bash
pnpm preview
```