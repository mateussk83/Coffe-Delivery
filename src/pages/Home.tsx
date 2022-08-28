import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
 return (
  <div className="flex justify-start items-center pt-[5.875rem] gap-14">
  <div>
   <div className="w-[588px] flex flex-col gap-4">
  <strong className="font-baloo text-5xl">Encontre o café perfeito para qualquer hora do dia</strong>  
  <span className="flex font-roboto font-normal text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
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
   <img src="./src/assets/coffe.png" alt="" />
  </div>
  </div>
 )
}