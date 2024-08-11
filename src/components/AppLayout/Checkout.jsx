/* eslint-disable react/prop-types */
import styles from "./Checkout.module.css";

function Checkout({ bill, quantity }) {
  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      <div>
        <h3>Total Bill:</h3>
        <strong>Rs. {bill}/-</strong>
      </div>
      <div>
        <h3>Total Items:</h3>
        <strong>{quantity} units</strong>
      </div>
      <div>
        <button>Click to Pay</button>
      </div>
    </div>
  );
}

export default Checkout;
