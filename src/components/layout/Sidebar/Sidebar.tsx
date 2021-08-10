import { UiSidebar } from "../../UI/UIComponents";
import SidebarListItem from "./SidebarListItem";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC<UiSidebar> = (props) => {
  return (
    <nav className={styles["sidebar"]}>
      <ul>
        {props.menuList.map((menuItem) => (
          <SidebarListItem
            key={menuItem.id}
            id={menuItem.id}
            value={menuItem.value}
            active={menuItem.active}
            onClick={menuItem.onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
