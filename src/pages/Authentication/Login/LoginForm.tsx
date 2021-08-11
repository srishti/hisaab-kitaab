import React, { useRef, useContext } from "react";
import Card from "../../../components/UI/Card/Card";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Button from "../../../components/UI/Button/Button";
import AuthContext from "../../../store/auth-context";
import styles from "../Authentication.module.scss";

const LoginForm: React.FC = () => {
  const authContext = useContext(AuthContext);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitLoginFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    authContext.onLogin(email, password);
  };

  return (
    <Card>
      <form onSubmit={submitLoginFormHandler}>
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "email", type: "email", id: "email" }}
          label={{ value: "Email" }}
          ref={emailInputRef}
        />
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "password", type: "password", id: "password" }}
          label={{ value: "Password" }}
          ref={passwordInputRef}
        />
        <Button primary type="submit">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
