import { Account, AccountType } from "../../models/account";
export const accounts: Account[] = [
  {
    id: "1",
    currentBalance: 1200,
    type: AccountType.Cash,
    name: "Cash",
  },
  {
    id: "2",
    currentBalance: 1200,
    type: AccountType.Bank,
    name: "Prateek",
  },
  {
    id: "3",
    currentBalance: 1200,
    type: AccountType.Wallet,
    name: "Airtel Money",
  },
];
