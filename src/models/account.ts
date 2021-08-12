export enum AccountType {
  Bank = "bank",
  Cash = "cash",
  Wallet = "wallet",
}

export interface Account {
  id: string;
  currentBalance: number;
  type: AccountType;
  name: string;
}
