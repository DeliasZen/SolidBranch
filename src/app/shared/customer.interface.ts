export interface Customer {
  total: number,
  data: Data[]
};

export interface Data {
  _id: string,
  amount: number,
  type: 'income' | 'outcome' | 'loan' | 'investment',
  name: Name,
  company: string,
  email: string,
  phone: string,
  address: string;
}

interface Name {
  first: string,
  last: string,
}