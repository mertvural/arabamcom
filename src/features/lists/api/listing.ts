import { http } from "@/services/api/http";
import type { ListingResponse, SortParams } from "../types/listing";

export const getListing = (params: SortParams) => {
  return http.get<ListingResponse[]>("/listing", { params });
};
