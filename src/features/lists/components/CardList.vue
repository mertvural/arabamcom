<script setup lang="ts">
import { ref, watch } from "vue";
import Select from "primevue/select";
import { useListingStore } from "../stores/listingStore";
import Card from "./Card.vue";
import Loading from "@/components/Loading.vue";
import Button from "primevue/button";
import {
  TakeOptions,
  Sort,
  sortDirection,
  Take,
} from "../enums.ts/listingEnums";

const listingStore = useListingStore();
const selectedTake = ref<Take>(Take.Ten);

watch(selectedTake, async (take) => {
  await listingStore.fetchList({
    sort: Sort.Price,
    sortDirection: sortDirection.Desc,
    take: selectedTake.value,
  });
});
</script>

<template>
  <h1 class="text-2xl font-bold my-3 text-center text-secondary">- VİTRİN -</h1>

  <div class="flex justify-between gap-5 mb-3">
    <Button label="Hepsini Göster" severity="danger" size="small" />
    <Select
      v-model="selectedTake"
      :options="TakeOptions"
      optionLabel="name"
      optionValue="value"
      placeholder="İlan sayısını seçiniz"
      class="w-full md:w-28"
    />
  </div>

  <section
    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5"
  >
    <Card v-for="item in listingStore.lists" :key="item.id" :item="item" />
  </section>

  <Loading v-if="listingStore.loading" />
</template>
<style scoped></style>
