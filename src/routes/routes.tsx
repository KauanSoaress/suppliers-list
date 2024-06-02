import {Routes, Route, Navigate} from "react-router-dom"
import Home from "../pages/Home"
import SuppliersList from "../pages/SuppliersList"


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/suppliers-list" element={<SuppliersList />} />
    
      <Route path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  )
}