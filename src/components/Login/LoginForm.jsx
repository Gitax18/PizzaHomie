import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function LoginForm({ styles }) {
  return (
    <div className={styles.formContainer}>
      <h2>Login</h2>
      <form>
        <input type="text" id="username" placeholder="username" />
        <input type="password" id="password" placeholder="password" />
        <Link to="/app" style={{ textAlign: "center" }}>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
