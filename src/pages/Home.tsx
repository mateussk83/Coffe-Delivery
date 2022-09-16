import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "../components/Card";
import cafeTradicional from "../assets/cafeTradicional.png"

import homeCoffe from "../assets/homeCoffe.png"

const Coffes = [{
  title: 'Expresso Tradicional',
  caracter: ['tradicional'],
  description: 'O tradicional café feito com água quente e grãos moidos',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Expresso Americano',
  caracter: ['tradicional'],
  description: 'Expresso diluído, menos intenso que o tradicional',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Expresso Cremoso',
  caracter: ['tradicional'],
  description: 'Café expresso tradicional com espuma cremosa',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Expresso Gelado',
  caracter: ['tradicional', 'gelado'],
  description: 'Bebida preparada com café expresso e cubos de gelo',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Café com Leite',
  caracter: ['tradicional', 'com leite'],
  description: 'Meio a meio de expresso tradicional com leite vaporizado',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Latte',
  caracter: ['tradicional', 'com leite'],
  description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Capuccino',
  caracter: ['tradicional', 'com leite'],
  description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Macchiato',
  caracter: ['tradicional', 'com leite'],
  description: 'Café expresso misturado com um pouco de leite quente e espuma',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},
{
  title: 'Mocaccino',
  caracter: ['tradicional', 'com leite'],
  description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Chocolate Quente',
  caracter: ['especial', 'com leite'],
  description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Cubano',
  caracter: ['especial', 'alcoólico', 'gelado'],
  description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Havaiano',
  caracter: ['especial'],
  description: 'Bebida adocicada preparada com café e leite de coco',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Árabe',
  caracter: ['especial'],
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
},{
  title: 'Irlandês',
  caracter: ['especial', 'alcoólico'],
  description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  price: '9,90',
  img: "../assets/cafeTradicional.png"
}
]
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
  {Coffes.map(coffeNow => {
    return (
      <Card type="home" description={coffeNow.description} img={coffeNow.img} price={coffeNow.price} title={coffeNow.title} caracters={coffeNow.caracter}/>
    )
  })}
  </div>
  </div>


  </div>
 )
}