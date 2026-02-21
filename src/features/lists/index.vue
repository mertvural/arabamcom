<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useListingStore } from "./stores/listing";
import CardList from "./components/CardList.vue";
import { Sort, sortDirection, Take } from "./enums.ts/listing";

const listingStore = useListingStore();

onBeforeMount(async () => {
  await listingStore.fetchList({
    sort: Sort.Price,
    sortDirection: sortDirection.Desc,
    take: Take.Ten,
  });
});
</script>
<template>
  <CardList />
</template>
<style scoped></style>
