import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/routes";
import { useHttp } from "../../hooks/http/use-http";
import * as httpConfig from "../../hooks/http/http";
import { Transaction, TransactionAccount } from "../../models/transaction";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TransactionListItem from "./TransactionListItem";
import styles from "./TransactionsList.module.scss";

const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<
    Transaction<TransactionAccount>[]
  >([]);

  const { sendHttpRequest: sendRequest } = useHttp();

  useEffect(() => {
    const fetchTransactions = () => {
      const requestConfig: httpConfig.RequestConfig = {
        url: httpConfig.BASE_URL + httpConfig.PathParameters.Transactions,
        config: {
          method: httpConfig.HttpMethod.GET,
        },
      };

      const fetchTransactionsSuccessCallback = (data: any[]) => {
        console.log("Fetched all transactions successfully!");
        setTransactions(data);
      };

      sendRequest(requestConfig, fetchTransactionsSuccessCallback);
    };

    fetchTransactions();
  }, [sendRequest]);

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
        {transactions.map((transaction) => (
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
