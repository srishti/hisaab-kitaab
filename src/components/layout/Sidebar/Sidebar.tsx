import { UiSidebar } from "../LayoutComponents";
import SidebarListItem from "./SidebarListItem";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC<UiSidebar> = (props) => {
  let styleClasses = [styles["sidebar"]];
  if (props.isVisible) {
    styleClasses.push(styles["show"]);
  } else {
    const classIndex = styleClasses.indexOf(styles["show"]);
    if (classIndex > -1) {
      styleClasses.splice(classIndex, 1);
    }
  }

  return (
    <nav className={styleClasses.join(" ")}>
      <ul>
        {props.menuList.map((menuItem) => (
          <SidebarListItem
            active={menuItem.active}
            id={menuItem.id}
            key={menuItem.id}
            value={menuItem.value}
            onClick={menuItem.onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
