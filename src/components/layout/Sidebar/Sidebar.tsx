import { UiSidebar } from "../LayoutComponents";
import SidebarListItem from "./SidebarListItem";
import styles from "./Sidebar.module.scss";

interface SidebarComponent extends UiSidebar {
  className?: string;
}

const Sidebar: React.FC<SidebarComponent> = (props) => {
  let styleClasses = [styles["sidebar"]];
  if (props.isVisible) {
    styleClasses.push(styles["show"]);
  } else {
    const classIndex = styleClasses.indexOf(styles["show"]);
    if (classIndex > -1) {
      styleClasses.splice(classIndex, 1);
    }
  }
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return (
    <nav className={styleClasses.join(" ")}>
      <ul>
        {props.menuList.map((menuItem) => (
          <SidebarListItem
            key={menuItem.id}
            active={menuItem.active}
            disabled={menuItem.disabled}
            id={menuItem.id}
            routePath={menuItem.routePath}
            value={menuItem.value}
            onClick={menuItem.onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
