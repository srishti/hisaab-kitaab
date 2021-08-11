import { UiTextbox } from "../UIComponents";
import styles from "./Textbox.module.scss";

const Textbox: React.FC<UiTextbox> = (props) => {
  let styleClasses = [styles["textbox"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return (
    <div className={styleClasses.join(" ")}>
      {props.label && (
        <label className={props.label.className} htmlFor={props.input.id}>
          {props.label.value}
        </label>
      )}
      <input {...props.input} />
    </div>
  );
};

export default Textbox;
