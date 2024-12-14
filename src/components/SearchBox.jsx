import React from "react";
import { ImSearch } from "react-icons/im";
import { createqueryObject } from "../helper/helper";
import styles from "./SearchBox.module.css";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery((query) => createqueryObject(query, { search }));
  };
  return (
    <div className={styles.search}>
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
  );
};

export default SearchBox;
