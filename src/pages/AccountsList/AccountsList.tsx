import React from "react";
import { accounts } from "./accountsData";
import AccountListItem from "./AccountListItem";

const Accounts: React.FC = () => {
  return (
    <ul>
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
  );
};

export default Accounts;
