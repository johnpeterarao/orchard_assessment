import Image from "next/image";
import { Product } from "@/types/types";



const ProductCard = ({ product } : { product: Product} ) => {
    return (  
        <div className="product__card">
            <figure className="product__card_img h-[300px]">
                <Image 
                src={`/images/${product.image}`} 
                alt={product.metaImage} 
                width={750} 
                height={300} 
                layout="intrinsic" 
                />
            </figure>
            <figcaption className="product__card_text px-5 pt-5 md:px-[30px] md:pt-[30px]">
                <h3 className="text-white font-bold mb-2.5  text-[18px] leading-[27px] md:text-[21px] md:leading-[30px] ">{product.title}</h3>
                <p className="text-white font-light text-base leading-7 md:text-[21px] md:leading-[30px]">{product.text}</p>
            </figcaption>
        </div>
    );
}
 
export default ProductCard;