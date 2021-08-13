import React from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import { UiSelectOption } from "../../../components/UI/UIComponents";
import { AccountType } from "../../../models/account";
import Button from "../../../components/UI/Button/Button";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import * as utilsHelpers from "../../../utils/helpers";
import styles from "./AddAccount.module.scss";

const getAllAccountTypes = () => {
  let selectOptions: UiSelectOption[] = [
    { value: "Select", selected: true, disabled: true },
  ];
  const accountTypes: AccountType[] =
    utilsHelpers.getAllValuesInObjectOrEnum(AccountType);
  for (let accountType of accountTypes) {
    selectOptions.push({ value: accountType });
  }
  return selectOptions;
};

const AddAccount: React.FC = () => {
  const history = useHistory();

  const goBackToAccountsPage = () => {
    history.replace(RoutePath.AccountsList);
  };

  return (
    <section className={styles["add-account-page"]}>
      <Button className={styles["back-btn"]} onClick={goBackToAccountsPage}>
        Go Back
      </Button>

      <form>
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Account Name" }}
          input={{ id: "account-name", type: "text" }}
        />
        <div
          className={`${styles["account-type-balance"]} ${styles["form-field"]}`}
        >
          <Dropdown
            className={styles["account-type"]}
            label={{ value: "Account Type" }}
            select={{ id: "account-type", name: "account-type" }}
            options={getAllAccountTypes()}
          />
          <Textbox
            label={{ value: "Opening Balance" }}
            input={{ id: "account-balance", type: "text" }}
          />
        </div>
        <Button primary>Add Account</Button>
      </form>
    </section>
  );
};

export default AddAccount;
