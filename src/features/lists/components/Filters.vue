<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Popover from "primevue/popover";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import { storeToRefs } from "pinia";
import { useListingStore } from "../stores/listing";
import { SortDirectionOptions, SortOptions } from "../enums.ts/listing";

const listingStore = useListingStore();
const { params } = storeToRefs(listingStore);
const filtersPopover = ref(null);

const handleToggleFilters = (event) => {
  filtersPopover.value.toggle(event);
};

const handleApplyFilters = async () => {
  await listingStore.fetchList(params.value);
};
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
      <div class="mb-2">
        <div class="flex gap-2 mb-2">
          <InputText
            v-model="params.minYear"
            type="text"
            placeholder="Min Year"
            size="small"
            class="w-full"
            maxlength="4"
            inputmode="numeric"
          />
          <InputText
            v-model="params.maxYear"
            type="text"
            placeholder="Max Year"
            class="w-full"
            size="small"
            maxlength="4"
            inputmode="numeric"
          />
        </div>

        <div class="flex gap-2 mb-2">
          <Select
            v-model="params.sort"
            :options="SortOptions"
            optionLabel="name"
            optionValue="value"
            class="w-full"
            size="small"
          />

          <Select
            v-model="params.sortDirection"
            :options="SortDirectionOptions"
            optionLabel="name"
            optionValue="value"
            class="w-full"
            size="small"
          />
        </div>
      </div>

      <Button
        label="Apply"
        severity="danger"
        size="small"
        @click="handleApplyFilters"
      />
    </Popover>
  </div>
</template>
