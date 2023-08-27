import React from "react";
import App from "../App";

export default function SearchBar(props) {
   const handleSearch = ()=> props.onSearch("En un futuro recibimos ID")
   return (
      <div>
          <input type="search" placeholder='Enter an ID...'/>
          <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
