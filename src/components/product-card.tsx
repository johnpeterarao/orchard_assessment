import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";
import { imageDTO } from "@/types/types";



const ProductCard = ({ product, onConsoleLog, onOpenModal } : { product: Product, onOpenModal: (imageData: imageDTO) => void, onConsoleLog: (e: React.MouseEvent<HTMLAnchorElement>) => void } ) => {
    return (  
        <div className="product__card relative">
            <figure className="product__card_img h-[250px] md:h-[300px] overflow-hidden">
                <Image 
                    src={`/images/${product.image}`} 
                    alt={product.alt} 
                    width={750} 
                    height={300} 
                    layout="intrinsic" 
                    title={product.title}
                    className="cursor-pointer"
                    onClick={ () => {
                        onOpenModal({
                            imgSrc: `/images/${product.image}`,
                            alt: product.alt
                        })
                    }}
                />
            </figure>
            <figcaption className="product__card_text relative px-5 pt-5 md:px-[30px] md:pt-[30px]">
                <h3 className="text-white font-bold mb-2.5  text-[18px] leading-[27px] md:text-[21px] md:leading-[30px] ">
                    <Link 
                        href={product.link}
                        onClick={(e) => onConsoleLog(e)}
                    >
                        {product.title}
                    </Link>
                </h3>
                <p className="text-white font-light text-base leading-7 md:text-[21px] md:leading-[30px]">
                    <Link
                        href={product.link}
                        onClick={(e) => onConsoleLog(e)}
                    >
                        {product.text}
                    </Link>
                </p>
            </figcaption>
        </div>
    );
}
 
export default ProductCard;