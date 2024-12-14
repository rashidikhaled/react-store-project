import React from "react";
import { FaListUl } from "react-icons/fa";
import { createqueryObject } from "../helper/helper";
import styles from "./SideBar.module.css";
import { categories } from "../constants/constants";

const SideBar = ({ query, setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== tagName) return;
    setQuery((query) => createqueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.category
                ? styles.selected
                : null
            }>
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
