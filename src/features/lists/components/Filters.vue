<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Popover from "primevue/popover";

const filtersPopover = ref(null);

const handleToggleFilters = (event) => {
    filtersPopover.value.toggle(event);
}
</script>

<template>
  <div class="card flex justify-center">
    <Button
      label="Filters"
      severity="danger"
      size="small"
      @click="handleToggleFilters"
    />

    <Popover ref="filtersPopover">
      <div class="flex flex-col gap-4 w-[25rem]">filtreleer</div>
    </Popover>
  </div>
</template>
