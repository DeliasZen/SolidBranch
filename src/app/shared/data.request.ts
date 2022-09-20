// @ts-ignore
import Customers from '/src/app/shared/customers.json'

export const DATA_CUSTOMERS = Customers.data;

DATA_CUSTOMERS.forEach((i: any) => i.amount = (Math.random() * 4000).toFixed(2))
