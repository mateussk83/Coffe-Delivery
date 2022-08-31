import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "../components/Card";

import homeCoffe from "../assets/homeCoffe.png"

export function Home() {
 return (
<div className=" px-[8rem]">
  <div className="flex justify-start items-center pt-[5.875rem] gap-14 mb-[6.75rem] px-6">
  <div>
   <div className="w-[588px] flex flex-col gap-4">
  <strong className="font-bold text-5xl">Encontre o café perfeito para qualquer hora do dia</strong>  
  <span className=" flex font-normal text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
  </div>


  <div className="flex justify-center items-center mt-16 gap-10">

  <div className="flex flex-col gap-5 items-start">

   <span className="flex items-center justify-center gap-3 text-base">
   <div className="border-none rounded-full bg-yellow-500 p-1.5">
   <ShoppingCart size={16} color="#fff" weight="fill"/>
   </div>
   Compra simples e segura
   </span>

   <span className="flex items-center justify-center gap-3">
    <div className="border-none rounded-full bg-yellow-700 p-1.5">
   <Timer size={16} color="#fff" weight="fill"/>
   </div>
   Entrega rápido e rastreada
   </span>
  </div>

<div className="flex flex-col gap-5 items-start">
   <span className="flex items-center justify-center gap-3">
   <div className="border-none rounded-full bg-gray-800 p-1.5">
   <Package size={16} color="#fff" weight="fill"/>
   </div>
   Embalagem mantém o café intacto
   </span>

   <span className="flex items-center justify-center gap-3">
   <div className="border-none rounded-full bg-blue-500 p-1.5">
   <Coffee size={16} color="#fff" weight="fill"/>
   </div>
   O café chega fresquinho até você
   </span>

</div>

  </div>
  </div>
  <div>
   <img src={homeCoffe} alt="" />
  </div>
  </div>

  <div className="">
   <div id="title" className="my-8 text-3xl">
   <strong> 
   Nossos Cafés
   </strong>
   </div>
   <div className="pt-12 grid grid-cols-4 gap-8 gap-y-20 content-center ">
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  <div><Card/></div>
  </div>
  </div>


  </div>
 )
}