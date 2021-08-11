import React from "react";
import styles from "./Loader.module.scss";

interface LoaderComponent {
  className?: string;
}

const Loader: React.FC<LoaderComponent> = (props) => {
  let styleClasses = [styles["loader"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return <div className={styleClasses.join(" ")}></div>;
};

export default Loader;
