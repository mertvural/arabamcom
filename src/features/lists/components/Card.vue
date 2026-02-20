<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import type { ListingResponse } from "../types/listingTypes";

const props = defineProps<{
  item: ListingResponse;
}>();

const router = useRouter();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("tr-TR").format(props.item.price) + " TL";
});

function handleClick() {
  router.push({
    name: "listing-detail",
    params: { id: String(props.item.id) },
  });
}
</script>

<template>
  <article
    class="bg-linear-to-b from-gray-50 to-gray-100 shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl hover:cursor-pointer"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <div class="h-36 w-full">
      <img
        class="rounded-base size-full object-cover"
        :src="item.photo.replace('{0}', '240x180')"
        :alt="item.title"
      />
    </div>

    <div class="p-4 h-36 flex flex-col">
      <div class="flex-1">
        <h2 class="flex justify-between mb-2">
          <span class="font-bold">
            {{ item.location.cityName }}
          </span>
          <span class="font-medium">
            {{
              item.properties.find((property) => property.name === "year")
                ?.value
            }}
          </span>
        </h2>

        <p>
          {{ item.title }}
        </p>
      </div>

      <p class="text-right">
        <span class="text-secondary font-bold whitespace-nowrap">
          {{ formattedPrice }}
        </span>
      </p>
    </div>
  </article>
</template>

<style scoped></style>
