'use client';

import React from "react";
import { useEffect, useState } from "react";
import { productSectionData } from "@/constants/section-products";
import ProductsSection from "@/components/section-products";
import SectionImageGrid from "@/components/section-image-grid";
import { imageGridData } from "@/constants/section-image-grid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { triggerAnimation } from "@/utils/scrollAnimation";
import { imageDTO } from "@/types/types";
import Modal from "@/components/modal";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState<imageDTO>({ title: '', meta: '', imgSrc: ''});

  useEffect(() => {
    triggerAnimation(); //Comment 11
  }, [])

  const handleOpenModal = (imgDetails: imageDTO) => {
    setCurrentImageSrc(imgDetails);
    setIsModalOpen(true)
  };
  
  const closeModal = () => {
    setIsModalOpen(false); 
    setCurrentImageSrc({ title: '', meta: '', imgSrc: ''});
  };

  const handleConsoleLog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('Element --> ', e.currentTarget);
    console.log(`Link --> ${e.currentTarget.getAttribute('href') == '' ? 'No Link Registered' : e.currentTarget.getAttribute('href')}`);
    e.preventDefault();
  }

  return (
    <ReactLenis root>
      <SectionImageGrid data={imageGridData} onConsoleLog={handleConsoleLog} onOpenModal={handleOpenModal}/>
      <ProductsSection data={productSectionData} onConsoleLog={handleConsoleLog}/>
      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          imageDetails={currentImageSrc} 
        />
      )}
    </ReactLenis>
  );
}
