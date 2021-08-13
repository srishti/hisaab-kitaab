import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../routes/routes";
import Card from "../../../components/UI/Card/Card";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Button from "../../../components/UI/Button/Button";
import { User } from "../../../models/user";
import { useAuth } from "../../../hooks/auth/use-auth";
import styles from "../Authentication.module.scss";

const SignupForm: React.FC = () => {
  const auth = useAuth();

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const submitSignupFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const firstName = firstNameInputRef.current!.value;
    const lastName = lastNameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    const confirmPassword = confirmPasswordInputRef.current!.value;

    const user: User = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    auth.onSignup(user);
  };

  return (
    <Card>
      <form onSubmit={submitSignupFormHandler}>
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "first-name", type: "text", id: "first-name" }}
          label={{ value: "First Name" }}
          ref={firstNameInputRef}
        />
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "last-name", type: "text", id: "last-name" }}
          label={{ value: "Last Name" }}
          ref={lastNameInputRef}
        />
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
        <Textbox
          className={styles["form-field"]}
          input={{
            autoComplete: "password",
            type: "password",
            id: "confirm-password",
          }}
          label={{ value: "Confirm Password" }}
          ref={confirmPasswordInputRef}
        />
        <Button primary type="submit">
          Signup
        </Button>
        <Link to={RoutePath.Login}>
          <div className={styles["login-link"]}>Already a user? Login!</div>
        </Link>
      </form>
    </Card>
  );
};

export default SignupForm;
