<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useToast } from "primevue/usetoast";
import { RouterView } from "vue-router";
import Loading from "./components/Loading.vue";
import Toast from "primevue/toast";
import { useListingStore } from "@/features/lists/stores/listing";
import { Language } from "./languages/en";
import Footer from "./components/Footer.vue";

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
  <div class="max-w-7xl mx-auto text-primary text-sm font-[Open_Sans] px-2">
    <RouterView />
    <Footer />
  </div>

  <Loading v-if="loading" />
  <Toast position="top-center" />
</template>

<style scoped></style>
