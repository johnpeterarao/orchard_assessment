import { Product } from "@/types/types";
import ProductCard from "./product-card";
import { imageDTO } from "@/types/types";

type productSectionDataDTO = {
    heading: string
    products: Product[],
    backgroundColor: string
}

interface SectionImageGridProps {
    data: productSectionDataDTO; 
    onConsoleLog: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onOpenModal: (imageData: imageDTO) => void;
}

const ProductsSection: React.FC<SectionImageGridProps> = ({ data, onConsoleLog, onOpenModal }  ) => {
    return (  
        <section 
            style={{ backgroundColor: data.backgroundColor}} 
            className={`product__section py-[60px] md:py-[120px]`}
        >
            <div className="container">
                <div className="text-center">
                <h2 className="heading-1 inline-block">Taste the Colours</h2> {/* comment 6  */}
                    <div className="flex flex-wrap gap-2.5">
                        {
                            data?.products.map((product: Product, index: number) => (
                                <div className="col mb-5 md:flex-1 md:mb-0" key={index}>
                                    <ProductCard product={product} onConsoleLog={onConsoleLog} onOpenModal={onOpenModal}/>
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