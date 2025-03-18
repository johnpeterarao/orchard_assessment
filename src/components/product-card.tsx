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
            <figcaption className="product__card_text px-[30px] pt-[30px]">
                <h3 className="text-white font-bold text-[21px] leading-[30px] mb-2.5">{product.title}</h3>
                <p className="text-white font-light text-[21px] leading-[30px]">{product.text}</p>
            </figcaption>
        </div>
    );
}
 
export default ProductCard;