import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Product Image */}
        <figure className="relative bg-base-200 p-5">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="h-52 w-full object-contain"
          />

          <span className="badge badge-primary absolute top-3 left-3">
            {product.tier}
          </span>

          <span className="badge badge-success absolute top-3 right-3">
            {product.stock}
          </span>
        </figure>

        {/* Product Information */}
        <div className="card-body gap-3">
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span key={category} className="badge badge-outline badge-sm">
                {category}
              </span>
            ))}
          </div>

          <h2 className="card-title text-lg">{product.name}</h2>

          <p className="text-sm text-base-content/60">{product.brand}</p>

          <p className="text-sm text-base-content/70 line-clamp-2">
            {product.description}
          </p>

          {/* Rating & Warranty */}
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <span className="text-amber-500">★</span>
              {product.rating}
            </span>

            <span className="text-base-content/60">
              {product.warranty} years warranty
            </span>
          </div>

          {/* Price & Delivery */}
          <div className="flex items-end justify-between border-t border-base-300 pt-4">
            <div>
              <p className="text-xs text-base-content/60">Price</p>

              <p className="text-2xl font-bold">${product.price}</p>
            </div>

            <p className="text-xs text-base-content/60">
              <span className="font-medium">{product.deliveryTime}h</span>{" "}
              delivery
            </p>
          </div>

          {/* Action Button */}
          <div className="card-actions mt-2">
            <Link href={`/products/${product.id}`}>
              {" "}
              <button className="btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
