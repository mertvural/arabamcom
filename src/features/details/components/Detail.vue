<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDetailStore } from "../stores/detail";
import BackButton from "./BackButton.vue";
import Header from "./Header.vue";
import Gallery from "./Gallery.vue";
import InfoCard from "./InfoCard.vue";
import SellerInfoCard from "./SellerInfoCard.vue";
import PropertiesList from "./PropertiesList.vue";
import Description from "./Description.vue";

const detailStore = useDetailStore();
const { detail } = storeToRefs(detailStore);
</script>

<template>
  <div class="pt-5">
    <BackButton />

    <div class="flex flex-col md:flex-row gap-5 justify-between">
      <div class="w-full md:w-2/3 bg-white p-5 rounded-lg shadow-sm">
        <Header :detail="detail" />
        <Gallery :detail="detail" />
      </div>

      <div class="w-full md:w-1/3">
        <InfoCard :detail="detail" />
        <SellerInfoCard :detail="detail" />
        <PropertiesList :properties="detail?.properties" />
      </div>
    </div>

    <Description :html="detail?.text" />
  </div>
</template>

<style scoped></style>
