interface ISupplier {
  id: number;
  name: string;
  address: string;
  phone: string;
  category: string;
  email: string;
}

export const SuppliersArray: ISupplier[] = [
  {
    id: 1,
    name: "user",
    address: "Address 1",
    phone: "1234567890",
    category: "Category 1",
    email: "emailteste@gmail.com",
  }
];