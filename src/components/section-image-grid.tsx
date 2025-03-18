import Image from "next/image";
import Link from "next/link";

type articles = {
    title: string;
    caption: string;
    link: string;
}

type imageGridSectionDataDTO = {
    heading: string;
    text: string;
    paddingTop: number;
    paddingBottom: number;
    backgroundColor: string;
    articles: articles[],
    coverImage: string,
    gridImages: string[]
}


const SectionImageGrid = ({data} : {data: any}) => {
    return (  
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
                        <h1 className="heading-1 grid__content--title">{data.heading}</h1> {/* comment 3  */}
                        <p className="grid__content--text text-white font-light text-[21px] leading-[30px] mb-[30px]">{data.text}</p>  {/* comment 4  */}

                        {data?.articles.map((article: articles, index: number) => (
                            <article> {/* comment 5  */}
                                <h5 className="font-bold uppercase text-red text-[15px] mb-2.5 leading-[21px]">{article.caption}</h5>
                                <h3>
                                    <Link className="font-bold uppercase text-white text-[21px] leading-[30px]" href="/test-link" onClick={(e) => handleConsoleLog(e)}>
                                        {article.title}
                                    </Link>
                                </h3>
                            </article>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}
 
export default SectionImageGrid;