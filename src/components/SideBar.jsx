import React from "react";
import { FaListUl } from "react-icons/fa";
import { createqueryObject } from "../helper/helper";

const SideBar = ({ setQuery }) => {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== tagName) return;
    setQuery((query) => createqueryObject(query, { category }));
  };

  return (
    <div>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </div>
  );
};

export default SideBar;
