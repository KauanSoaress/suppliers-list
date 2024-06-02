import SupplierCard from '../components/SupplierCard';
import '../styles/SuppliersList.css';
import { Link } from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import SupplierEdit from '../components/SupplierEdit';
import SupplierDetails from '../components/SupplierDetails';
import { useState } from 'react';

export default function SuppliersList() {

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false)
  const [openSupplierEdit, setOpenSupplierEdit] = useState(false)
  const [openSupplierDetails, setOpenSupplierDetails] = useState(false)

  return <div className="suppliers-list-container">
    <header className='header'>
      <Link to="/" className='arrow-back'>
        <img src="Arrow-back.svg" alt="arrowback" className='arrow-image' />
      </Link>
      <h1 className='supplier-list-title'>Lista de fornecedores</h1>
    </header>
    <hr />
    <div className="cards-div">
      <SupplierCard 
        supplierName="Kauan Soares"   
        openDeleteConfirm={openDeleteConfirm} 
        setOpenDeleteConfirm={setOpenDeleteConfirm}
        openSupplierEdit={openSupplierEdit}
        setOpenSupplierEdit={setOpenSupplierEdit}
        openSupplierDetails={openSupplierDetails}
        setOpenSupplierDetails={setOpenSupplierDetails}
      />
      <SupplierCard supplierName="Driccia Hellen" 
        openDeleteConfirm={openDeleteConfirm} 
        setOpenDeleteConfirm={setOpenDeleteConfirm}
        openSupplierEdit={openSupplierEdit}
        setOpenSupplierEdit={setOpenSupplierEdit}
        openSupplierDetails={openSupplierDetails}
        setOpenSupplierDetails={setOpenSupplierDetails}
      />
      <SupplierCard supplierName="Ana Lorena"     
        openDeleteConfirm={openDeleteConfirm} 
        setOpenDeleteConfirm={setOpenDeleteConfirm}
        openSupplierEdit={openSupplierEdit}
        setOpenSupplierEdit={setOpenSupplierEdit}
        openSupplierDetails={openSupplierDetails}
        setOpenSupplierDetails={setOpenSupplierDetails}
      />
    </div>

    <DeleteConfirm 
      isOpen={openDeleteConfirm} 
      setCloseDeleteConfirm={() => setOpenDeleteConfirm(!openDeleteConfirm)} 
    />
    <SupplierEdit 
      isOpen={openSupplierEdit} 
      setCloseSupplierEdit={() => setOpenSupplierEdit(!openSupplierEdit)}
    />
    <SupplierDetails 
      isOpen={openSupplierDetails} 
      setCloseSupplierDetails={() => setOpenSupplierDetails(!openSupplierDetails)}
    />

  </div>
}