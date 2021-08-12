import { Transaction } from "../../models/transaction";

export const transactionsData: Transaction[] = [
  {
    id: "1",
    date: Date.now(),
    description: "Paid to self",
    fromAccount: "1",
    toAccount: "2",
    amount: 1000,
  },
  {
    id: "2",
    date: Date.now(),
    description: "Received from investor",
    fromAccount: "5",
    toAccount: "1",
    amount: 5000,
  },
  {
    id: "3",
    date: Date.now(),
    fromAccount: "4",
    toAccount: "3",
    amount: 6000,
  },
];
