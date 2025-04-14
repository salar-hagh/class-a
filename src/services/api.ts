import axios from "axios";
import { CreateNewProduct } from "../types/server.type";

const client = axios.create({
  baseURL: "http://localhost:3004",
});

export async function getProducts({
  page,
  perPage,
  price,
}: {
  page: number;
  perPage: number;
  price: string;
}) {
  const { data } = await client(
    `/products?_page=${page}&_per_page=${perPage}&price=${price}`
  );

  return data;
}

export async function getProduct(id: string) {
  const { data } = await client(`/products/${id}`);

  return data;
}

export async function submitDiscountCode(code: string) {
  const { data } = await client(`/discount?code=${code}`);

  return data;
}

export async function createProduct(params: CreateNewProduct) {
  const { data } = await client({
    method: "POST",
    url: "/products",
    data: params,
  });
}

export async function login(params: { username: string; password: string }) {
  const { data } = await client({
    method: "Get",
    url: "/login",
    params: params,
  });
}
