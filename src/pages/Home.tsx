import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
 return (
  <div>
  <strong>Encontre o café perfeito para qualquer hora do dia</strong>
  <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
  <div>
   <span>
   <ShoppingCart size={32} color="#5f3dc4" weight="fill" />
   Compra simples e segura
   </span>
   <span>
   <Timer size={32} color="#5f3dc4" weight="fill" />
   Entrega rápido e rastreada
   </span>
   <span>
   <Package size={32} color="#5f3dc4" weight="fill" />
   Embalagem mantém o café intacto
   </span>
   <span>
   <Coffee size={32} color="#5f3dc4" weight="fill" />
   O café chega fresquinho até você
   </span>
  </div>
  <div>
   <img src="../assets/Coffe.png" alt="" />
  </div>
  </div>
 )
}