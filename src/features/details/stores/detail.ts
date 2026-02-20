import { defineStore } from "pinia";
import { getDetail } from "../api/detail";
import { Language } from "@/languages/en";
import { DetailStoreState } from "../types/detail";

export const useDetailStore = defineStore("detail", {
  state: (): DetailStoreState => ({
    lists: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchDetail(params: { id: number }) {
      try {
        const response = await getDetail({
          id: params?.id,
        });

        if (response.data) {
          this.lists = response.data;
        }

        console.log(response.data);
      } catch (e) {
        this.error = e instanceof Error ? e.message : Language.LIST_LOAD_FAILED;
        throw e;
      } finally {
        this.loading = false;
      }
    },
  },
});
