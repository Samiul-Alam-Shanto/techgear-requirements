import DetailsPageButton from "@/components/DetailsPageButton";
import { getSingleProduct } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await getSingleProduct(id);
  const product = data.data;
  //   console.log(product);
  if (!product) {
    return (
      <>
        <h2>No Product Found</h2>
      </>
    );
  }
  return (
    <main className="min-h-screen bg-base-200/50 px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="breadcrumbs mb-6 text-sm">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>Details</li>
          </ul>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-6 sm:min-h-[480px]">
            <span className="badge badge-primary absolute left-5 top-5 z-10">
              {product.tier}
            </span>

            <Image
              src={product.image}
              alt={product.name}
              width={740}
              height={550}
              priority
              className="h-auto max-h-[420px] w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <section className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {product.brand}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-amber-500">★★★★★</span>
              <span className="font-semibold">{product.rating}</span>
              <span className="text-sm text-base-content/60">
                Premium product
              </span>
            </div>

            <p className="mt-6 text-base leading-7 text-base-content/70">
              {product.description}
            </p>

            {/* Categories */}
            <div className="mt-5 flex flex-wrap gap-2">
              {product.categories.map((category: any) => (
                <span key={category} className="badge badge-outline px-3 py-3">
                  {category}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="mt-7 border-y border-base-300 py-6">
              <p className="text-sm text-base-content/60">Price</p>
              <p className="mt-1 text-4xl font-bold">${product.price}</p>
            </div>

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div>
                <p className="text-sm text-base-content/60">Availability</p>
                <p className="mt-1 font-semibold text-success">
                  {product.stock} available
                </p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Delivery</p>
                <p className="mt-1 font-semibold">
                  Within {product.deliveryTime} hours
                </p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Warranty</p>
                <p className="mt-1 font-semibold">{product.warranty} years</p>
              </div>

              <div>
                <p className="text-sm text-base-content/60">Product ID</p>
                <p className="mt-1 font-semibold">
                  GL-{String(product.id).padStart(3, "0")}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <DetailsPageButton product={product} />

            <p className="mt-4 text-center text-xs text-base-content/50">
              Build your setup today or save this gear for later.
            </p>
          </section>
        </div>

        {/* Setup Guide */}
        <section className="mt-14 rounded-2xl border border-base-300 bg-base-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Setup Guide</h2>
          <p className="mt-2 text-sm text-base-content/60">
            Follow these steps to get started with your keyboard.
          </p>

          <ol className="mt-6 space-y-5">
            {product.setupGuide.map((step: any, index: number) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 leading-6">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
