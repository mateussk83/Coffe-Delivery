import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Card } from "../components/Card";

export function Checkout() {
 return (
  <form id="checkout" action="">

  <div id="adress" className="flex px-[8rem] pt-10">
   <div>

    <h1 className="font-bold text-lg">Complete seu pedido</h1>
    <div className="flex flex-col pr-8 pt-3">

     <div className="flex flex-col p-10 bg-gray-200 rounded-md">
      <div className="flex items-start justify-start gap-2">
       <label htmlFor=""><MapPinLine size={22} color="#5f3dc4" weight="bold" /></label>
       <div className="flex flex-col">
        <label htmlFor="">Endereço de Entrega</label>
        <label htmlFor="">Informe o endereço onde deseja receber</label>
       </div>
      </div>
      <input type="text" className="bg-gray-300 text-gray-600 border border-gray-400 p-3 mt-8 w-[200px] rounded-md placeholder:text-gray-600" placeholder="CEP" />
      <input type="text" className="bg-gray-300 text-gray-600 border  border-gray-400 p-3 w-[560px] mt-4 rounded-md placeholder:text-gray-600" placeholder="Rua" />
      <div className="flex mt-4 gap-3">
       <input type="text" className="bg-gray-300 text-gray-600 border border-gray-400 p-3 rounded-md placeholder:text-gray-600" placeholder="Número" />
       <input type="text" className="bg-gray-300 text-gray-600 border  border-gray-400 p-3 rounded-md placeholder:text-gray-600" placeholder="Complemento" />
      </div>
      <div className="flex mt-4 gap-3">
       <input type="text" className="bg-gray-300 text-gray-800 border  border-gray-400 p-3 rounded-md placeholder:text-gray-600" placeholder="Bairro" />
       <input type="text" className="bg-gray-300 text-gray-600 border  border-gray-400 p-3 rounded-md placeholder:text-gray-600" placeholder="Cidade" />
       <input type="text" className="bg-gray-300 text-gray-600 border  border-gray-400 p-3 rounded-md placeholder:text-gray-600" placeholder="UF" />
      </div>
     </div>
     <div className="flex bg-gray-200 mt-3 p-10 rounded-md">
      <div className="flex gap-2 ">
       <CurrencyDollar size={25} color="#5f3dc4" weight="bold" />
       <div className="flex-col flex ">
        <strong>Pagamento</strong>
        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        <div className="flex items-center justify-center gap-3 pt-8">
         <a className="font-normal flex items-center justify-center duration-200  bg-gray-400 text-xs p-4 w-[178px] h-[51px] rounded-md gap-3 hover:bg-gray-500 focus:border-blue-500 focus:border-solid focus:border"><CreditCard size={16} color="#5f3dc4"/>CARTÂO DE CRÉDITO</a>
         <a className="font-normal flex items-center justify-center duration-200  bg-gray-400 text-xs p-4 w-[178px] h-[51px] border-none rounded-md gap-3 hover:bg-gray-500 focus:border-blue-500 focus:border-solid focus:border"><Bank size={16} color="#5f3dc4"/>CARTÂO DE DÉBITO</a>
         <a className="font-normal flex items-center justify-start text-start duration-200  bg-gray-400 text-xs p-4 w-[178px] h-[51px] border-none rounded-md gap-3 hover:bg-gray-500 focus:border-blue-500 focus:border-solid focus:border"><Money size={16} color="#5f3dc4"/>DINHEIRO</a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div>
    <h1 className="font-bold text-lg pb-3">Café selecionados</h1>
    <div className="bg-gray-300 rounded-tr-3xl rounded-bl-3xl border border-bottom p-10 flex flex-col gap-12">
    <div className="">
    <Card type="buy" description="" img="" price='' title='' caracters={['']} />
    <div className="pt-6">
    <Card type="buy" description="" img="" price='' title='' caracters={['']} />
    </div>
    </div>
    <div className="flex justify-between">

    <div className="flex flex-col"> 
   <span>Total de Itens</span>
   <span>Entrega</span>
   <strong>Total</strong>
   </div>
    <div className="flex flex-col">
     <span>R$ 29,70</span>
     <span>R$ 3,50</span>
     <strong>R$ 33,20</strong>
     </div>
     
    </div>
   <a href="" className="p-3 flex text-center justify-center bg-yellow-500 text-white rounded-md hover:bg-yellow-700 duration-200 ">CONFIRMAR PEDIDO</a>
    </div>
   </div>
  </div>
  </form>
 )
}