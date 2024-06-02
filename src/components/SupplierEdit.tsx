import { useNavigate } from 'react-router-dom';
import '../styles/FormModal.css';
import { ISupplier } from '../types/models';
import { useState } from 'react';
import { SuppliersArray } from '../service/arrays/SuppliersArray';
import { ISupplierInitialState } from '../types/common/ISupplierInitialState';
import { Input } from './Input';

interface SupplierEditProps {
  isOpen: boolean;
  setCloseSupplierEdit: () => void;
  supplierToEdit: ISupplier;
}

export default function SupplierEdit(SupplierEditProps: SupplierEditProps) {

  const navigate = useNavigate();

  const suppliersArray: ISupplier[] = SuppliersArray;

  const [supplierAfterEdit, setSupplierAfterEdit] = useState(SupplierEditProps.supplierToEdit);

  function handleChangeName(newName: string){
    setSupplierAfterEdit(prevState => ({
      ...prevState,
      name: newName
    }));
  }

  function handleChangeCategory(newCategory: string){
    setSupplierAfterEdit(prevState => ({
      ...prevState,
      category: newCategory
    }));
  }

  function handleChangeAddress(newAddress: string){
    setSupplierAfterEdit(prevState => ({
      ...prevState,
      address: newAddress
    }));
  }

  function handleChangeEmail(newEmail: string){
    setSupplierAfterEdit(prevState => ({
      ...prevState,
      email: newEmail
    }));
  }

  function handleChangePhone(newPhone: string){
    setSupplierAfterEdit(prevState => ({
      ...prevState,
      phone: newPhone
    }));
  }

  function handleSave(){
    suppliersArray.splice(suppliersArray.findIndex(supplier => supplier.id === SupplierEditProps.supplierToEdit.id), 1);
    supplierAfterEdit.id = SupplierEditProps.supplierToEdit.id;
    suppliersArray.push(supplierAfterEdit);
    navigate('/');
  }

  if (SupplierEditProps.isOpen) {
    return (
      <div className="fundo">
        <form action="">
          <div className="form-header">
            <legend>Editar fornecedor</legend>
            <button 
              className='close-button' 
              onClick={SupplierEditProps.setCloseSupplierEdit}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 31.1667C24.824 31.1667 31.1666 24.8241 31.1666 17C31.1666 9.17601 24.824 2.83337 17 2.83337C9.17595 2.83337 2.83331 9.17601 2.83331 17C2.83331 24.8241 9.17595 31.1667 17 31.1667Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 12.75L12.75 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.75 12.75L21.25 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <Input defaultValue={SupplierEditProps.supplierToEdit.name} name='Nome' handleChange={handleChangeName}>Nome</Input>
          <Input defaultValue={SupplierEditProps.supplierToEdit.category} name='Categoria' handleChange={handleChangeCategory}>Categoria</Input>
          <Input defaultValue={SupplierEditProps.supplierToEdit.address} name='Endereco' handleChange={handleChangeAddress}>Endereço</Input>
          <Input defaultValue={SupplierEditProps.supplierToEdit.email} name='Email' handleChange={handleChangeEmail}>E-mail</Input>
          <Input defaultValue={SupplierEditProps.supplierToEdit.phone} name='Numero' handleChange={handleChangePhone}>Número</Input>

          <button 
            className='editButton' 
            type="submit"
            onClick={handleSave}
          >
            Pronto
          </button>
        </form>
      </div>
    );
  }
  return null;
}