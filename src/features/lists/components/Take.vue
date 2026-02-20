<script setup lang="ts">
import { watch } from "vue";
import Select from "primevue/select";
import { TakeOptions } from "../enums.ts/listingEnums";
import { useListingStore } from "../stores/listing";
import { storeToRefs } from "pinia";

const { params } = storeToRefs(useListingStore());

watch(
  () => params.value.take,
  async () => {
    await useListingStore().fetchList(params.value);
  },
);
</script>

<template>
  <Select
    v-model="params.take"
    :options="TakeOptions"
    option-label="name"
    option-value="value"
    class="w-full md:w-24"
    size="small"
  />
</template>
