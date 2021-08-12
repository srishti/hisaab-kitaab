import React from "react";
import { Link } from "react-router-dom";
import { accounts } from "./accountsData";
import { RoutePath } from "../../routes/routes";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountListItem from "./AccountListItem";
import styles from "./AccountsList.module.scss";

const Accounts: React.FC = () => {
  return (
    <div className={styles["accounts-list"]}>
      <Link to={RoutePath.AddAccount}>
        <Button primary className={styles["add-account-btn"]}>
          <FontAwesomeIcon icon={faPlus} />
          &nbsp; Add Account
        </Button>
      </Link>

      <ul>
        <li className={styles["accounts-list-heading"]}>
          <h4>Account Name</h4>
          <h4>Account Type</h4>
          <h4>Current Balance</h4>
        </li>
        {accounts.map((account) => (
          <AccountListItem
            key={account.id}
            id={account.id}
            currentBalance={account.currentBalance}
            name={account.name}
            type={account.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
