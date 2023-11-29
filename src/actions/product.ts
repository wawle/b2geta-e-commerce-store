import { Product } from "@/types";

interface ProductsQuery {
  limit?: number;
  skip?: number;
}

export const getProducts = async ({
  limit = 10,
  skip = 0,
}: ProductsQuery): Promise<{ products: Product[]; total: number }> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=${limit}&skip=${skip}`
  );

  return res.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

  return res.json();
};
