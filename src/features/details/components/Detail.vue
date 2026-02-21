<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDetailStore } from "../stores/detail";
import BackButton from "./BackButton.vue";
import ListingHeader from "./Header.vue";
import ListingGallery from "./Gallery.vue";
import ListingInfoCard from "./InfoCard.vue";
import SellerInfoCard from "./SellerInfoCard.vue";
import PropertiesList from "./PropertiesList.vue";
import ListingDescription from "./Description.vue";

const detailStore = useDetailStore();
const { lists } = storeToRefs(detailStore);
</script>

<template>
  <div class="pt-5">
    <BackButton />

    <div class="flex flex-col md:flex-row gap-5 justify-between">
      <div class="w-full md:w-2/3 bg-white p-5 rounded-lg shadow-sm">
        <ListingHeader :listing="lists" />
        <ListingGallery :listing="lists" />
      </div>

      <div class="w-full md:w-1/3">
        <ListingInfoCard :listing="lists" />
        <SellerInfoCard :listing="lists" />
        <PropertiesList :properties="lists?.properties" />
      </div>
    </div>

    <ListingDescription :html="lists?.text" />
  </div>
</template>

<style scoped></style>
