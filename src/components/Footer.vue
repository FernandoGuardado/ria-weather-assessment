<script setup lang="ts">
defineProps<{
  lastUpdated: Date;
}>();
</script>

<template>
  <div id="footer">
    <p class="made-by">Made by FernandoGuardado {{ `<3` }} </p>
        <p>Last Updated: {{ lastUpdated.toLocaleString() }}</p>
  </div>
</template>
