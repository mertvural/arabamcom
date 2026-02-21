<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useListingStore } from "./stores/listing";
import CardList from "./components/CardList.vue";

const listingStore = useListingStore();

onBeforeMount(async () => {
  await listingStore.fetchList({
    ...listingStore.params,
  });
});
</script>
<template>
  <CardList />
</template>
<style scoped></style>
