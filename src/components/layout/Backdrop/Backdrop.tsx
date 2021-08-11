import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";

interface BackdropComponent {
  onClick: React.MouseEventHandler;
}

const BackdropOverlay: React.FC<BackdropComponent> = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

const Backdrop: React.FC<BackdropComponent> = (props) => {
  const backdropDomElement = document.getElementById("backdrop");
  if (backdropDomElement instanceof Element) {
    return ReactDOM.createPortal(
      <BackdropOverlay onClick={props.onClick} />,
      backdropDomElement
    );
  }
  return null;
};

export default Backdrop;
