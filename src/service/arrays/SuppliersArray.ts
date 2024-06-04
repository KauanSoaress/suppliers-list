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
    name: "Fernando Silva",
    address: "Av. Santos Dumont, 3131 - Aldeota, Fortaleza - CE, 60150-165",
    phone: "85997289635",
    category: "Alimentos",
    email: "fernandosilva@gmail.com",
  },
  {
    id: 2,
    name: "Maria Santos",
    address: "R. Des. Lauro Nogueira, 1500 - Papicu, Fortaleza - CE, 60176-065",
    phone: "85965874523",
    category: "Roupas",
    email: "mariasantos123@gmail.com",
  },
  {
    id: 3,
    name: "João Oliveira",
    address: "Av. da Abolição, 2310 - Meireles, Fortaleza - CE, 60165-081",
    phone: "85958942587",
    category: "Eletrônicos",
    email: "joaooliveira@gmail.com"
  },
  {
    id: 4,
    name: "Pedro Lima",
    address: "Av. Dom Luís, 1200 - Aldeota, Fortaleza - CE, 60160-230",
    phone: "85996587412",
    category: "Alimentos",
    email: "limapedro@gmail.com",
  },
  {
    id: 5,
    name: "Ana Souza",
    address: "Av. Santos Dumont, 2626 - Aldeota, Fortaleza - CE, 60150-161",
    phone: "85996587412",
    category: "Roupas",
    email: "sousaclothes@gmail.com",
  },
  {
    id: 6,
    name: "Carlos Silva",
    address: "R. Dr. José Lourenço, 328 - Aldeota, Fortaleza - CE, 60115-280",
    phone: "85996587412",
    category: "Eletrônicos",
    email: "silvaeletronicos@gmail.com",
  },
];