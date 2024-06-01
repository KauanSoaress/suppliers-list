import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SuppliersList from "../pages/SuppliersList"
import SupplierRegister from "../components/SupplierRegister"


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suppliers-list" element={<SuppliersList />} />
      <Route path="/supplier-register" element={<SupplierRegister />} />
    </Routes>
  )
}