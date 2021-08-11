import React from "react";
import Button from "../../components/UI/Button/Button";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles["not-found-page"]}>
      <h2>Error 404</h2>
      <h1 className={styles["error-message"]}>Page Not Found</h1>
      <p>The page you are requesting for does not exist.</p>
      <Button className={styles["back-button"]}>Go Back</Button>
    </div>
  );
};

export default NotFound;
