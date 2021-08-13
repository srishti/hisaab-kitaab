import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import * as httpConfig from "../../../hooks/http/http";
import { useHttp } from "../../../hooks/http/use-http";
import { UiSelectOption } from "../../../components/UI/UIComponents";
import { Account, AccountType } from "../../../models/account";
import Button from "../../../components/UI/Button/Button";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import * as utilsHelpers from "../../../utils/helpers";
import styles from "./AddAccount.module.scss";

const getAllAccountTypesAsOptionsInDropdown = () => {
  let selectOptions: UiSelectOption[] = [
    { value: "Select", label: "Select", selected: true, disabled: true },
  ];
  const accountTypes: AccountType[] =
    utilsHelpers.getAllValuesInObjectOrEnum(AccountType);
  for (const accountType of accountTypes) {
    selectOptions.push({ label: accountType, value: accountType });
  }
  return selectOptions;
};

const AddAccount: React.FC = () => {
  const history = useHistory();
  const http = useHttp();

  const accountNameInputRef = useRef<HTMLInputElement>(null);
  const accountTypeSelectRef = useRef<HTMLSelectElement>(null);
  const accountBalanceInputRef = useRef<HTMLInputElement>(null);

  const goBackToAccountsListPage = () => {
    history.replace(RoutePath.AccountsList);
  };

  const addAccountHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const accountName: string = accountNameInputRef.current!.value;
    const accountType: AccountType = accountTypeSelectRef.current!
      .value as AccountType;
    const accountBalance: number = +accountBalanceInputRef.current!.value;

    type NewAccount = utilsHelpers.Optional<Account, "id">;

    const newAccount: NewAccount = {
      name: accountName,
      type: accountType,
      currentBalance: accountBalance,
    };

    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Accounts_Add,
      config: {
        method: httpConfig.HttpMethod.POST,
        headers: httpConfig.COMMON_HEADERS,
        body: JSON.stringify(newAccount),
      },
    };

    const accountAddedSuccessCallback = (data: any) => {
      // TODO: Show notification instead of console log
      console.log("Account added successfully!", data);
      history.push(RoutePath.AccountsList);
    };

    http.sendHttpRequest(requestConfig, accountAddedSuccessCallback);
  };

  return (
    <section className={styles["add-account-page"]}>
      <Button className={styles["back-btn"]} onClick={goBackToAccountsListPage}>
        Go Back
      </Button>

      <form onSubmit={addAccountHandler}>
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Account Name" }}
          input={{ id: "account-name", type: "text" }}
          ref={accountNameInputRef}
        />
        <div
          className={`${styles["account-type-balance"]} ${styles["form-field"]}`}
        >
          <Dropdown
            className={styles["account-type"]}
            label={{ value: "Account Type" }}
            select={{ id: "account-type", name: "account-type" }}
            options={getAllAccountTypesAsOptionsInDropdown()}
            ref={accountTypeSelectRef}
          />
          <Textbox
            label={{ value: "Opening Balance" }}
            input={{ id: "account-balance", type: "text" }}
            ref={accountBalanceInputRef}
          />
        </div>
        <Button primary>Add Account</Button>
      </form>
    </section>
  );
};

export default AddAccount;
