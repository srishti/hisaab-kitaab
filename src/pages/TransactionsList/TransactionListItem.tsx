import React, { useState, useEffect } from "react";
import { Transaction, TransactionAccount } from "../../models/transaction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import * as utilsUiHelpers from "../../utils/UI/uiHelpers";
import * as utilsHelpers from "../../utils/helpers";
import styles from "./TransactionsList.module.scss";

interface TransactionListItemComponent extends Transaction<TransactionAccount> {
  className?: string;
}

const TransactionListItem: React.FC<TransactionListItemComponent> = (props) => {
  const [isDeviceSmallScreen, setIsDeviceSmallScreen] = useState(false);

  const { checkIfSmallScreenDevice } = utilsUiHelpers;

  useEffect(() => {
    const _isDeviceSmallScreen = checkIfSmallScreenDevice();

    setIsDeviceSmallScreen(_isDeviceSmallScreen);
  }, [checkIfSmallScreenDevice]);

  let styleClasses = [styles["transaction-list-item"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  let dateToRender = (
    <div className={styles["transaction-date-time"]}>
      <div>{utilsHelpers.getLocalTimezonFormattedDate(props.date)}</div>
      {/* <div>{utilsHelpers.getLocalTimeZoneFormattedTime(props.date)}</div> */}
    </div>
  );
  let descriptionToRender = <span>{props.description || "N/A"}</span>;
  let fromAccountToRender = <span>{props.fromAccount.name}</span>;
  let toAccountToRender = <span>{props.toAccount.name}</span>;
  let amountToRender = (
    <>
      <FontAwesomeIcon icon={faRupeeSign} />
      &nbsp;
      <span>{props.amount.toFixed(2)}</span>
    </>
  );

  if (isDeviceSmallScreen) {
    dateToRender = (
      <>
        <span className={styles["transaction-heading-small-screen"]}>
          Transaction Date:
        </span>
        <span>{props.date}</span>
      </>
    );
    descriptionToRender = (
      <>
        <span className={styles["transaction-heading-small-screen"]}>
          Description:
        </span>
        {descriptionToRender}
      </>
    );
    fromAccountToRender = (
      <>
        <span className={styles["transaction-heading-small-screen"]}>
          From Account:
        </span>
        {fromAccountToRender}
      </>
    );
    toAccountToRender = (
      <>
        <span className={styles["transaction-heading-small-screen"]}>
          To Account:
        </span>
        {toAccountToRender}
      </>
    );
    amountToRender = (
      <>
        <span className={styles["transaction-heading-small-screen"]}>
          Amount:
        </span>
        {amountToRender}
      </>
    );
  }

  return (
    <li className={styleClasses.join(" ")}>
      <h4>{dateToRender}</h4>
      <h4>{descriptionToRender}</h4>
      <h4>{fromAccountToRender}</h4>
      <h4>{toAccountToRender}</h4>
      <div className={styles["transaction-amount"]}>
        <h4>{amountToRender}</h4>
      </div>
    </li>
  );
};

export default TransactionListItem;
