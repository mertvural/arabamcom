import { http } from "@/services/api/http";
import { ListingResponse } from "../types/listingTypes";

export const getListing = (params: {
  sort: number;
  sortDirection: number;
  take: number;
}) => {
  return http.get<ListingResponse>("/listing", { params });
};
