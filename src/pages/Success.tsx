import delivery from "../assets/delivery.png"

export function Success() {
 return (
  <div className="flex">
   <div className="flex flex-col">

   <strong>Uhu! Pedido Confirmado</strong>
   <span>Agora é só aguardar que logo o café chegara até você</span>

   <div>
    <div>
     <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
     <span>Farrapos - Porto Alegre, RS</span>
    </div>
    <div>
     <span>Previsão de Entrega</span>
     <span>20 min - 30 min</span>
    </div>
    <div>
     <span>Pagamento na entrega</span>
     <span>Cartão de Crédito</span>
    </div>
   </div>
   </div>
   <img src={delivery} alt="" />
  </div>
 )
}