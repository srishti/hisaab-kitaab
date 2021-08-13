import { Account } from "./account";
import { Optional } from "../utils/helpers";

export type TransactionAccount = Optional<Account, "currentBalance" | "type">;

export interface Transaction<T> {
  id: string;
  date: number; // transaction date (time in milliseconds)
  description?: string;
  fromAccount: T;
  toAccount: T;
  amount: number;
}
