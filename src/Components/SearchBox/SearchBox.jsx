import React from "react";

import "./SearchBox.scss";

const SearchBox = props => {
   const { label, searchTerm, handleInput } = props;

   return (
      <div className="search-box">
         <input type="text" name={label} value={searchTerm} onInput={handleInput} className="search-box__input" placeholder="Search" />
      </div>
   );
};

export default SearchBox;