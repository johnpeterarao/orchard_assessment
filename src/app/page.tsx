'use client';

import React from "react";
import { useEffect } from "react";
import { productSectionData } from "@/constants/section-products";
import ProductsSection from "@/components/section-products";
import SectionImageGrid from "@/components/section-image-grid";
import { imageGridData } from "@/constants/section-image-grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { triggerAnimation } from "@/utils/scrollAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {

    triggerAnimation();

  }, [])

  const handleConsoleLog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Element --> ', e.currentTarget);
    console.log(`Link --> ${e.currentTarget.getAttribute('href') == '' ? 'No Link Registered' : e.currentTarget.getAttribute('href')}`);
    e.preventDefault();
  }

  return (
    <ReactLenis root>
      <SectionImageGrid data={imageGridData} onConsoleLog={handleConsoleLog}/>
      <ProductsSection data={productSectionData} onConsoleLog={handleConsoleLog}/>
    </ReactLenis>
  );
}
