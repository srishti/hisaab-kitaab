export enum AccountType {
  Bank = "Bank",
  Cash = "Cash",
  Wallet = "Wallet",
}

export interface Account {
  id: string;
  currentBalance: number;
  type: AccountType;
  name: string;
}
