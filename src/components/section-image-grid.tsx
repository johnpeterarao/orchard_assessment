import Image from "next/image";
import Link from "next/link";
import { imageDTO } from "@/types/types";

type articles = {
    title: string;
    caption: string;
    link: string;
}

type gridImage = {
    alt: string
    img: string
}

type imageGridSectionDataDTO = {
    heading: string;
    text: string;
    backgroundColor: string;
    articles: articles[];
    coverImage: {
        src: string;
        alt: string
    };
    mobileCoverImage: {
        src: string;
        alt: string;
        //see comment 9
    };
    gridImages: gridImage[];
    appearance: string;
}



interface SectionImageGridProps {
    data: imageGridSectionDataDTO; 
    onConsoleLog: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    onOpenModal: (imageData: imageDTO) => void;
}

const SectionImageGrid: React.FC<SectionImageGridProps> = ({data, onConsoleLog, onOpenModal }) => {
    return (  
        <section 
            style={{ backgroundColor: data.backgroundColor}} 
            className="grid__section py-[60px] md:py-[120px] overflow-hidden"
        >   {/* See comment #2  */}
            <div className="container">
                <div className={`grid__row md:flex ${data?.appearance != 'text-first' ? 'flex-row-reverse' : ''} `}>
                    <div className={`grid__content md:w-[36.43%] ${data?.appearance != 'text-first' ? 'md:pl-[30px]' : 'md:pr-[30px]'}`}>
                        <div className="block mb-5 grid__content--cover h-[210px] md:hidden">
                            <Image 
                                src={`/images/${data?.mobileCoverImage.src}`} 
                                alt={data?.mobileCoverImage.alt} 
                                width={700} 
                                height={350} 
                                layout="intrinsic"
                                className="cursor-pointer"
                                onClick={ () => {
                                    onOpenModal({
                                        imgSrc: `/images/${data?.mobileCoverImage.src}`,
                                        alt: data?.coverImage.alt
                                    })
                                }}
                            />
                        </div>
                        <h1 className="heading-1 grid__content--title">{data.heading}</h1> {/* comment 3  */}
                        <p className="grid__content--text text-base leading-7 text-white font-light mb-[30px] md:text-[21px] md:leading-[30px]">{data.text}</p>  {/* comment 4  */}

                        {data?.articles.map((article: articles, ind: number) => (
                            <article key={ind}> {/* comment 5  */}
                                <h5 className="font-bold uppercase text-red text-[15px] mb-2.5 leading-[21px]">{article.caption}</h5>
                                <h3>
                                    <Link className="font-bold uppercase text-white text-[18px] leading-[27px] md:text-[21px] md:leading-[30px]" href="/test-link" onClick={(e) => onConsoleLog(e)}>
                                        {article.title}
                                    </Link>
                                </h3>
                            </article>
                        ))}
                    </div>
                    <div className="grid__images md:w-[63.57%] flex flex-wrap gap-2.5 mt-10 md:mt-0">
                        <div className="grid__images--cover flex-1 hidden md:block">
                            <Image 
                                src={`/images/${data?.coverImage.src}`} 
                                alt={data?.coverImage.alt} 
                                width={744} 
                                height={600} 
                                layout="intrinsic" 
                                className="cursor-pointer"
                                onClick={ () => {
                                    onOpenModal({
                                        imgSrc: `/images/${data?.mobileCoverImage.src}`,
                                        alt: data?.coverImage.alt
                                    })
                                }}
                            />
                        </div>
                        <div className="grid__images--items flex-1 flex-wrap flex gap-2.5">
                            { data?.gridImages.map((imageBlock: gridImage, ind: number) => (
                                <Image 
                                    src={`/images/${imageBlock.img}`} 
                                    alt={imageBlock.alt}
                                    width={744} 
                                    height={400} 
                                    layout="intrinsic" 
                                    key={ind}
                                    className="cursor-pointer"
                                    onClick={ () => {
                                    onOpenModal({
                                        imgSrc: `/images/${imageBlock.img}`,
                                        alt: imageBlock.alt
                                    })
                                }}
                                />
                            ))}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
}
 
export default SectionImageGrid;