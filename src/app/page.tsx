'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const handleConsoleLog = (e: any) => {
    console.log(`Link --> ${e.currentTarget.getAttribute('href')}. Element --> ${e.currentTarget}`);
    e.preventDefault();
  }

  return (
    <>
    <section className="bg-darkbg py-[120px] grid__section"> {/* See comment #2  */}
      <div className="container">
        <div className="flex">
          <div className="grid__images w-[63.57%] flex flex-wrap gap-2.5">
              <div className="grid__images--cover flex-1">
                <Image 
                  src="/images/img-0.jpg" 
                  alt="Food wrapped in banana leaves being steamed to enhance flavor." 
                  width={744} 
                  height={600} 
                  layout="intrinsic" 
                />
              </div>
              <div className="grid__images--items flex-1 flex-wrap flex gap-2.5">
                <Image 
                  src="/images/img-1.jpg" 
                  alt="Ingredients arranged for before cooking."
                  width={744} 
                  height={400} 
                  layout="intrinsic" 
                />
                <Image 
                  src="/images/img-2.jpg" 
                  alt="Different stages of boiled eggs showing soft, medium, and hard-boiled variations." 
                  width={744} 
                  height={400} 
                  layout="intrinsic" 
                />
              </div>
          </div>
          <div className="grid__content w-[36.43%] pl-[30px]">
            <h1 className="heading-1 grid__content--title">What does Cooking mean?</h1> {/* comment 3  */}
            <p className="grid__content--text text-white font-light text-[21px] leading-[30px] mb-[30px]">Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>  {/* comment 4  */}

            <article> {/* comment 5  */}
              <h5 className="font-bold uppercase text-red text-[15px] mb-2.5 leading-[21px]">The perfect egg</h5>
              <h3><Link className="font-bold uppercase text-white text-[21px] leading-[30px]" href="/test-link" onClick={(e) => handleConsoleLog(e)}>
              Keep water between 67 and 68°C for a flavourful, tender yolk</Link></h3>
            </article>
          </div>
        </div>
        
      </div>
    </section>
    <section className="bg-darkbg py-[120px] product__section">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-1 inline-block">Taste the Colours</h2> {/* comment 6  */}
          <div className="flex flex-wrap gap-2.5">
            <div className="col flex-1">
              <div className="product__card">
                <figure className="product__card_img h-[300px]"> {/* comment 7  */}
                  <Image 
                    src="/images/img-3.jpg" 
                    alt="Red reminds us of berries" 
                    width={750} 
                    height={300} 
                    layout="intrinsic" 
                  />
                </figure>
                <figcaption className="product__card_text px-[30px] pt-[30px]">
                  <h3 className="text-white font-bold text-[21px] leading-[30px] mb-2.5">RED</h3>
                  <p className="text-white font-light text-[21px] leading-[30px]">Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.</p>
                </figcaption>
              </div>
            </div>
            <div className="col flex-1">
              <div className="product__card">
                <figure className="product__card_img h-[300px]">
                  <Image 
                    src="/images/img-4.jpg" 
                    alt="Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours" 
                    width={750} 
                    height={300} 
                    layout="intrinsic" 
                  />
                </figure>
                <figcaption className="product__card_text px-[30px] pt-[30px]">
                  <h3 className="text-white font-bold text-[21px] leading-[30px] mb-2.5">Green</h3>
                  <p className="text-white font-light text-[21px] leading-[30px]">Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours</p>
                </figcaption>
              </div>
            </div>
            <div className="col flex-1">
              <div className="product__card">
                <figure className="product__card_img h-[300px]">
                  <Image 
                    src="/images/img-5.jpg" 
                    alt="White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat." 
                    width={750} 
                    height={300} 
                    layout="intrinsic" 
                  />
                </figure>
                <figcaption className="product__card_text px-[30px] pt-[30px]">
                  <h3 className="text-white font-bold text-[21px] leading-[30px] mb-2.5">White</h3>
                  <p className="text-white font-light text-[21px] leading-[30px]">White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.</p>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
