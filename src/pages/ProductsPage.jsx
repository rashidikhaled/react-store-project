import React, { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import {
  createqueryObject,
  filterProducts,
  serarchProducts,
  getInitialQuery,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
const ProductsPage = () => {
  const products = useProducts();
  const [search, setSearch] = useState();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  const searchHandler = () => {
    setQuery((query) => createqueryObject(query, { search }));
  };

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = serarchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLocaleLowerCase();
    if (tagName !== tagName) return;
    setQuery((query) => createqueryObject(query, { category }));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles?.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product?.id} data={product} />
          ))}
        </div>
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
      </div>
    </>
  );
};

export default ProductsPage;
