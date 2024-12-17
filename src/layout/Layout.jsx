import React from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const [state] = useCart();

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartBold />
            <span>{state.itemsCounter}</span>
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>developed by K7aled</p>
      </footer>
    </>
  );
};

export default Layout;
