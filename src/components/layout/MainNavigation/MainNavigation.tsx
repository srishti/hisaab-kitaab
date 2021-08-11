import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainNavigation.module.scss";

interface MainNavigationComponent {
  isSidebarVisible?: boolean;
  onToggleSidebar?: () => void;
}

const MainNavigation: React.FC<MainNavigationComponent> = (props) => {
  return (
    <header className={styles["main-navigation"]}>
      <div className={styles["menu-logo"]}>
        <FontAwesomeIcon
          className={styles["bars-icon"]}
          icon={props.isSidebarVisible ? faTimes : faBars}
          onClick={props.onToggleSidebar}
        />
        <h3 className={styles["logo"]}>Hisaab Kitaab</h3>
      </div>
      <div>{/* TODO: Show profile here */}</div>
    </header>
  );
};

export default MainNavigation;
