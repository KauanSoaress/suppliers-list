import SupplierCard from '../components/SupplierCard';
import '../styles/SuppliersList.css';
import { Link } from 'react-router-dom';

export default function SuppliersList() {
  return <>
    <header className='header'>
      <Link to="/" className='arrow-back'>
        <img src="Arrow-back.svg" alt="arrowback" className='arrow-image' />
      </Link>
      <h1 className='supplier-list-title'>Lista de fornecedores</h1>
    </header>
    <hr />
    <div className="cards-div">
      <SupplierCard supplierName="Kauan Soares"/>
      <SupplierCard supplierName="Driccia Hellen"/>
      <SupplierCard supplierName="Ana Lorena"/>
    </div>
  </>
}