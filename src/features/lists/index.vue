<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useListingStore } from './stores/listingStore';
import CardList from './components/CardList.vue';



const listingStore = useListingStore();

onBeforeMount(() => {
  listingStore.fetchList();
});



</script>
<template>

<CardList />

</template>
<style scoped></style>