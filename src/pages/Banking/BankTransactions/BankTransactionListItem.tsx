import React, { useState, useEffect } from "react";
import * as httpConfig from "../../../hooks/http/http";
import { useHttp } from "../../../hooks/http/use-http";
import { useAuth } from "../../../hooks/auth/use-auth";
import { ReconcileTransaction } from "../../../models/userBankAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/UI/Button/Button";
import * as utilsUiHelpers from "../../../utils/UI/uiHelpers";
import * as utilsHelpers from "../../../utils/helpers";
import styles from "./BankTransactionsList.module.scss";

interface BankTransactionListItemComponent
  extends utilsHelpers.Optional<ReconcileTransaction, "localTransaction"> {
  className?: string;
  onReconcile: (bankTransactionId: string, localTransactionId: string) => void;
}

const BankTransactionListItem: React.FC<BankTransactionListItemComponent> = (
  props
) => {
  const [isDeviceSmallScreen, setIsDeviceSmallScreen] = useState(false);

  const http = useHttp();
  const auth = useAuth();

  const { checkIfSmallScreenDevice } = utilsUiHelpers;

  const confirmReconciliation = () => {
    // if (!props.localTransactionId) {
    //   return;
    // }
    // props.onReconcile(props.id, props.localTransactionId);
  };

  useEffect(() => {
    const _isDeviceSmallScreen = checkIfSmallScreenDevice();

    setIsDeviceSmallScreen(_isDeviceSmallScreen);
  }, [checkIfSmallScreenDevice]);

  let styleClasses = [styles["bank-transaction-list-item"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  let dateToRender = (
    <div className={styles["bank-transaction-date-time"]}>
      <div>{utilsHelpers.getLocalTimezonFormattedDate(props.timestamp)}</div>
      {/* <div>{utilsHelpers.getLocalTimeZoneFormattedTime(props.date)}</div> */}
    </div>
  );
  let amountToRender = (
    <>
      <FontAwesomeIcon icon={faRupeeSign} />
      &nbsp;
      <span>{props.transactionAmount.toFixed(2)}</span>
    </>
  );
  let recordTypeToRender = <span>{props.recordType}</span>;
  let remarksToRender = <span>{props.remarks}</span>;
  let fromAccountToRender = props.fromAccount && (
    <span>{props.fromAccount.name}</span>
  );
  let toAccountToRender = props.toAccount && (
    <span>{props.toAccount.name}</span>
  );
  let descriptionToRender = props.description && (
    <span>{props.description}</span>
  );

  if (isDeviceSmallScreen) {
    dateToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          Transaction Date:
        </span>
        <span>{props.timestamp}</span>
      </>
    );
    amountToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          Amount:
        </span>
        {amountToRender}
      </>
    );
    recordTypeToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          Debit / Credit:
        </span>
        {recordTypeToRender}
      </>
    );
    remarksToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          Remarks:
        </span>
        {remarksToRender}
      </>
    );
    fromAccountToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          From Account:
        </span>
        {fromAccountToRender}
      </>
    );
    toAccountToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          To Account:
        </span>
        {toAccountToRender}
      </>
    );
    descriptionToRender = (
      <>
        <span className={styles["bank-transaction-heading-small-screen"]}>
          Description:
        </span>
        {descriptionToRender}
      </>
    );
  }

  return (
    <li className={styleClasses.join(" ")}>
      <h4>{dateToRender}</h4>
      <div className={styles["bank-transaction-amount"]}>
        <h4>{amountToRender}</h4>
      </div>
      <h4>{recordTypeToRender}</h4>
      <h4>{remarksToRender}</h4>
      <h4>{fromAccountToRender}</h4>
      <h4>{toAccountToRender}</h4>
      <h4>{descriptionToRender}</h4>
      <Button onClick={confirmReconciliation}>Confirm</Button>
    </li>
  );
};

export default BankTransactionListItem;
