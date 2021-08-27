import { Optional } from "../utils/helpers";
import { Transaction, TransactionAccount } from "./transaction";
import { Date } from "../utils/helpers";

export enum Gender {
  Male = "Male",
  Female = "Female",
  Transgender = "Transgender",
}

export interface UserBankAccount {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  pan: string;
  phoneNumber: string;
  gender?: Gender;
}

export interface BankAccountDetails {
  accountHolderId: string;
  accountId: string;
}

export interface BankTransaction {
  id: string;
  timestamp: number;
  transactionAmount: number;
  recordType: string;
  remarks: string;
}

export interface ReconcileTransaction
  extends BankTransaction,
    Optional<Transaction<TransactionAccount>, "amount" | "date"> {
  className?: string;
}
