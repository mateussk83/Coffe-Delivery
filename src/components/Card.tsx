import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { useState } from "react";
import cafeTradicional from "../assets/cafeTradicional.png"

interface CardProps {
 description: string;
 img: string;
 title: string;
 price: string;
 caracters: string[];
 type: string;
}
export function Card({ description, img, title, price, caracters, type }: CardProps) {

 const [countProduct, setCountProduct] = useState(0)

 function AppendCountProduct() {
  setCountProduct(countProduct + 1)
 }
 function RemoveCountProduct() {
  if (countProduct > 0) {
   setCountProduct(countProduct - 1)
  }
 }

 function registerCart() {

 }
 return (
  <div>
   {
    type == 'home'
     ?
     <div className="flex flex-col text-center justify-center items-center w-[256px] h-[310px] bg-gray-200 border-none rounded-tr-3xl rounded-bl-3xl">
      <img src={cafeTradicional} alt="" className="max-w-[120px] mt-[-1.5rem]" />
      <div className="flex gap-1">
       {caracters.map(caracter => {
        return (
         <div className="mt-3 font-bold text-xs bg-yellow-300 py-1 px-2 border-none rounded-full text-yellow-700 ">
          <span>{caracter}</span>
         </div>
        )
       })}
      </div>
      <strong className="pt-4">{title}</strong>
      <span className="pt-2 text-gray-600">{description}</span>

      <div className="flex items-center p-8">
       <span className="text-base">R$<strong className="font-bold">{price}</strong></span>

       <div className="p-2 bg-blue-300 rounded-md flex justify-center items-center ml-6 mr-2">

        <a onClick={RemoveCountProduct} className="mr-1"><Minus size={14} color="#5f3dc4" weight="fill" /></a>
        <span>{countProduct}</span>
        <a onClick={AppendCountProduct} className="ml-1 "><Plus size={14} color="#5f3dc4" weight="fill" /></a>
       </div>

       <a href="" className="p-2 bg-blue-500 border rounded-md border-none ">
        <ShoppingCart size={25} color="#fff" weight="fill" />
       </a>
      </div>
     </div>

     :

     <div className="flex bg-gray-300 w-[320px] justify-between border border-b-2 border-gray-400 border-t-0 border-r-0 border-l-0 pb-6">

      <div className="flex ">
      <img className="w-16 h-16" src={cafeTradicional} alt="" />

       <div className="flex flex-col">

        <span className="ml-5">Expresso Tradicional</span>

        <div className="flex gap-2 mt-2 ">
         <div className="p-2 rounded-md flex justify-center items-center ml-5 mr-2 bg-gray-400 ">
         <a onClick={RemoveCountProduct} className="mr-1"><Minus size={16} color="#5f3dc4" weight="fill" /></a>
         <span>{countProduct}</span>
         <a onClick={AppendCountProduct} className="ml-1"><Plus size={16} color="#5f3dc4" weight="fill" /></a>
         </div>
        <div className="flex">
        <a href="" className="p-2 flex justify-center items-center rounded-md bg-gray-400 gap-1"><Trash size={16} color="#5f3dc4" weight="bold" />Remover</a>
        </div>
       </div>
       </div>
      </div>
      <div className="">
      <strong>R$9.90</strong>
      </div>
     </div>
   }
  </div>

 )
}