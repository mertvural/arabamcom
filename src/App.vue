<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useToast } from "primevue/usetoast";
import Lists from "@/features/lists/index.vue";
import Loading from "./components/Loading.vue";
import Toast from "primevue/toast";
import { useListingStore } from "@/features/lists/stores/listingStore";
import { Language } from "./languages/en";

const listingStore = useListingStore();
const { loading, error } = storeToRefs(listingStore);

const toast = useToast();

watch(error, (value) => {
  if (!value) return;

  toast.add({
    severity: "error",
    summary: Language.ERROR,
    detail: value,
    life: 3000,
  });
});
</script>

<template>
  <div class="container mx-auto text-primary text-sm font-[Open_Sans]">
    <Lists />
  </div>

  <Loading v-if="loading" />
  <Toast position="top-center" />
</template>

<style scoped></style>
