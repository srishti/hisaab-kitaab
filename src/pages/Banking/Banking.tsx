import React, { useState, useEffect } from "react";
import { RoutePath } from "../../routes/routes";
import { Link } from "react-router-dom";
import * as httpConfig from "../../hooks/http/http";
import { useAuth } from "../../hooks/auth/use-auth";
import { useHttp } from "../../hooks/http/use-http";
import {
  BankAccountDetails,
  ReconcileTransaction,
} from "../../models/userBankAccount";
import Button from "../../components/UI/Button/Button";
import BankTransactionsList from "./BankTransactions/BankTransactionsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banking.module.scss";

const Banking: React.FC = () => {
  const [isAccountOpened, setIsAccountOpened] = useState(false);
  const [accountDetails, setAccountDetails] = useState<BankAccountDetails>({
    accountHolderId: "",
    accountId: "",
  });
  const [transactions, setTransactions] = useState<ReconcileTransaction[]>([]);

  const http = useHttp();
  const auth = useAuth();

  useEffect(() => {
    const fetchBankAccount = () => {
      const requestConfig: httpConfig.RequestConfig = {
        url: httpConfig.BASE_URL + httpConfig.PathParameters.BankAccounts,
        config: {
          method: httpConfig.HttpMethod.GET,
          headers: {
            "x-auth-token": auth.accessToken || "",
          },
        },
      };

      const fetchBankAccountSuccessCallback = (data: any[]) => {
        if (data.length > 0) {
          setIsAccountOpened(true);
          setAccountDetails(data[0]);
          // TODO: Show notification instead of console log
          console.log("Fetched bank account successfully!", data);
        }
      };

      http.sendHttpRequest(requestConfig, fetchBankAccountSuccessCallback);
    };

    fetchBankAccount();
  }, []);

  const fetchTransactions = () => {
    const requestConfig: httpConfig.RequestConfig = {
      url:
        httpConfig.BASE_URL +
        httpConfig.PathParameters.BankTransactions_Reconcile,
      config: {
        method: httpConfig.HttpMethod.GET,
        headers: {
          "x-auth-token": auth.accessToken || "",
        },
      },
    };

    const fetchTransactionsSuccessCallback = (data: any) => {
      console.log("Fetched all transactions sucessfully!", data);
      setTransactions(data);
      // TODO: Show notification instead of console log
    };

    http.sendHttpRequest(requestConfig, fetchTransactionsSuccessCallback);
  };

  const confirmReconciledTransaction = (
    bankTransactionId: string,
    localTransactionId: string
  ) => {
    const reconciledTransaction = {
      bankTransactionId: bankTransactionId,
      localTransactionId: localTransactionId,
    };
    const requestConfig: httpConfig.RequestConfig = {
      url:
        httpConfig.BASE_URL +
        httpConfig.PathParameters.BankTransactions_Reconcile_Confirm,
      config: {
        method: httpConfig.HttpMethod.POST,
        headers: {
          "x-auth-token": auth.accessToken || "",
        },
        body: JSON.stringify(reconciledTransaction),
      },
    };

    const reconcileConfirmTransactionSuccessCallback = (data: any) => {
      console.log("Reconciled transaction sucessfully!", data);

      const updatedTransactions = [...transactions];
      updatedTransactions.filter(
        (transaction) => transaction.id !== bankTransactionId
      );
      setTransactions(updatedTransactions);
      // TODO: Show notification instead of console log
    };

    http.sendHttpRequest(
      requestConfig,
      reconcileConfirmTransactionSuccessCallback
    );
  };

  const renderOpenAccountContent = (
    <Link to={RoutePath.OpenBankAccount}>
      <Button primary className={styles["open-bank-account-btn"]}>
        <FontAwesomeIcon icon={faPlus} />
        &nbsp; Open Bank Account
      </Button>
    </Link>
  );

  const renderAccountAndTransactionsContent = (
    <>
      <div>
        <h4>
          <span className={styles["account-details-heading"]}>
            Account Holder ID:{" "}
          </span>
          {accountDetails.accountHolderId}
        </h4>
        <h4>
          <span className={styles["account-details-heading"]}>
            Bank Account ID:{" "}
          </span>{" "}
          {accountDetails.accountId}
        </h4>
        <Button
          primary
          className={styles["fetch-transactions-btn"]}
          onClick={fetchTransactions}
        >
          Fetch Transactions
        </Button>
      </div>

      {transactions.length > 0 && (
        <BankTransactionsList
          transactions={transactions}
          onReconcile={confirmReconciledTransaction}
        />
      )}
    </>
  );

  return (
    <section className={styles["banking"]}>
      {!isAccountOpened
        ? renderOpenAccountContent
        : renderAccountAndTransactionsContent}
    </section>
  );
};

export default Banking;
