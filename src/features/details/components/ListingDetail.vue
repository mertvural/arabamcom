<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDetailStore } from "../stores/detail";
import { Language } from "@/languages/en";
import { storeToRefs } from "pinia";
import Image from "primevue/image";
import Galleria from "primevue/galleria";
import { ResponsiveOptions } from "../enum/detail";

const detailStore = useDetailStore();
const { lists } = storeToRefs(detailStore);
const router = useRouter();
const route = useRoute();

function handleGoBack() {
  router.push({ name: "home" });
}

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("tr-TR").format(lists?.value?.price) + " TL";
});

onBeforeMount(async () => {
  await detailStore.fetchDetail({
    id: Number(route.params.id),
  });
});
</script>

<template>
  <div class="pt-5 pb-32">
    <button
      type="button"
      class="mb-4 text-secondary font-medium flex items-center gap-2 cursor-pointer"
      @click="handleGoBack"
    >
      <i class="pi pi-arrow-left"></i> {{ Language.BACK }}
    </button>

    <div class="flex gap-5 justify-between">
      <div class="w-2/3 bg-white p-5 rounded-lg shadow-sm">
        <h1 class="text-xl md:text-2xl font-bold mb-5 leading-tight">
          {{ lists?.title }}
        </h1>

        <p
          class="bg-gray-100 rounded-md font-bold text-secondary mb-2 p-2 shadow-sm"
        >
          <i class="pi pi-map-marker"></i> {{ lists?.location.cityName }} /
          {{ lists?.location.townName }}
        </p>

        <Galleria
          v-if="lists?.photos?.length"
          :value="lists.photos"
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
                :alt="lists?.title"
                class="max-w-full max-h-[70vh] object-contain rounded-lg mx-auto"
              />
            </div>
          </template>
          <template #thumbnail="slotProps">
            <div class="flex justify-center">
              <img
                :src="slotProps.item.replace('{0}', '240x180')"
                :alt="lists?.title"
                class="block object-cover rounded cursor-pointer mx-auto"
              />
            </div>
          </template>
        </Galleria>
      </div>

      <div class="w-1/3">
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
            <span>{{ Language.LISTING_NO }}</span>
            <span class="font-semibold">
              <i class="pi pi-hashtag"></i>
              {{ lists?.id }}
            </span>
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>{{ Language.DATE }}</span>
            <span class="font-semibold">
              <i class="pi pi-calendar"></i>
              {{ lists?.dateFormatted }}</span
            >
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>{{ Language.MODEL }}</span>
            <span class="font-semibold">{{ lists?.modelName }}</span>
          </li>
        </ul>

        <ul class="bg-white p-5 rounded-lg shadow-sm mb-5 font-bold">
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>{{ Language.FULL_NAME }}</span>
            <span class="font-semibold text-secondary">
              <i class="pi pi-user"></i>
              {{ lists?.userInfo.nameSurname }}</span
            >
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>{{ Language.PHONE }}</span>
            <span class="font-semibold text-secondary">
              <i class="pi pi-phone"></i>
              {{ lists?.userInfo.phoneFormatted }}</span
            >
          </li>
        </ul>

        <ul class="bg-white p-5 rounded-lg shadow-sm">
          <li
            v-for="property in lists?.properties"
            :key="property.name"
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>{{ property.name }}</span>
            <span class="font-semibold">{{ property.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-html="lists?.text"
      class="text-xl mt-10 bg-white p-5 rounded-lg shadow-sm"
    ></div>
  </div>
</template>

<style scoped></style>
