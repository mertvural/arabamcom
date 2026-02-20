<script setup lang="ts">
import { useListingStore } from "../stores/listing";
import Card from "./Card.vue";
import Take from "./Take.vue";
import Filters from "./Filters.vue";
import { storeToRefs } from "pinia";
import { Language } from "@/languages/en";

const { lists } = storeToRefs(useListingStore());
</script>

<template>
  <h1 class="text-2xl font-bold my-3 text-center text-secondary">
    - SHOWCASE -
  </h1>

  <div class="flex justify-end gap-5 mb-3">
    <Filters />
    <Take />
  </div>

  <section
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
  >
    <Card v-for="item in lists" :key="item.id" :item="item" />
  </section>

  <p
    v-if="lists?.length === 0"
    class="text-center text-secondary font-medium bg-gray-100 w-full p-10 rounded-lg border border-gray-200 shadow-md"
  >
    {{ Language.NO_RESULTS_FOUND }}
  </p>
</template>
<style scoped></style>
