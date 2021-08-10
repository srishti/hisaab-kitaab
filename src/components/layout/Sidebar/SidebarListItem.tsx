import { UiSidebarListItem } from "../LayoutComponents";
import styles from "./SidebarListItem.module.scss";

const SidebarListItem: React.FC<UiSidebarListItem> = (props) => {
  let styleClasses = [styles["sidebar-menu"]];
  if (props.active) {
    styleClasses.push(styles["active"]);
  }
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return (
    <li className={styleClasses.join(" ")} onClick={props.onClick}>
      <h4>{props.value}</h4>
    </li>
  );
};

export default SidebarListItem;