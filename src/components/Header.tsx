import { Logo } from "../assets/Logo"
import { MapPin, ShoppingCart } from "phosphor-react"
export function Header() {
 return (
  <header className="flex justify-center items-center text-center">
   <div>
    <Logo/>
   </div>
   <div>
    <a href="#" className="">
    <MapPin size={25} color="#5f3dc4" />
    Porto Alegre, RS
    </a>
    
    <a href="">
    <ShoppingCart size={32} color="#5f3dc4" />
    </a>
   </div>
  </header>
 )
}