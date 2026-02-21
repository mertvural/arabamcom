<script setup lang="ts">
defineProps<{
  html: string | undefined;
}>();
</script>

<template>
  <div
    v-if="html"
    v-html="html"
    class="text-xl mt-10 bg-white p-5 rounded-lg shadow-sm overflow-hidden"
  ></div>
</template>
