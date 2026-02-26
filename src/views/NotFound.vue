<script setup lang="ts">
import { useRouter } from "vue-router";
import { Language } from "@/languages/en";

const router = useRouter();

const handleClick = () => {
  router.push({ name: "home" });
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-gray-50 text-secondary"
  >
    <h1 class="text-6xl font-bold ">
      404
    </h1>
    <p class="text-center text-lg">
      {{ Language.PAGE_NOT_FOUND }}
    </p>
    <button
      type="button"
      class="px-6 py-3 rounded-lg bg-secondary text-white font-medium hover:opacity-90 transition-opacity shadow-md"
      @click="handleClick"
    >
      {{ Language.BACK_TO_HOME }}
    </button>
  </div>
</template>
