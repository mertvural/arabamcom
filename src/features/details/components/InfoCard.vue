<script setup lang="ts">
import { Language } from "@/languages/en";
import { formattedPrice} from "@/utils";
import type { DetailResponse } from "../types/detail";

defineProps<{
  detail: DetailResponse | null;
}>();

</script>

<template>
  <ul class="bg-white p-5 rounded-lg shadow-sm mb-5">
    <li
      class="flex justify-between items-center shadow-sm bg-gray-100 p-2 rounded-md font-bold"
    >
      <span class="text-lg">{{ Language.PRICE }}</span>
      <span class="text-secondary text-xl">{{ formattedPrice(detail?.price) }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-hashtag text-secondary" />
        {{ Language.LISTING_NO }}
      </span>
      <span class="font-semibold">{{ detail?.id }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-calendar text-secondary" />
        {{ Language.DATE }}
      </span>
      <span class="font-semibold">{{ detail?.dateFormatted }}</span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-car text-secondary" />
        {{ Language.MODEL }}
      </span>
      <span class="font-semibold text-right">{{ detail?.modelName }}</span>
    </li>
  </ul>
</template>
