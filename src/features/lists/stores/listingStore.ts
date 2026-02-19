import { defineStore } from "pinia";
import { getListing } from "../api/listingApi";
import { Language } from "@/languages/en";
import type { ListingStoreState, SortParams } from "../types/listingTypes";

export const useListingStore = defineStore("listing", {
  state: (): ListingStoreState => ({
    lists: null,
    loading: false,
    error: null,
  }),

  getters: {
    listingCount: (state) => state.lists.length,
  },

  actions: {
    async fetchList(params: SortParams) {
      this.loading = true;
      this.error = null;

      try {
        const response = await getListing({
          sort: params?.sort,
          sortDirection: params?.sortDirection,
          take: params?.take,
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
