import '../styles/FormModal.css';
import { useNavigate } from "react-router-dom";
import { SuppliersArray } from '../service/arrays/SuppliersArray';
import { ISupplier } from '../types/models';
import { ISupplierInitialState } from '../types/common/ISupplierInitialState';
import { useState } from 'react';
import { Input } from '../components/Input';

interface SupplierRegisterProps {
  isOpen: boolean;
  setCloseSupplierRegister: () => void;
}

export default function SupplierRegister(SupplierRegisterProps: SupplierRegisterProps) {

  const navigate = useNavigate();

  const suppliersArray: ISupplier[] = SuppliersArray;

  const [supplierToRegister, setSupplierToRegister] = useState<ISupplier>(ISupplierInitialState);

  function handleChangeName(newName: string){
    const objectToSave: ISupplier = {
      ...supplierToRegister,
    }
    objectToSave.name = newName

    setSupplierToRegister({
      ...objectToSave,
    })
  }

  function handleChangeCategory(newCategory: string){
    const objectToSave: ISupplier = {
      ...supplierToRegister,
    }
    objectToSave.category = newCategory

    setSupplierToRegister({
      ...objectToSave,
    })
  }

  function handleChangeAddress(newAddress: string){
    const objectToSave: ISupplier = {
      ...supplierToRegister,
    }
    objectToSave.address = newAddress

    setSupplierToRegister({
      ...objectToSave,
    })
  }

  function handleChangeEmail(newEmail: string){
    const objectToSave: ISupplier = {
      ...supplierToRegister,
    }
    objectToSave.email = newEmail

    setSupplierToRegister({
      ...objectToSave,
    })
  }

  function handleChangePhone(newPhone: string){
    const objectToSave: ISupplier = {
      ...supplierToRegister,
    }
    objectToSave.phone = newPhone

    setSupplierToRegister({
      ...objectToSave,
    })
  }

  function handleSave(){
    const id = suppliersArray.length + 1;
    supplierToRegister.id = id;
    suppliersArray.push(supplierToRegister);
    navigate('/');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Isso impede que o formulário seja enviado
    handleSave();
  }

  if (SupplierRegisterProps.isOpen) {
    return (
      <div className="fundo">
        <form onSubmit={handleSubmit}>
          <div className="form-header">
            <legend>Cadastro de fornecedor</legend>
            <button 
              className='close-button' 
              onClick={SupplierRegisterProps.setCloseSupplierRegister}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 31.1667C24.824 31.1667 31.1666 24.8241 31.1666 17C31.1666 9.17601 24.824 2.83337 17 2.83337C9.17595 2.83337 2.83331 9.17601 2.83331 17C2.83331 24.8241 9.17595 31.1667 17 31.1667Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 12.75L12.75 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.75 12.75L21.25 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <Input defaultValue='' name='Nome' required={true} type='text' handleChange={handleChangeName}>Nome</Input>
          <Input defaultValue='' name='Categoria' required={true} type='text' handleChange={handleChangeCategory}>Categoria</Input>
          <Input defaultValue='' name='Endereco' required={true} type='text' handleChange={handleChangeAddress}>Endereço</Input>
          <Input defaultValue='' name='Email' required={true} type='email' handleChange={handleChangeEmail}>E-mail</Input>
          <Input defaultValue='' name='Numero' required={true} type='tel' handleChange={handleChangePhone}>Número</Input>

          <button 
            className='registerButton' 
            type="submit"
          >
            Cadastrar
          </button>

        </form>
      </div>
    );
  }
  return null;
}