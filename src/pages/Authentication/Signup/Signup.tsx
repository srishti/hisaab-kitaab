import SignupForm from "./SignupForm";
import styles from "../Authentication.module.scss";

const Signup: React.FC = () => {
  return (
    <section className={styles["signup"]}>
      <h3>Signup</h3>
      <SignupForm />
    </section>
  );
};

export default Signup;
