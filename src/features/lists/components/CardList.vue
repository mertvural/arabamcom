<script setup lang="ts">
import { useListingStore } from "../stores/listingStore";
import Card from "./Card.vue";
import Loading from "@/components/Loading.vue";

const listingStore = useListingStore();
</script>

<template>
  <h1 class="text-2xl font-bold my-5 text-center text-secondary">- VİTRİN -</h1>
  <section class="grid grid-cols-6 gap-5">
    <Card v-for="item in listingStore.lists" :key="item.id" :item="item" />
  </section>
  <Loading v-if="listingStore.loading" />
</template>
<style scoped></style>
