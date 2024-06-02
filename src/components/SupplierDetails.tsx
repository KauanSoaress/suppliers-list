import '../styles/SupplierDetails.css';

interface SupplierDetailsProps {
  isOpen: boolean;
  setCloseSupplierDetails: () => void;
}

export default function SupplierDetails(supplierDetailsProps: SupplierDetailsProps) {
  if (supplierDetailsProps.isOpen) {
    return (
      <div className='fundo'>
        <div className="container">
          <div className="header-details">
            <h1>Nome do fornecedor</h1>
            <button 
              className='close-button' 
              onClick={supplierDetailsProps.setCloseSupplierDetails}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 31.1667C24.824 31.1667 31.1666 24.8241 31.1666 17C31.1666 9.17601 24.824 2.83337 17 2.83337C9.17595 2.83337 2.83331 9.17601 2.83331 17C2.83331 24.8241 9.17595 31.1667 17 31.1667Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.25 12.75L12.75 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.75 12.75L21.25 21.25" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <p>Categoria do fornecedor</p>
          <p>Endereço do fornecedor</p>
          <p>Email do fornecedor</p>
          <p>Número do fornecedor</p>
        </div>
      </div>
    ); 
  };
  return null;
}