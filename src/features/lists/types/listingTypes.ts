import { Sort, sortDirection, Take } from "../enums.ts/listingEnums";

interface ListingLocation {
  cityName: string;
  townName: string;
}

interface ListingCategory {
  id: number;
  name: string;
}

interface ListingProperty {
  name: string;
  value: string;
}

export interface ListingResponse {
  id: number;
  title: string;
  location: ListingLocation;
  category: ListingCategory;
  modelName: string;
  price: number;
  priceFormatted: string;
  date: string;
  dateFormatted: string;
  photo: string;
  properties: ListingProperty[];
}

export interface ListingStoreState {
  lists: ListingResponse[] | null;
  loading: boolean;
  error: string | null;
}

export interface SortParams {
  sort?: Sort;
  sortDirection?: sortDirection;
  take?: Take;
}
