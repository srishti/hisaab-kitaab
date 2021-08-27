import React from "react";
import { Account } from "../../models/account";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/UI/Button/Button";
import styles from "./AccountsList.module.scss";

interface AccountsListItemComponent extends Account {
  className?: string;
  isLinked: boolean;
  onLink: () => void;
}

const AccountListItem: React.FC<AccountsListItemComponent> = (props) => {
  return (
    <li className={styles["account-list-item"]}>
      <h4>{props.name}</h4>
      <h4>{props.type}</h4>
      <div className={styles["account-balance"]}>
        <FontAwesomeIcon icon={faRupeeSign} />
        &nbsp;
        <h4>{props.currentBalance.toFixed(2)}</h4>
      </div>
      {props.isLinked ? (
        <h4>Linked</h4>
      ) : (
        <Button className={styles["link-account-btn"]} onClick={props.onLink}>
          Link
        </Button>
      )}
    </li>
  );
};

export default AccountListItem;
