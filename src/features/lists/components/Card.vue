<script setup lang="ts">
import type { ListingResponse } from '../types/listingTypes';

const props = defineProps<{
  item: ListingResponse;
}>();

console.log(props.item);

</script>

<template>

  <article
    class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
  >
    <a href="#">
        <img class="rounded-base" :src="item.photo" :alt="item.title" />
    </a>
    <a href="#">
        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{{ item.title }}</h5>
    </a>
    <p class="mb-6 text-body">{{ item.modelName }} - {{ item.priceFormatted }}</p>
    <a href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
    </a>
</article>

</template>

<style scoped></style>