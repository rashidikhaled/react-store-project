import React from "react";
import { useCart } from "../context/CardContext";
import BasketCard from "../components/BasketCard";
import BasketSideBar from "../components/BasketSideBar";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  return (
    <div className={styles.container}>
      <BasketSideBar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
