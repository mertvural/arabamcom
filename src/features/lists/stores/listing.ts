import { defineStore } from "pinia";
import { getListing } from "../api/listing";
import { Language } from "@/languages/en";
import type { ListingStoreState, SortParams } from "../types/listing";
import { Sort, sortDirection, Take } from "../enums.ts/listing";

export const useListingStore = defineStore("listing", {
  state: (): ListingStoreState => ({
    lists: null,
    loading: false,
    error: null,
    params: {
      sort: Sort.Price,
      sortDirection: sortDirection.Desc,
      take: Take.Ten,
      minYear: null,
      maxYear: null,
    },
  }),

  actions: {
    async fetchList(params: SortParams) {
      this.loading = true;
      this.error = null;

      try {
        const response = await getListing({
          sort: params?.sort,
          sortDirection: params?.sortDirection,
          take: params?.take,
          minYear: params?.minYear,
          maxYear: params?.maxYear,
        });

        if (response.data) {
          this.lists = response.data;
        }
      } catch (e) {
        this.error = e instanceof Error ? e.message : Language.LIST_LOAD_FAILED;
        throw e;
      } finally {
        this.loading = false;
      }
    },
  },
});
