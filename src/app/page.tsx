'use client';

import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/constants/products-data";
import ProductCard from "@/components/product-card";
import { Product } from "@/types/types";
import { productSectionData } from "@/constants/section-products";
import ProductsSection from "@/components/section-products";
import SectionImageGrid from "@/components/section-image-grid";
import { imageGridData } from "@/constants/section-image-grid";

export default function Home() {

  const handleConsoleLog = (e: any) => {
    console.log(`Link --> ${e.currentTarget.getAttribute('href')}. Element --> ${e.currentTarget}`);
    e.preventDefault();
  }

  return (
    <>
      <SectionImageGrid data={imageGridData}/>
      <ProductsSection data={productSectionData}/>
    </>
  );
}
