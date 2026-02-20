<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useListingStore } from "../../lists/stores/listingStore";

const props = defineProps<{
  id: string;
}>();

const route = useRoute();
const router = useRouter();
const listingStore = useListingStore();
const { lists } = storeToRefs(listingStore);

const listingId = computed(() => Number(route.params.id) || Number(props.id));

const listing = computed(
  () => listingStore.lists?.find((item) => item.id === listingId.value) ?? null,
);

const formattedPrice = computed(() => {
  if (!listing.value) return "";
  return new Intl.NumberFormat("tr-TR").format(listing.value.price) + " TL";
});

const yearProperty = computed(
  () => listing.value?.properties.find((p) => p.name === "year")?.value ?? "",
);

function goBack() {
  router.push({ name: "home" });
}
</script>

<template>
  <div class="max-w-2xl mx-auto py-6">
    <button
      type="button"
      class="mb-4 text-secondary hover:underline font-medium"
      @click="goBack"
    >
      ← Listeye dön
    </button>

    <template v-if="listing">
      <article
        class="bg-linear-to-b from-gray-50 to-gray-100 shadow-md border border-gray-200 rounded-lg overflow-hidden"
      >
        <div class="aspect-video w-full">
          <img
            class="w-full h-full object-cover"
            :src="listing.photo.replace('{0}', '800x600')"
            :alt="listing.title"
          />
        </div>
        <div class="p-6">
          <h1 class="text-2xl font-bold mb-2">{{ listing.title }}</h1>
          <p class="text-secondary mb-2">
            {{ listing.location.cityName }}
            <span v-if="listing.location.townName"
              >/ {{ listing.location.townName }}</span
            >
          </p>
          <p v-if="yearProperty" class="mb-2">Yıl: {{ yearProperty }}</p>
          <p class="text-right">
            <span class="text-secondary font-bold text-xl">
              {{ formattedPrice }}
            </span>
          </p>
        </div>
      </article>
    </template>

    <p
      v-else
      class="text-center text-secondary bg-gray-100 p-10 rounded-lg border border-gray-200"
    >
      İlan bulunamadı.
    </p>
  </div>
</template>

<style scoped></style>
