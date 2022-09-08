import { Minus, Plus, ShoppingCart } from "phosphor-react";
import cafeTradicional from "../assets/cafeTradicional.png"

interface CardProps {
 description: string;
 img: string;
 title: string;
 price: string;
}
export function Card({ description, img, title, price }:CardProps) {
 return (
  <div className="flex flex-col text-center justify-center items-center w-[256px] h-[310px] bg-gray-200 border-none rounded-tr-3xl rounded-bl-3xl">
   <img src={cafeTradicional} alt="" className="max-w-[120px] mt-[-1.5rem]"/>
   <div className="mt-3 font-bold text-xs bg-yellow-300 py-1 px-2 border-none rounded-full text-yellow-700">
   <span>TRADICIONAL</span>
   </div>
   <strong className="pt-4">{title}</strong>
   <span className="pt-2 text-gray-600">{description}</span>
   
   <div className="flex items-center p-8">
    <span className="text-base">R$<strong className="font-bold">{price}</strong></span>
    
    <div className="p-2 bg-blue-300 rounded-md flex justify-center items-center ml-6 mr-2">
    
    <a href="" className="mr-1"><Minus size={14} color="#5f3dc4" weight="fill" /></a>
    <span>0</span>
    <a href="" className="ml-1 "><Plus size={14} color="#5f3dc4" weight="fill" /></a>
    </div>
    
    <a href="" className="p-2 bg-blue-500 border rounded-md border-none ">
    <ShoppingCart size={25} color="#fff" weight="fill" />
    </a>
   </div>
  </div>
 )
}