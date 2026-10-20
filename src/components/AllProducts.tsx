"use client";
import { IProduct } from "@/types/product.type";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
// prop.products

const AllProducts = ({ products }: { products: IProduct[] }) => {
  const [finalProducts, setFinalProducts] = useState<IProduct[]>(products);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    // console.log(searchText);
    const filteredProducts = products.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchText);
      const categoryMatch = product.categories.some((cat) =>
        cat.toLowerCase().includes(searchText),
      );
      return nameMatch || categoryMatch;
    });
    setFinalProducts(filteredProducts);
  };
  return (
    <div className="container mx-auto">
      <h2>The CATALOG</h2>
      <h4>This is something dummy which should be completed by you</h4>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={handleSearch}
          type="search"
          required
          placeholder="Search"
        />
      </label>
      <div className="grid grid-cols-3 gap-5">
        {finalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
