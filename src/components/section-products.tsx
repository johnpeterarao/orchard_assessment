import { Product } from "@/types/types";
import ProductCard from "./product-card";

type productSectionDataDTO = {
    heading: string,
    paddingTop: number,
    paddingBottom: number,
    products: Product[],
    backgroundColor: string
}

const ProductsSection = ({ data } : { data: productSectionDataDTO} ) => {
    return (  
        <section style={{ backgroundColor: data.backgroundColor, paddingTop: data.paddingTop + 'px', paddingBottom: data.paddingBottom + 'px'}} className={`product__section`}>
            <div className="container">
                <div className="text-center">
                <h2 className="heading-1 inline-block">Taste the Colours</h2> {/* comment 6  */}
                <div className="flex flex-wrap gap-2.5">
                    {
                        data?.products.map((product: Product, index: number) => (
                            <div className="col flex-1" key={index}>
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProductsSection;