import Button from "../../UI/Button/Button";
import styles from "./MainNavigation.module.scss";

const MainNavigation: React.FC = () => {
  return (
    <header className={styles["main-navigation"]}>
      <div>
        <h2 className={styles["logo-text"]}>Hisaab Kitaab</h2>
      </div>
      <div>
        <Button onClick={/* TODO: Pass event handler */ () => {}}>Login</Button>
      </div>
    </header>
  );
};

export default MainNavigation;
