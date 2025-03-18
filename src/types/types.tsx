export interface Product {
    title: string;
    text: string;
    alt: string;
    image: string;
    link: string;
}

export type imageDTO = {
    imgSrc: string;
    alt: string;
    title?: string;
}