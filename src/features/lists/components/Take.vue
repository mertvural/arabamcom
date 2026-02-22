<script setup lang="ts">
import { watch } from "vue";
import Select from "primevue/select";
import { TakeOptions } from "../enums.ts/listing";
import { useListingStore } from "../stores/listing";
import { storeToRefs } from "pinia";
import { Language } from "@/languages/en";

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
    class="md:w-32"
    :placeholder="Language.NUMBER_OF_LISTINGS"
    size="small"
  />
</template>
