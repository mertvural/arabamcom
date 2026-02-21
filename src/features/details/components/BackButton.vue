<script setup lang="ts">
import { useRouter } from "vue-router";
import { Language } from "@/languages/en";

const router = useRouter();

function handleGoBack() {
  router.push({ name: "home" });
}
</script>

<template>
  <button
    type="button"
    class="mb-4 text-secondary font-medium flex items-center gap-2 cursor-pointer"
    @click="handleGoBack"
  >
    <i class="pi pi-arrow-left"></i> {{ Language.BACK }}
  </button>
</template>
