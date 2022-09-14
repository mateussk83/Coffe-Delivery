import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export function Checkout() {
 return (
  <div className="flex px-[8rem]">
   <div>

    <h1 className="font-bold text-lg">Complete seu pedido</h1>
    <div className="flex flex-col">

     <form action="" className="flex flex-col p-10 bg-gray-200">
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
     </form>
     <div className="flex bg-gray-200 mt-3 p-10">
      <div className="flex gap-2 ">
       <CurrencyDollar size={25} color="#5f3dc4" weight="bold" />
       <div className="flex-col flex ">
        <strong>Pagamento</strong>
        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        <div className="flex items-center justify-center gap-3 pt-8">
         <a href="" className="font-normal flex items-center justify-center bg-gray-400 text-xs p-4 w-[178px] h-[51px] border-none rounded-md gap-3"><CreditCard size={16} color="#5f3dc4"/>CARTÂO DE CRÉDITO</a>
         <a href="" className="font-normal flex items-center justify-center bg-gray-400 text-xs p-4 w-[178px] h-[51px] border-none rounded-md gap-3"><Bank size={16} color="#5f3dc4"/>CARTÂO DE DÉBITO</a>
         <a href="" className="font-normal flex items-center justify-start text-start bg-gray-400 text-xs p-4 w-[178px] h-[51px] border-none rounded-md gap-3"><Money size={16} color="#5f3dc4"/>DINHEIRO</a>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div>
    <h1>Café selecionados</h1>

   </div>
  </div>
 )
}