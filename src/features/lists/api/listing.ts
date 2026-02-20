import { http } from "@/services/api/http";
import { ListingResponse } from "../types/listing";

export const getListing = (params: {
  sort: number;
  sortDirection: number;
  take: number;
  minYear: number;
  maxYear: number;
}) => {
  return http.get<ListingResponse>("/listing", { params });
};
