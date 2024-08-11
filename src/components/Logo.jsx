/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Logo({ color = "#e95858", size = "2.4rem", padding = "0" }) {
  const windowSize = screen.width;

  const styles = {
    fontFamily: `"Playwrite AT", "cursive"`,
    fontStyle: "italic",
    fontWeight: 900,
    fontSize: `${windowSize <= 410 ? "3.6rem" : size}`,
    color: `${color}`,
    padding: `${padding}`,
  };

  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1 style={styles}>PizzaHOMIE</h1>
    </Link>
  );
}

export default Logo;
