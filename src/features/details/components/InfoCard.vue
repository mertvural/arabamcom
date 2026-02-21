<script setup lang="ts">
import { computed } from "vue";
import { Language } from "@/languages/en";
import type { DetailResponse } from "../types/detail";

const props = defineProps<{
  listing: DetailResponse | null;
}>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("tr-TR").format(props.listing?.price) + " TL";
});
</script>

<template>
  <ul class="bg-white p-5 rounded-lg shadow-sm mb-5">
    <li
      class="flex justify-between items-center shadow-sm bg-gray-100 p-2 rounded-md font-bold"
    >
      <span class="text-lg">{{ Language.PRICE }}</span>
      <span class="text-secondary text-xl">{{ formattedPrice }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-hashtag text-secondary" />
        {{ Language.LISTING_NO }}
      </span>
      <span class="font-semibold">{{ listing?.id }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-calendar text-secondary" />
        {{ Language.DATE }}
      </span>
      <span class="font-semibold">{{ listing?.dateFormatted }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-car text-secondary" />
        {{ Language.MODEL }}
      </span>
      <span class="font-semibold">{{ listing?.modelName }}</span>
    </li>
  </ul>
</template>
