import React from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import Button from "../../../components/UI/Button/Button";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import styles from "./AddTransaction.module.scss";

const AddTransaction: React.FC = () => {
  const history = useHistory();

  const goBackToTransactionsListPage = () => {
    history.replace(RoutePath.TransactionsList);
  };

  return (
    <section className={styles["add-transaction-page"]}>
      <Button
        className={styles["back-btn"]}
        onClick={goBackToTransactionsListPage}
      >
        Go Back
      </Button>

      <form>
        <Dropdown
          className={styles["form-field"]}
          label={{ value: "From Account" }}
          select={{ id: "from-account", name: "from-account" }}
        />
        <Dropdown
          className={styles["form-field"]}
          label={{ value: "To Account" }}
          select={{ id: "to-account", name: "to-account" }}
        />
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Description" }}
          input={{ id: "transaction-description", type: "text" }}
        />
        <div
          className={`${styles["transaction-date-amount"]} ${styles["form-field"]}`}
        >
          <Textbox
            className={styles["transaction-date"]}
            label={{ value: "Transaction Date" }}
            input={{ id: "transaction-date", type: "date" }}
          />
          <Textbox
            className={styles["transaction-amount"]}
            label={{ value: "Amount" }}
            input={{ id: "transaction-amount", type: "text" }}
          />
        </div>

        <Button primary>Add Transaction</Button>
      </form>
    </section>
  );
};

export default AddTransaction;
