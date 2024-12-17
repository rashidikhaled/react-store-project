import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import styles from "./BasketSideBar.module.css";

const BasketSideBar = ({ state, clickHandler }) => {
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>totla:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>{" "}
      <div>
        <BsPatchCheck />
        <p>status:</p>
        <span>{!state.checkout && "pending..."}</span>
      </div>
      <button onClick={() => clickHandler("CHECKOUT")}>checkout</button>
    </div>
  );
};

export default BasketSideBar;
