<script setup lang="ts">
import { Language } from "@/languages/en";
import type { DetailResponse } from "../types/detail";

defineProps<{
  detail: DetailResponse | null;
}>();
</script>

<template>
  <ul class="bg-white p-5 rounded-lg shadow-sm mb-5 font-bold">
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-user text-secondary" />
        {{ Language.FULL_NAME }}
      </span>
      <span class="font-semibold text-secondary">
        {{ detail?.userInfo.nameSurname }}
      </span>
    </li>
    <li
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i class="pi pi-phone text-secondary" />
        {{ Language.PHONE }}
      </span>
      <a
        class="font-semibold text-secondary"
        :href="`tel:${detail?.userInfo.phone}`"
      >
        {{ detail?.userInfo.phoneFormatted }}
      </a>
    </li>
  </ul>
</template>
