export interface Transaction {
  id: string;
  date: number; // transaction date (time in milliseconds)
  description?: string;
  fromAccount: string; // from account ID
  toAccount: string; // to account ID
  amount: number;
}
