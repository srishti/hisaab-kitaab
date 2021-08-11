import styles from "./Card.module.scss";

interface CardComponent {
  className?: string;
}

const Card: React.FC<CardComponent> = (props) => {
  let styleClasses = [styles["card"]];
  if (props.className) {
    styleClasses.unshift(props.className);
  }

  return <div className={styleClasses.join(" ")}>{props.children}</div>;
};

export default Card;
