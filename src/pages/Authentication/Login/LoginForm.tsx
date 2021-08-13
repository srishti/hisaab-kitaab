import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import Card from "../../../components/UI/Card/Card";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Button from "../../../components/UI/Button/Button";
import { useAuth } from "../../../hooks/auth/use-auth";
import styles from "../Authentication.module.scss";

const LoginForm: React.FC = () => {
  const auth = useAuth();

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const submitLoginFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    auth.onLogin(email, password);
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
        <Link to={RoutePath.Signup}>
          <div className={styles["signup-link"]}>New user? Signup!</div>
        </Link>
      </form>
    </Card>
  );
};

export default LoginForm;
