import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return <div className="home">
    <h1 className='title-home'>Desafio Insight</h1>
    <Link to="/suppliers-list" className='check-list-button'>Cadastrar novo fornecedor</Link>
    <Link to="/suppliers-list" className='check-list-button'>Conferir lista de fornecedores</Link>
  </div>
}