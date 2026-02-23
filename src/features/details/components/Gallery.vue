<script setup lang="ts">
import Image from "primevue/image";
import Galleria from "primevue/galleria";
import { ResponsiveOptions } from "../enum/detail";
import type { DetailResponse } from "../types/detail";

defineProps<{
  detail: DetailResponse | null;
}>();
</script>

<template>
  <Galleria
    v-if="detail?.photos?.length"
    :value="detail.photos"
    :responsive-options="ResponsiveOptions"
    :num-visible="5"
  >
    <template #item="slotProps">
      <div
        class="flex justify-center items-center min-h-[400px] bg-gray-50/50 rounded-lg"
      >
        <Image
          preview
          :src="slotProps.item.replace('{0}', '800x600')"
          :alt="detail?.title"
          class="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
          onerror="
            this.onerror = null;
            this.src = '/images/notloaded.png';
          "
        />
      </div>
    </template>
    <template #thumbnail="slotProps">
      <div class="flex justify-center">
        <img
          :src="slotProps.item.replace('{0}', '240x180')"
          :alt="detail?.title"
          class="block object-cover rounded cursor-pointer mx-auto"
          onerror="
            this.onerror = null;
            this.src = '/images/notloaded.png';
          "
        >
      </div>
    </template>
  </Galleria>
</template>
