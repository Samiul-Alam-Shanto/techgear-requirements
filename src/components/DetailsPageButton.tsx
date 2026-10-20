"use client";
import { useProductContext } from "@/context/ProductCotext";
import { IProduct } from "@/types/product.type";
import React from "react";
import toast from "react-hot-toast";
import { IoMdBuild } from "react-icons/io";

const DetailsPageButton = ({ product }: { product: IProduct }) => {
  const { buildList, wishList, setBuildList, setWishList } =
    useProductContext();
  const isBuildFull = buildList.length >= 5;
  const alreadyInBuild = buildList.some((item) => item.id === product.id);
  const alreadyInWish = wishList.some((item) => item.id === product.id);

  const handleAddToBuild = () => {
    if (alreadyInBuild) {
      toast.error("already in build");
      return;
    }
    if (isBuildFull) {
      toast.error(" build Full");
      return;
    }
    setBuildList((prev) => [...prev, product]);
    toast.success("Added to build");
  };
  const handleSaveForLater = () => {
    if (alreadyInWish) {
      toast.error("already in Wishlist");
      return;
    }
    setWishList((prev) => [...prev, product]);
    toast.success("added to wishlist");
  };
  return (
    <div className="mt-2 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        disabled={alreadyInBuild}
        onClick={handleAddToBuild}
        className="btn btn-primary flex-1 disabled:cursor-not-allowed disabled:pointer-events-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        Add to Today's Build
      </button>

      <button
        type="button"
        disabled={alreadyInWish}
        onClick={handleSaveForLater}
        className="btn btn-outline flex-1 disabled:cursor-not-allowed disabled:pointer-events-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
        Save for Later
      </button>
    </div>
  );
};

export default DetailsPageButton;
