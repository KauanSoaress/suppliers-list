import '../styles/DeleteConfirm.css';

interface DeleteConfirmProps {
  isOpen: boolean;
  supplierId: string;
  setCloseDeleteConfirm: () => void;
  removeSupplier: (id: string) => void;
}

export default function DeleteConfirm(deleteConfirmProps: DeleteConfirmProps) {
  if (deleteConfirmProps.isOpen) {
    return (
      <div className="fundo">
        <div className="confirm-pop-up">
          <img src="alert.svg" alt="Alert Image" className='alert-image'/>
          <h2 className="alert">Atenção!</h2>
          <p className="alert-message">Deseja realmente excluir o fornecedor?</p>
          <div className="options">

            <button 
              className='cancel-button' 
              onClick={() => {
                deleteConfirmProps.setCloseDeleteConfirm()
              }}
            >
              Cancelar
            </button>

            <button 
              className='delete-button' 
              onClick={() => {
                deleteConfirmProps.removeSupplier(deleteConfirmProps.supplierId);
                deleteConfirmProps.setCloseDeleteConfirm();
              }}
            >
              Excluir
            </button>
            
          </div>
        </div>
      </div>
    );
  }
  return null;
}