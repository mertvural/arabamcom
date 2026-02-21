<script setup lang="ts">
import type { Property } from "../types/detail";

const propertyIconMap: Record<string, string> = {
  km: "pi-gauge",
  kilometre: "pi-gauge",
  color: "pi-palette",
  renk: "pi-palette",
  year: "pi-calendar",
  yıl: "pi-calendar",
  gear: "pi-cog",
  vites: "pi-cog",
  fuel: "pi-bolt",
  yakıt: "pi-bolt",
};

function getPropertyIcon(name: string): string {
  const key = name?.toLowerCase().trim();
  return key ? (propertyIconMap[key] ?? "") : "";
}

defineProps<{
  properties: Property[] | undefined;
}>();
</script>

<template>
  <ul class="bg-white p-5 rounded-lg shadow-sm">
    <li
      v-for="property in properties"
      :key="property.name"
      class="flex justify-between items-center border-b-gray-200 border-b p-2"
    >
      <span class="flex items-center gap-2">
        <i
          v-if="getPropertyIcon(property.name)"
          :class="['pi', getPropertyIcon(property.name)]"
          class="text-secondary"
        />
        {{ property.name }}
      </span>
      <span class="font-semibold">{{ property.value }}</span>
    </li>
  </ul>
</template>
