import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import * as httpConfig from "../../../hooks/http/http";
import { useHttp } from "../../../hooks/http/use-http";
import { Account } from "../../../models/account";
import { Transaction } from "../../../models/transaction";
import { UiSelectOption } from "../../../components/UI/UIComponents";
import * as utilsHelpers from "../../../utils/helpers";
import Button from "../../../components/UI/Button/Button";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import styles from "./AddTransaction.module.scss";

const AddTransaction: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const history = useHistory();
  const { sendHttpRequest: sendRequest } = useHttp();

  const fromAccountSelectRef = useRef<HTMLSelectElement>(null);
  const toAccountSelectRef = useRef<HTMLSelectElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const goBackToTransactionsListPage = () => {
    history.replace(RoutePath.TransactionsList);
  };

  const getAllAccountsAsOptionsInDropdown = () => {
    let selectOptions: UiSelectOption[] = [
      { value: "Select", label: "Select", selected: true, disabled: true },
    ];
    for (const account of accounts) {
      selectOptions.push({ value: account.id, label: account.name });
    }
    return selectOptions;
  };

  const addTransactionHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const transactionFromAccount: string = fromAccountSelectRef.current!.value;
    const transactionToAccount: string = toAccountSelectRef.current!.value;
    const transactionDescription: string = descriptionInputRef.current!.value;
    const transactionDate: number = new Date(
      dateInputRef.current!.value
    ).getTime();
    const transactionAmount: number = +amountInputRef.current!.value;

    type NewTransaction = utilsHelpers.Optional<Transaction<String>, "id">;

    const newTransaction: NewTransaction = {
      fromAccount: transactionFromAccount,
      toAccount: transactionToAccount,
      description: transactionDescription,
      date: transactionDate,
      amount: transactionAmount,
    };

    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Transactions_Add,
      config: {
        method: httpConfig.HttpMethod.POST,
        headers: httpConfig.COMMON_HEADERS,
        body: JSON.stringify(newTransaction),
      },
    };

    const transactionAddedSuccessCallback = (data: any) => {
      // TODO: Show notification instead of console log
      console.log("Transaction added successfully!", data);
      history.push(RoutePath.TransactionsList);
    };

    sendRequest(requestConfig, transactionAddedSuccessCallback);
  };

  useEffect(() => {
    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Accounts,
      config: {
        method: httpConfig.HttpMethod.GET,
      },
    };

    const accountsFetchedSuccessCallback = (data: any) => {
      // TODO: Show notification instead of console log
      console.log("Accounts fetched successfully for a transaction!", data);
      setAccounts(data);
    };

    sendRequest(requestConfig, accountsFetchedSuccessCallback);
  }, [sendRequest]);

  return (
    <section className={styles["add-transaction-page"]}>
      <Button
        className={styles["back-btn"]}
        onClick={goBackToTransactionsListPage}
      >
        Go Back
      </Button>

      <form onSubmit={addTransactionHandler}>
        <Dropdown
          className={styles["form-field"]}
          label={{ value: "From Account" }}
          select={{ id: "from-account", name: "from-account" }}
          options={getAllAccountsAsOptionsInDropdown()}
          ref={fromAccountSelectRef}
        />
        <Dropdown
          className={styles["form-field"]}
          label={{ value: "To Account" }}
          select={{ id: "to-account", name: "to-account" }}
          options={getAllAccountsAsOptionsInDropdown()}
          ref={toAccountSelectRef}
        />
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Description" }}
          input={{ id: "transaction-description", type: "text" }}
          ref={descriptionInputRef}
        />
        <div
          className={`${styles["transaction-date-amount"]} ${styles["form-field"]}`}
        >
          <Textbox
            className={styles["transaction-date"]}
            label={{ value: "Transaction Date" }}
            input={{ id: "transaction-date", type: "date" }}
            ref={dateInputRef}
          />
          <Textbox
            className={styles["transaction-amount"]}
            label={{ value: "Amount" }}
            input={{ id: "transaction-amount", type: "text" }}
            ref={amountInputRef}
          />
        </div>

        <Button primary>Add Transaction</Button>
      </form>
    </section>
  );
};

export default AddTransaction;
