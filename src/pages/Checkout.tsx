import { MapPinLine } from "phosphor-react";

export function Checkout() {
 return(
  <div>
   <h1>Complete seu pedido</h1>
   <div className="flex">

   <form action="" className="flex flex-col">
    <label htmlFor=""><MapPinLine size={22} color="#5f3dc4" weight="bold" /></label>
    <label htmlFor="">Endereço de Entrega</label>
    <label htmlFor="">Informe o endereço onde deseja receber</label>
    <input type="text" className="bg-gray-400" />
    <input type="text" className="bg-gray-400" />
    <input type="text" className="bg-gray-400"/>
    <input type="text" className="bg-gray-400"/>
    <input type="text" className="bg-gray-400"/>
    <input type="text" className="bg-gray-400"/>
    <input type="text" className="bg-gray-400"/>
   </form>
  </div>

  <div>
   <h1>Café selecionados</h1>
   
  </div>
   </div>
 )
}