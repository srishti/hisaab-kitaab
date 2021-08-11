import Card from "../../../components/UI/Card/Card";
import Textbox from "../../../components/UI/Textbox/Textbox";
import Button from "../../../components/UI/Button/Button";
import styles from "../Authentication.module.scss";

const LoginForm: React.FC = () => {
  return (
    <Card>
      <form>
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
        <Button primary>Login</Button>
      </form>
    </Card>
  );
};

export default LoginForm;
