import Card from "../../../components/UI/Card/Card";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Button from "../../../components/UI/Button/Button";
import styles from "../Authentication.module.scss";

const SignupForm: React.FC = () => {
  return (
    <Card>
      <form>
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "first-name", type: "text", id: "first-name" }}
          label={{ value: "First Name" }}
        />
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "last-name", type: "text", id: "last-name" }}
          label={{ value: "Last Name" }}
        />
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "email", type: "email", id: "email" }}
          label={{ value: "Email" }}
        />
        <Textbox
          className={styles["form-field"]}
          input={{ autoComplete: "password", type: "password", id: "password" }}
          label={{ value: "Password" }}
        />
        <Textbox
          className={styles["form-field"]}
          input={{
            autoComplete: "password",
            type: "password",
            id: "confirm-password",
          }}
          label={{ value: "Confirm Password" }}
        />
        <Button primary>Signup</Button>
      </form>
    </Card>
  );
};

export default SignupForm;
