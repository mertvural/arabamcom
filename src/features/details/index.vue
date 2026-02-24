<script setup lang="ts">
import { onBeforeMount, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useDetailStore } from "./stores/detail";
import Detail from "./components/Detail.vue";

const detailStore = useDetailStore();
const route = useRoute();

onBeforeMount(async () => {
  await detailStore.fetchDetail({
    id: Number(route.params.id),
  });
});

onUnmounted(() => {
  detailStore.$reset();
});
</script>

<template>
  <Detail />
</template>

<style scoped></style>
