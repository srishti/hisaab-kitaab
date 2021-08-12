import React from "react";
import { Account } from "../../models/account";

interface AccountsListItemComponent extends Account {
  className?: string;
}

const AccountListItem: React.FC<AccountsListItemComponent> = (props) => {
  return (
    <li>
      <h4>{props.name}</h4>
      <div>{props.type}</div>
      <div>{props.currentBalance}</div>
    </li>
  );
};

export default AccountListItem;
