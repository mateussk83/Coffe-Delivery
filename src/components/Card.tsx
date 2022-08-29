export function Card() {
 return (
  <div className="flex flex-col text-center justify-center items-center w-[256px] h-[310px] bg-gray-200 border-none rounded-tr-3xl rounded-bl-3xl">
   <img src="./src/assets/tradicional.png" alt="" className="max-w-[120px] mt-[-9rem]"/>
   <span>tradicional</span>
   <strong>Expresso Tradicional</strong>
   <span>O café feito com água quente e grãos moídos</span>
   <div>
    <span>R$<strong>9,90</strong></span>
    
   </div>
  </div>
 )
}