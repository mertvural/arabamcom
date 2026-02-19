<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useListingStore } from "./stores/listingStore";
import CardList from "./components/CardList.vue";
import { Sort, sortDirection, Take } from "./enums.ts/listingEnums";

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
