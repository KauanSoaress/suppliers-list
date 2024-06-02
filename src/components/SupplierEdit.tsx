import '../styles/FormModal.css';

interface SupplierEditProps {
  isOpen: boolean;
  setCloseSupplierEdit: () => void;
}

export default function SupplierEdit(SupplierEditProps: SupplierEditProps) {

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

          <label htmlFor="supplier-name">Nome</label>
          <input
            required 
            type="text" 
            id="supplier-name" 
            name="supplier-name" 
            defaultValue='Roberto da Silva'
          />

          <label htmlFor="supplier-category">Categoria</label>
          <input
            required 
            type="text" 
            id="supplier-category" 
            name="supplier-category" 
            defaultValue='Roupas e acessórios'
          />

          <label htmlFor="supplier-address">Endereço</label>
          <input
            required 
            type="text" 
            id="supplier-address" 
            name="supplier-address" 
            defaultValue='Rua, numero'
          />

          <label htmlFor="supplier-email">E-mail</label>
          <input
            required 
            type="email" 
            id="supplier-email" 
            name="supplier-email" 
            defaultValue='emailexemplo@gmail.com'
          />

          <label htmlFor="supplier-phone">Telefone</label>
          <input
            required 
            type="tel" 
            id="supplier-phone" 
            name="supplier-phone" 
            defaultValue='(99)9 9999-9999'
          />

          <button className='editButton' type="submit">Pronto</button>
        </form>
      </div>
    );
  }
  return null;
}