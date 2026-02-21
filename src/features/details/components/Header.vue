<script setup lang="ts">
import type { DetailResponse } from "../types/detail";

defineProps<{
  listing: DetailResponse | null;
}>();
</script>

<template>
  <h1 class="text-xl md:text-2xl font-bold mb-5 leading-tight">
    {{ listing?.title }}
  </h1>

  <p
    class="bg-gray-100 rounded-md font-bold text-secondary mb-2 p-2 shadow-sm"
  >
    <i class="pi pi-map-marker"></i> {{ listing?.location.cityName }} /
    {{ listing?.location.townName }}
  </p>
</template>
