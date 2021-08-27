import { Link } from "react-router-dom";
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

  let textContent = <h4>{props.value}</h4>;
  if (props.routePath) {
    textContent = <Link to={props.routePath}>{textContent}</Link>;
  }

  const sidebarListItemClickHandler = () => {
    if (props.onClickMenu) {
      props.onClickMenu(props.id);
    }
  };

  let listItemContentToRender = (
    <li
      className={styleClasses.join(" ")}
      onClick={sidebarListItemClickHandler}
    >
      {textContent}
    </li>
  );

  return listItemContentToRender;
};

export default SidebarListItem;
