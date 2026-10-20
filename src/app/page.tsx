import { getAllProducts } from "@/lib/api";
import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Image from "next/image";
import { IProduct } from "@/types/product.type";

export default async function Home() {
  const data = await getAllProducts();
  const products: IProduct[] = data.data;
  return (
    <div>
      <Banner />
      <AllProducts products={products} />
    </div>
  );
}
