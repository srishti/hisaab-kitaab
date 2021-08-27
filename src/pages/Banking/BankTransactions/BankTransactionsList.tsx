import React, { useState } from "react";
import { ReconcileTransaction } from "../../../models/userBankAccount";
import BankTransactionListItem from "./BankTransactionListItem";
import styles from "./BankTransactionsList.module.scss";

interface BankTransactionsListComponent {
  transactions: ReconcileTransaction[];
  onReconcile: (bankTransactionId: string, localTransactionId: string) => void;
}

const BankTransactionsList: React.FC<BankTransactionsListComponent> = (
  props
) => {
  return (
    <ul>
      <li className={styles["bank-transactions-list-heading"]}>
        <h4>Transaction Date</h4>
        <h4>Amount</h4>
        <h4>Debit / Credit</h4>
        <h4>Remarks</h4>

        <h4>From Account</h4>
        <h4>To Account</h4>
        <h4>Description</h4>
        <h4>Action</h4>
      </li>
      {props.transactions.map((transaction) =>
        transaction.localTransaction ? (
          <BankTransactionListItem
            key={transaction.id}
            id={transaction.id}
            timestamp={transaction.timestamp}
            recordType={transaction.recordType}
            remarks={transaction.remarks}
            transactionAmount={transaction.transactionAmount}
            fromAccount={transaction.localTransaction.fromAccount}
            toAccount={transaction.localTransaction.toAccount}
            localTransactionId={transaction.localTransaction.id}
            description={transaction.localTransaction.description}
            onReconcile={props.onReconcile}
          />
        ) : (
          <BankTransactionListItem
            key={transaction.id}
            id={transaction.id}
            timestamp={transaction.timestamp}
            recordType={transaction.recordType}
            remarks={transaction.remarks}
            transactionAmount={transaction.transactionAmount}
            onReconcile={props.onReconcile}
          />
        )
      )}
    </ul>
  );
};

export default BankTransactionsList;
