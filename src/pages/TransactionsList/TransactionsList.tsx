import React from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/routes";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { transactionsData } from "./transactionsData";
import TransactionListItem from "./TransactionListItem";
import styles from "./TransactionsList.module.scss";

const TransactionsList: React.FC = () => {
  return (
    <section className={styles["transactions-list"]}>
      <Link to={RoutePath.AddTransaction}>
        <Button primary className={styles["add-transaction-btn"]}>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; Add Transaction
        </Button>
      </Link>

      <ul>
        <li className={styles["transactions-list-heading"]}>
          <h4>Transaction Date</h4>
          <h4>Description</h4>
          <h4>From Account</h4>
          <h4>To Account</h4>
          <h4>Amount</h4>
        </li>
        {transactionsData.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            description={transaction.description}
            fromAccount={transaction.fromAccount}
            toAccount={transaction.toAccount}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </section>
  );
};

export default TransactionsList;
