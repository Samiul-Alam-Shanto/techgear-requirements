"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "@/context/ProductCotext";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ProductProvider>
        <nav>
          <Navbar />
        </nav>
        <main className="min-h-[60vh]">{children}</main>
        <Footer></Footer>
        <Toaster />
      </ProductProvider>
    </div>
  );
};

export default ClientLayout;
