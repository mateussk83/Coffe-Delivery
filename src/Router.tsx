import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";


export function App() {
 return (
   <Routes>
    <Route path="/" element={<DefaultLayout/>}/>
   </Routes>
 )
}