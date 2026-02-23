import { Language } from "@/languages/en";

export const TakeOptions = [
  { name: "10", value: 10 },
  { name: "20", value: 20 },
  { name: "50", value: 50 },
];

export const SortOptions = [
  { name: Language.SORT_BY_PRICE, value: 0 },
  { name: Language.SORT_BY_DATE, value: 1 },
  { name: Language.YEAR, value: 2 },
];

export const SortDirectionOptions = [
  { name: Language.ASCENDING, value: 0 },
  { name: Language.DESCENDING, value: 1 },
];

export enum Take {
  Ten = 10,
  Twenty = 20,
  Fifty = 50,
}

export enum Sort {
  Price = 0,
  Date = 1,
  Year = 2,
}

export enum sortDirection {
  Desc = 0,
  Asc = 1,
}

export const LOAD_MORE_INCREMENT = 10;
