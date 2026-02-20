<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useDetailStore } from "../stores/detail";
import { Language } from "@/languages/en";
import { storeToRefs } from "pinia";

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
  <div class="pt-5">
    <button
      type="button"
      class="mb-4 text-secondary font-medium flex items-center gap-2 cursor-pointer"
      @click="handleGoBack"
    >
      <i class="pi pi-arrow-left"></i> {{ Language.BACK }}
    </button>

    <h1 class="text-xl md:text-2xl font-bold mb-5 leading-tight">
      {{ lists?.title }}
    </h1>

    <div class="flex gap-5 justify-between">
      <div class="w-2/3">
        <p
          class="bg-gray-100 p-2 rounded-md font-bold text-secondary mb-2 pb-2 border-b-gray-200 border-b-2 h-11"
        >
          <i class="pi pi-map-marker"></i> {{ lists?.location.cityName }} /
          {{ lists?.location.townName }}
        </p>
        <img
          :src="lists?.photos[0].replace('{0}', '800x600')"
          :alt="lists?.title"
        />
      </div>

      <div class="w-1/3">
        <ul>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b bg-gray-100 p-2 rounded-md h-11 font-bold"
          >
            <span>Fiyat</span>
            <span class="text-secondary text-xl">{{ formattedPrice }}</span>
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>İlan No</span>
            <span class="font-semibold">{{ lists?.id }}</span>
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>Tarih</span>
            <span class="font-semibold">{{ lists?.dateFormatted }}</span>
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>Model</span>
            <span class="font-semibold">{{ lists?.modelName }}</span>
          </li>
        </ul>
        <ul class="mt-10">
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>Ad Soyad</span>
            <span class="font-semibold">{{ lists?.userInfo.nameSurname }}</span>
          </li>
          <li
            class="flex justify-between items-center border-b-gray-200 border-b p-2"
          >
            <span>Telefon</span>
            <span class="font-semibold">{{
              lists?.userInfo.phoneFormatted
            }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div v-html="lists?.text" class="text-xl mt-10"></div>
  </div>
</template>

<style scoped></style>
