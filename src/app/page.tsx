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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  const triggerAnimation = () => {
    const ScrollTriggerSettings = {
      trigger: ".product__section",
      start: "top 30%",
      toggleActions: "play reverse play reverse"
    };

    const leftXValues = [-250, -450, -200];
    const rightXValues = [250, 450, 200];
    const centerYValues = [-100, -50, -50];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    const rows = gsap.utils.toArray('.grid__row') as HTMLDivElement[];

    rows.forEach((row, index: number) => {
      const leftColumn = row.querySelector('.grid__images--cover') as HTMLElement;
      const rightColumn = row.querySelector('.grid__content') as HTMLElement;
      const centerColumn = row.querySelector('.grid__images--items') as HTMLElement;

      gsap.to(leftColumn, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            leftColumn.style.transform = `translate(${progress * leftXValues[index]}px, ${progress * yValues[index]}) rotate(${progress * leftRotationValues[index]}deg)`;
            leftColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

      gsap.to(rightColumn, {
        x: rightXValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            rightColumn.style.transform = `translate(${progress * rightXValues[index]}px, ${progress * yValues[index]}) rotate(${progress * rightRotationValues[index]}deg)`;
            rightColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

      gsap.to(centerColumn, {
        y: centerYValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            centerColumn.style.transform = `translateY(${progress * yValues[index]})`
            centerColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

    })

    gsap.to('.product__card', {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: ScrollTriggerSettings
    })
  }

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
