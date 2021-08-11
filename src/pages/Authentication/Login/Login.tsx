import LoginForm from "./LoginForm";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
    <section className={styles["login"]}>
      <LoginForm />
    </section>
  );
};

export default Login;
