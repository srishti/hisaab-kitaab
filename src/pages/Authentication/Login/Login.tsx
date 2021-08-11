import LoginForm from "./LoginForm";
import styles from "./Login.module.scss";

const Login: React.FC = () => {
  return (
    <section className={styles["login"]}>
      <h3>Login</h3>
      <LoginForm />
    </section>
  );
};

export default Login;
