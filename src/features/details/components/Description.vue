<script setup lang="ts">
/* eslint-disable vue/no-v-html -- content is sanitized with DOMPurify */
import { computed } from "vue";
import DOMPurify from "dompurify";

const props = defineProps<{
  html: string | undefined;
}>();

const sanitizedHtml = computed(() =>
  props.html ? DOMPurify.sanitize(props.html) : "",
);
</script>

<template>
  <div
    v-if="sanitizedHtml"
    class="text-xl mt-10 bg-white p-5 rounded-lg shadow-sm overflow-hidden"
    v-html="sanitizedHtml"
  />
</template>
