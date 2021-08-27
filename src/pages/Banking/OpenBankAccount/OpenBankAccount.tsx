import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import * as httpConfig from "../../../hooks/http/http";
import { useAuth } from "../../../hooks/auth/use-auth";
import { useHttp } from "../../../hooks/http/use-http";
import { UiSelectOption } from "../../../components/UI/UIComponents";
import { Gender, UserBankAccount } from "../../../models/userBankAccount";
import Button from "../../../components/UI/Button/Button";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Dropdown from "../../../components/UI/Dropdown/Dropdown";
import * as utilsHelpers from "../../../utils/helpers";
import styles from "./OpenBankAccount.module.scss";

const getAllGendersAsOptionsInDropdown = () => {
  let selectOptions: UiSelectOption[] = [
    { value: "Select", label: "Select", selected: true, disabled: true },
  ];
  const genders: Gender[] = utilsHelpers.getAllValuesInObjectOrEnum(Gender);
  for (const gender of genders) {
    selectOptions.push({ label: gender, value: gender });
  }
  return selectOptions;
};

const OpenBankAccount: React.FC = () => {
  const history = useHistory();
  const http = useHttp();
  const auth = useAuth();

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const dobInputRef = useRef<HTMLInputElement>(null);
  const genderSelectRef = useRef<HTMLSelectElement>(null);
  const panInputRef = useRef<HTMLInputElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);

  const goBackToAccountsListPage = () => {
    history.replace(RoutePath.Banking);
  };

  const openNewBankAccountHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const firstName: string = firstNameInputRef.current!.value;
    const lastName: string = lastNameInputRef.current!.value;
    const dob = dobInputRef.current!.value;
    const dateOfBirth: utilsHelpers.Date = utilsHelpers.getDateObject(dob);
    const gender: Gender = genderSelectRef.current!.value as Gender;
    const pan: string = panInputRef.current!.value;
    const phoneNumber: string = contactInputRef.current!.value;

    type NewUserBankAccount = utilsHelpers.Optional<UserBankAccount, "id">;

    const newUserBankAccount: NewUserBankAccount = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      pan,
      phoneNumber,
    };

    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.BankAccounts_Create,
      config: {
        method: httpConfig.HttpMethod.POST,
        headers: {
          ...httpConfig.COMMON_HEADERS,
          "x-auth-token": auth.accessToken || "",
        },
        body: JSON.stringify(newUserBankAccount),
      },
    };

    const newBankAccountOpenedSuccessCallback = (data: any) => {
      // TODO: Show notification instead of console log
      console.log("New bank account opened successfully!", data);
      history.push(RoutePath.Banking);
    };

    http.sendHttpRequest(requestConfig, newBankAccountOpenedSuccessCallback);
  };

  return (
    <section className={styles["open-bank-account-page"]}>
      <Button className={styles["back-btn"]} onClick={goBackToAccountsListPage}>
        Go Back
      </Button>

      <form onSubmit={openNewBankAccountHandler}>
        <Textbox
          className={styles["form-field"]}
          label={{ value: "First Name" }}
          input={{ id: "first-name", type: "text" }}
          ref={firstNameInputRef}
        />
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Last Name" }}
          input={{ id: "first-name", type: "text" }}
          ref={lastNameInputRef}
        />
        <div className={`${styles["gender-dob"]} ${styles["form-field"]}`}>
          <Textbox
            className={styles["dob"]}
            label={{ value: "Date of Birth" }}
            input={{ id: "dob", type: "date" }}
            ref={dobInputRef}
          />
          <Dropdown
            label={{ value: "Gender" }}
            select={{ id: "gender", name: "gender" }}
            options={getAllGendersAsOptionsInDropdown()}
            ref={genderSelectRef}
          />
        </div>
        <Textbox
          className={styles["form-field"]}
          label={{ value: "PAN Number" }}
          input={{ id: "pan", type: "text" }}
          ref={panInputRef}
        />
        <Textbox
          className={styles["form-field"]}
          label={{ value: "Contact Number" }}
          input={{ id: "contact-number", type: "text" }}
          ref={contactInputRef}
        />
        <Button primary>Open Bank Account</Button>
      </form>
    </section>
  );
};

export default OpenBankAccount;
