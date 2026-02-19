<script setup lang="ts">
import { useListingStore } from "../stores/listingStore";
import Card from "./Card.vue";
import Loading from "@/components/Loading.vue";
import Take from "./Take.vue";
import Filters from "./Filters.vue";

const listingStore = useListingStore();
</script>

<template>
  <h1 class="text-2xl font-bold my-3 text-center text-secondary">- SHOWCASE -</h1>

  <div class="flex justify-end gap-5 mb-3">
    <Filters />
    <Take />
  </div>

  <section
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
  >
    <Card v-for="item in listingStore.lists" :key="item.id" :item="item" />
  </section>

  <Loading v-if="listingStore.loading" />
</template>
<style scoped></style>
