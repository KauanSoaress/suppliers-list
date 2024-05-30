import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SuppliersList from "../pages/SuppliersList"


export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/suppliers-list" element={<SuppliersList />} />
    </Routes>
  )
}