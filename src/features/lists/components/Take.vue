<script setup lang="ts"> 
import { ref, watch } from "vue";
import Select from "primevue/select";
import { Sort, sortDirection, Take, TakeOptions } from "../enums.ts/listingEnums";
import { useListingStore } from "../stores/listingStore";

const listingStore = useListingStore();
const selectedTake = ref<number | null>(null);


watch(selectedTake, async (take) => {
  await listingStore.fetchList({
    sort: Sort.Price,
    sortDirection: sortDirection.Desc,
    take: selectedTake.value,
  });
});
</script>

<template>
    <Select
      v-model="selectedTake"
      :options="TakeOptions"
      optionLabel="name"
      optionValue="value"
      placeholder="İlan sayısını seçiniz"
      class="w-full md:w-56"
      size="small"
    />
</template>