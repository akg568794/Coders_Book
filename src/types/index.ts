import { StaticImageData } from "next/image"

export type Book ={
    id:number,
    name:string,
    image:StaticImageData,
    author:string,
    description:string
}