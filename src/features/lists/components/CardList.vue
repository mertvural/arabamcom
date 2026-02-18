<script setup lang="ts">
import { useListingStore } from '../stores/listingStore';
import Card from './Card.vue';

const listingStore = useListingStore();


</script>
<template>
  

<Card v-for="item in listingStore.lists" :key="item.id" :item="item" />



</template>
<style scoped></style>