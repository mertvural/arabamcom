import { http } from "@/services/api/http";

export const getDetail = (params: { id: number }) => {
  return http.get("/detail", { params });
};
