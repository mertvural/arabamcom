import { defineStore } from "pinia";
import { getListing } from "../api/listing";
import type { ListingStoreState, SortParams } from "../types/listing";
import { Sort, sortDirection, Take } from "../enums.ts/listing";

export const useListingStore = defineStore("listing", {
  state: (): ListingStoreState => ({
    lists: null,
    params: {
      sort: Sort.Price,
      sortDirection: sortDirection.Desc,
      take: Take.Ten,
      minYear: undefined,
      maxYear: undefined,
    },
  }),

  actions: {
    async fetchList(params: SortParams) {
      try {
        const response = await getListing(params);

        if (response.data) {
          this.lists = response.data;
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});
