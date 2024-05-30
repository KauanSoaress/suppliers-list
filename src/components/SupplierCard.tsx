import '../styles/SupplierCard.css';

interface SupplierCardProps {
  supplierName: string;
}

export default function SupplierCard(SupplierCardProps: SupplierCardProps) {
  return <div className="card">
    <h1 className="supplier-name">{SupplierCardProps.supplierName}</h1>
    <div className="card-itens">

      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.57959 22C2.57959 22 9.72602 7.70712 22.2323 7.70712C34.7385 7.70712 41.8849 22 41.8849 22C41.8849 22 34.7385 36.2928 22.2323 36.2928C9.72602 36.2928 2.57959 22 2.57959 22Z" stroke="#AE7BE1" stroke-width="1.78661" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2324 27.3598C25.1925 27.3598 27.5922 24.9602 27.5922 22C27.5922 19.0399 25.1925 16.6402 22.2324 16.6402C19.2722 16.6402 16.8726 19.0399 16.8726 22C16.8726 24.9602 19.2722 27.3598 22.2324 27.3598Z" stroke="#AE7BE1" stroke-width="1.78661" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.11 7.70712H7.60373C6.65606 7.70712 5.7472 8.08359 5.07709 8.75369C4.40698 9.4238 4.03052 10.3327 4.03052 11.2803V36.2928C4.03052 37.2405 4.40698 38.1494 5.07709 38.8195C5.7472 39.4896 6.65606 39.8661 7.60373 39.8661H32.6162C33.5639 39.8661 34.4728 39.4896 35.1429 38.8195C35.813 38.1494 36.1894 37.2405 36.1894 36.2928V23.7866" stroke="#AE7BE1" stroke-width="1.66339" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33.5096 5.02723C34.2204 4.31647 35.1844 3.91718 36.1895 3.91718C37.1947 3.91718 38.1587 4.31647 38.8694 5.02723C39.5802 5.73799 39.9795 6.70198 39.9795 7.70714C39.9795 8.7123 39.5802 9.6763 38.8694 10.3871L21.8967 27.3598L14.7502 29.1464L16.5369 22L33.5096 5.02723Z" stroke="#AE7BE1" stroke-width="1.66339" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.48145 11.2804H9.05466H37.6404" stroke="#AE7BE1" stroke-width="1.47857" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.0672 11.2804V36.2929C34.0672 37.2406 33.6907 38.1494 33.0206 38.8195C32.3505 39.4897 31.4416 39.8661 30.494 39.8661H12.6279C11.6802 39.8661 10.7714 39.4897 10.1013 38.8195C9.43115 38.1494 9.05469 37.2406 9.05469 36.2929V11.2804M14.4145 11.2804V7.70719C14.4145 6.75951 14.791 5.85065 15.4611 5.18054C16.1312 4.51043 17.04 4.13397 17.9877 4.13397H25.1342C26.0818 4.13397 26.9907 4.51043 27.6608 5.18054C28.3309 5.85065 28.7074 6.75951 28.7074 7.70719V11.2804" stroke="#AE7BE1" stroke-width="1.47857" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.9875 20.2134V30.9331" stroke="#AE7BE1" stroke-width="1.47857" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.1343 20.2134V30.9331" stroke="#AE7BE1" stroke-width="1.47857" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


    </div>
    
  </div>
}