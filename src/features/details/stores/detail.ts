import { defineStore } from "pinia";
import { getDetail } from "../api/detail";
import { DetailStoreState } from "../types/detail";

export const useDetailStore = defineStore("detail", {
  state: (): DetailStoreState => ({
    lists: null,
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
      } catch (e) {
        console.error(e);
      }
    },
  },
});
