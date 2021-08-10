import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";

interface BackdropComponent {
  onClose: () => void;
}

const BackdropOverlay: React.FC<BackdropComponent> = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClose}></div>;
};

const Backdrop: React.FC<BackdropComponent> = (props) => {
  const backdropDomElement = document.getElementById("backdrop");
  if (backdropDomElement instanceof Element) {
    return ReactDOM.createPortal(
      <BackdropOverlay onClose={props.onClose} />,
      backdropDomElement
    );
  }
  return null;
};

export default Backdrop;
