import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainNavigation.module.scss";

interface MainNavigationComponent {
  className?: string;
  isSidebarVisible?: boolean;
  onToggleSidebar?: () => void;
}

const MainNavigation: React.FC<MainNavigationComponent> = (props) => {
  let styleClasses = [styles["main-navigation"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return (
    <header className={styleClasses.join(" ")}>
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
