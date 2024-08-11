import Footer from "../components/Footer";
import Header from "../components/Header";
import Form from "../components/Login/LoginForm";

import styles from "./styles/Login.module.css";

function Login() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Form styles={styles} />
        <img src="hot-pizza.jpg" alt="pizza" />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
