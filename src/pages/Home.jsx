import styles from "./styles/Home.module.css";

import Header from "../components/Header";
import Hero from "../components/Home/Hero";
import WhyUs from "../components/Home/WhyUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero styles={styles} />
      <WhyUs styles={styles} />
      <Footer />
    </>
  );
}

export default Home;
