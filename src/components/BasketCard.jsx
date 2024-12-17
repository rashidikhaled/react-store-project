import React from "react";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";

const BasketCard = ({ data, clickHandler }) => {
  const { image, title, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={data.title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {data.quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandler("INCREASE", data)}>+</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("DECREASE", data)}>-</button>
      </div>
    </div>
  );
};

export default BasketCard;
