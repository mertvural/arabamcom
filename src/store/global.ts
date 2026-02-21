import { defineStore } from "pinia";
import { GlobalStoreState } from "@/types/global";

export const useGlobalStore = defineStore("global", {
  state: (): GlobalStoreState => ({
    loading: false,
    error: null,
    loadingCount: 0,
  }),

  actions: {
    setLoading(value: boolean) {
      this.loading = value;
    },
    addLoading() {
      this.loadingCount += 1;
      this.loading = true;
    },
    removeLoading() {
      this.loadingCount = Math.max(0, this.loadingCount - 1);
      this.loading = this.loadingCount > 0;
    },
    setError(message: string | null) {
      this.error = message;
    },
    clearError() {
      this.error = null;
    },
  },
});
