import React, { useState } from "react";
import { useHistory } from "react-router";
import { RoutePath } from "../../../routes/routes";
import { UiSidebar } from "../LayoutComponents";
import styles from "./Sidebar.module.scss";

interface SidebarComponent extends UiSidebar {
  className?: string;
  onClickMenu?: (menuItemId: string) => void;
}

const Sidebar: React.FC<SidebarComponent> = (props) => {
  const [activeMenu, setActiveMenu] = useState("Banking");

  const history = useHistory();

  let navbarStyleClasses = [styles["sidebar"]];
  if (props.isVisible) {
    navbarStyleClasses.push(styles["show"]);
  } else {
    const classIndex = navbarStyleClasses.indexOf(styles["show"]);
    if (classIndex > -1) {
      navbarStyleClasses.splice(classIndex, 1);
    }
  }
  if (props.className) {
    navbarStyleClasses.unshift(props.className);
  }

  const isBankingActive = activeMenu === "Banking";
  const isAccountsActive = activeMenu === "Accounts";
  const isTransactionsActive = activeMenu === "Transactions";

  const selectNavMenuItem = (selectedMenuItem: string) => {
    setActiveMenu(selectedMenuItem);
    if (selectedMenuItem == "Banking") {
      history.push(RoutePath.Banking);
    } else if (selectedMenuItem == "Accounts") {
      history.push(RoutePath.AccountsList);
    } else if (selectedMenuItem == "Transactions") {
      history.push(RoutePath.TransactionsList);
    }
  };

  return (
    <nav className={navbarStyleClasses.join(" ")}>
      <ul>
        <li
          className={`${styles["sidebar-menu"]}${
            isBankingActive ? ` ${styles["active"]}` : ""
          }`}
          onClick={() => selectNavMenuItem("Banking")}
        >
          Banking
        </li>
        <li
          className={`${styles["sidebar-menu"]}${
            isAccountsActive ? ` ${styles["active"]}` : ""
          }`}
          onClick={() => selectNavMenuItem("Accounts")}
        >
          Accounts
        </li>
        <li
          className={`${styles["sidebar-menu"]}${
            isTransactionsActive ? ` ${styles["active"]}` : ""
          }`}
          onClick={() => selectNavMenuItem("Transactions")}
        >
          Transactions
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
