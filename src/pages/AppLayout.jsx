import { Outlet } from "react-router-dom";
import Main from "../components/AppLayout/Main";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import styles from "./styles/AppLayout.module.css";
import AppNav from "../components/AppLayout/AppNav";

function AppLayout() {
  return (
    <div className={styles.container}>
      <header>
        <Logo size="4.8rem" />
      </header>
      <AppNav />
      <Main styles={styles}>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

export default AppLayout;
