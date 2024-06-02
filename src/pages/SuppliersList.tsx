import SupplierCard from '../components/SupplierCard';
import '../styles/SuppliersList.css';
import { Link } from 'react-router-dom';
import DeleteConfirm from '../components/DeleteConfirm';
import SupplierEdit from '../components/SupplierEdit';
import SupplierDetails from '../components/SupplierDetails';
import { SetStateAction, useState } from 'react';
import { SuppliersArray } from '../service/arrays/SuppliersArray';

export default function SuppliersList() {

  const suppliersArray = SuppliersArray;

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false)
  const [openSupplierEdit, setOpenSupplierEdit] = useState(false)
  const [openSupplierDetails, setOpenSupplierDetails] = useState(false)

  const [selectedSupplierId, setSelectedSupplierId] = useState(null);

  const handleDetailsClick = (id: SetStateAction<null>) => {
    setSelectedSupplierId(id);
  };

  return <div className="suppliers-list-container">
    <header className='header'>
      <Link to="/" className='arrow-back'>
        <img src="Arrow-back.svg" alt="arrowback" className='arrow-image' />
      </Link>
      <h1 className='supplier-list-title'>Lista de fornecedores</h1>
    </header>
    <hr />
    <div className="cards-div">
      {
        suppliersArray.map((supplier) => {
          return <SupplierCard 
            key={supplier.id} 
            supplierId={supplier.id}
            supplierName={supplier.name} 
            supplierCategory={supplier.category}
            supplierAddress={supplier.address}
            supplierPhone={supplier.phone}
            supplierEmail={supplier.email}

            onDetailsClick={handleDetailsClick}

            openDeleteConfirm={openDeleteConfirm} 
            setOpenDeleteConfirm={setOpenDeleteConfirm}

            openSupplierEdit={openSupplierEdit}
            setOpenSupplierEdit={setOpenSupplierEdit}
            
            openSupplierDetails={openSupplierDetails}
            setOpenSupplierDetails={setOpenSupplierDetails}
          />
        })
      }
    </div>

    {
      SuppliersArray.filter(supplier => supplier.id === selectedSupplierId).map((supplier) => {
        return <SupplierDetails 
          key={supplier.id}
          isOpen={openSupplierDetails} 
          setCloseSupplierDetails={() => setOpenSupplierDetails(!openSupplierDetails)}
          supplierName={supplier.name}
          supplierCategory={supplier.category}
          supplierAddress={supplier.address}
          supplierPhone={supplier.phone}
          supplierEmail={supplier.email}
        />
      })
    }

    <SupplierEdit 
      isOpen={openSupplierEdit} 
      setCloseSupplierEdit={() => setOpenSupplierEdit(!openSupplierEdit)}
    />
    
    <DeleteConfirm 
      isOpen={openDeleteConfirm} 
      setCloseDeleteConfirm={() => setOpenDeleteConfirm(!openDeleteConfirm)} 
    />

  </div>
}