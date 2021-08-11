import React from "react";
import { UiTextbox } from "../UIComponents";
import styles from "./Textbox.module.scss";

const Textbox = React.forwardRef<HTMLInputElement, UiTextbox>((props, ref) => {
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
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Textbox;
