import React from "react";

export default function SearchBar(props) {
   return (
      <div>
         
          <input type="search" placeholder='Enter an ID...'/>
          <button onClick={props.onSearch}>Agregar</button>
         
      </div>
   );
}
