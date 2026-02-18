import { defineStore } from 'pinia';
import { getListing } from '../api/listingApi';
import { Sort, SortDirection, Take } from '../enums.ts/listingEnums';
import { Language } from '@/languages/en';
import type { ListingStoreState } from '../types/listingTypes';

export const useListingStore = defineStore('listing', {
    state: (): ListingStoreState => ({
    lists: null, 
    loading: false,
    error: null
  }),

  getters: {
    listingCount: (state) => state.lists.length,
  },

  actions: {
    async fetchList(params?: {
      sort?: Sort;
      sortDirection?: SortDirection;
      take?: Take;
    }) {
      this.loading = true;
      this.error = null;

      try {
        const response = await getListing({
          sort: params?.sort ?? Sort.Date,
          sortDirection: params?.sortDirection ?? SortDirection.Desc,
          take: params?.take ?? Take.Ten,
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
