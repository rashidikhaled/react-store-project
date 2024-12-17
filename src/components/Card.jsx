import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";

import { shortenText } from "../helper/helper";
import styles from "./Card.module.css";
import { useCart } from "../context/CardContext";
import { productQuantity } from "../helper/helper";
const Card = ({ data }) => {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productQuantity(state, id);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}</p>
      <div className={styles.action}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("REMOVE_ITEM")}>
              <MdOutlineDelete />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          <span>{!!quantity && quantity}</span>

          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
