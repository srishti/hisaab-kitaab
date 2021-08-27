import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/routes";
import { useHttp } from "../../hooks/http/use-http";
import { useAuth } from "../../hooks/auth/use-auth";
import { Account, AccountType } from "../../models/account";
import * as httpConfig from "../../hooks/http/http";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountListItem from "./AccountListItem";
import styles from "./AccountsList.module.scss";

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [linkedAccount, setLinkedAccount] = useState<{
    linkedAccountId: string;
  }>({
    linkedAccountId: "",
  });

  const { sendHttpRequest: sendRequest } = useHttp();
  const auth = useAuth();

  const linkAccountToHK = (accountId: string) => {
    const accountToLink = { accountId: accountId };

    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Account_Link,
      config: {
        method: httpConfig.HttpMethod.POST,
        headers: {
          "x-auth-token": auth.accessToken || "",
        },
        body: JSON.stringify(accountToLink),
      },
    };

    const linkAccountSuccessCallback = (data: any) => {
      console.log("Account linked successfully!", data);
      setLinkedAccount({ linkedAccountId: accountId });
    };

    sendRequest(requestConfig, linkAccountSuccessCallback);
  };

  useEffect(() => {
    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Accounts,
      config: {
        method: httpConfig.HttpMethod.GET,
        headers: {
          "x-auth-token": auth.accessToken || "",
        },
      },
    };

    const fetchAccountsSuccessCallback = (data: any[]) => {
      console.log("Fetched all accounts successfully!", data);
      setAccounts(data);
    };

    sendRequest(requestConfig, fetchAccountsSuccessCallback);
  }, [sendRequest]);

  useEffect(() => {
    const requestConfig: httpConfig.RequestConfig = {
      url: httpConfig.BASE_URL + httpConfig.PathParameters.Account_Linked,
      config: {
        method: httpConfig.HttpMethod.GET,
        headers: {
          "x-auth-token": auth.accessToken || "",
        },
      },
    };

    const fetchLinkedAccountSuccessCallback = (data: any) => {
      console.log("Fetched linked account successfully!", data);
      setLinkedAccount(data);
    };

    sendRequest(requestConfig, fetchLinkedAccountSuccessCallback);
  }, [sendRequest]);

  return (
    <section className={styles["accounts-list"]}>
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
          <h4>Action</h4>
        </li>
        {accounts.map((account) => (
          <AccountListItem
            key={account.id}
            id={account.id}
            currentBalance={account.currentBalance}
            name={account.name}
            type={account.type}
            isLinked={account.id === linkedAccount.linkedAccountId}
            onLink={() => linkAccountToHK(account.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Accounts;
