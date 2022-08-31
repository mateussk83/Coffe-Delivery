import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
 return (
  <div>
  <div  className="after:content-[''] after:flex after:mb-20" >
  <Header />
  </div>
  <Outlet />
  </div>
 )
}