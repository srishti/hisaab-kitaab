import React from "react";
import { UiDropdown } from "../UIComponents";
import styles from "./Dropdown.module.scss";

const Dropdown = React.forwardRef<HTMLSelectElement, UiDropdown>(
  (props, ref) => {
    let styleClasses = [styles["dropdown"]];
    if (props.className) {
      styleClasses.unshift(props.className);
    }

    return (
      <div className={styleClasses.join(" ")}>
        {props.label && (
          <label className={props.label?.className} htmlFor={props.select?.id}>
            {props.label?.value}
          </label>
        )}
        <select
          className={props.select?.className}
          id={props.select?.id}
          name={props.select?.name}
          ref={ref}
        >
          {props.options?.map((option) => (
            <option
              key={option.value}
              className={option.className}
              disabled={option.disabled}
              selected={option.selected}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Dropdown;
