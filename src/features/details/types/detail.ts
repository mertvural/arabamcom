export interface DetailStoreState {
  lists: DetailResponse | null;
  loading: boolean;
  error: string | null;
}

export interface DetailResponse {
  id: number;
  title: string;
  location: Location;
  category: Category;
  modelName: string;
  price: number;
  priceFormatted: string;
  date: string;
  dateFormatted: string;
  photos: string[];
  properties: Property[];
  text: string;
  userInfo: UserInfo;
}

export interface Location {
  cityName: string;
  townName: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Property {
  name: string;
  value: string;
}

export interface UserInfo {
  id: number;
  nameSurname: string;
  phone: string;
  phoneFormatted: string;
}
