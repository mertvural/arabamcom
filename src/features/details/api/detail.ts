import { http } from "@/services/api/http";
import type { DetailResponse } from "../types/detail";

export const getDetail = (params: { id: number }) => {
  return http.get<DetailResponse>("/detail", { params });
};
