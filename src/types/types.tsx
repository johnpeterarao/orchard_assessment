export interface Product {
    title: string;
    text: string;
    metaImage: string;
    image: string;
    link: string;
}

export type imageDTO = {
    imgSrc: string;
    meta: string;
    title?: string;
}