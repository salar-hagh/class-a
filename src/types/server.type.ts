export interface IProduct {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: IProductData[];
}

export interface IProductData {
  id: string;
  title: string;
  views: number;
  price: number;
  description: string;
  rate: number;
  image: string;
}

export interface CreateNewProduct {
  title: string;
  price: string;
  image: string;
  description: string;
}
