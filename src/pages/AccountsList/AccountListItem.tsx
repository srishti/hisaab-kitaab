import React from "react";
import { Account } from "../../models/account";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountsList.module.scss";

interface AccountsListItemComponent extends Account {
  className?: string;
}

const AccountListItem: React.FC<AccountsListItemComponent> = (props) => {
  return (
    <li className={styles["account-list-item"]}>
      <h4>{props.name}</h4>
      <h4>{props.type}</h4>
      <div>
        <FontAwesomeIcon icon={faRupeeSign} />
        &nbsp;
        <h4>{props.currentBalance.toFixed(2)}</h4>
      </div>
    </li>
  );
};

export default AccountListItem;
