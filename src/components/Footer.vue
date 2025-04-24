<script setup lang="ts">
defineProps<{
  lastUpdated: Date;
}>();
</script>

<template>
  <div id="footer">
    <p>Last Updated: {{ lastUpdated.toDateString() }}</p>
  </div>
</template>
