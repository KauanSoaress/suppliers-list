import { Link } from 'react-router-dom'
import '../styles/Home.css'
import SupplierRegister from '../components/SupplierRegister'
import { useState } from 'react'

export default function Home() {

  const [openSupplierRegister, setOpenSupplierRegister] = useState(false)
  
  return <div className="home">
    <h1 className='title-home'>Desafio Insight</h1>
    <button className='check-list-button' onClick={() => setOpenSupplierRegister(true)}>
      Cadastrar novo fornecedor
      </button>
    <Link to="/suppliers-list" className='check-list-button'>Conferir lista de fornecedores</Link>
    <SupplierRegister 
      isOpen={openSupplierRegister}
      setCloseSupplierRegister={() => setOpenSupplierRegister(!openSupplierRegister)}
    />
  </div>
}