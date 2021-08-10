import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainNavigation.module.scss";

interface MainNavigationProps {
  isSidebarVisible?: boolean;
  onToggleSidebar?: () => void;
}

const MainNavigation: React.FC<MainNavigationProps> = (props) => {
  return (
    <header className={styles["main-navigation"]}>
      <div className={styles["menu-logo"]}>
        <FontAwesomeIcon
          icon={props.isSidebarVisible ? faTimes : faBars}
          className={styles["bars-icon"]}
          onClick={props.onToggleSidebar}
        />
        <h2 className={styles["logo"]}>Hisaab Kitaab</h2>
      </div>
      <div>
        <Button onClick={/* TODO: Pass event handler */ () => {}}>Login</Button>
      </div>
    </header>
  );
};

export default MainNavigation;
