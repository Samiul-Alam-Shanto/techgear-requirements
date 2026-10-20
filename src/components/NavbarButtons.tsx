import { useProductContext } from "@/context/ProductCotext";
import Link from "next/link";
import React from "react";

const NavbarButtons = () => {
  const { buildList, wishList } = useProductContext();
  return (
    <div>
      <Link className="btn" href={"/mybuild"}>
        {" "}
        <button>Build </button>
        <span>({buildList.length})</span>
      </Link>
      <Link className="btn" href={"/mybuild"}>
        {" "}
        <button>Wish ({wishList.length})</button>{" "}
      </Link>
    </div>
  );
};

export default NavbarButtons;
