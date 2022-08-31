import { Logo } from "../assets/Logo"
import { MapPin, ShoppingCart } from "phosphor-react"
export function Header() {
 return (
  <header className="fixed flex justify-center items-center text-center py-8 gap-[40rem]  w-[100%]">
   <div>
    <Logo/>
   </div>
   <div className="flex text-center gap-[0.75rem]">
    <a href="#" className="p-2 font-roboto border flex justify-center gap-1 bg-blue-300 border-none text-blue-700 rounded-md">
    <MapPin size={25} color="#5f3dc4" />
    Porto Alegre, RS
    </a>
    
    <a href="" className="p-2 bg-yellow-300 border rounded-md border-none ">
    <ShoppingCart size={25} color="#C47F17" />
    </a>
   </div>
  </header>
 )
}