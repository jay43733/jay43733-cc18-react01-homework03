import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
  const { setInput,searchText,setSearchText } = props;

  function hdlSearch(input) {
    console.log(input)
      setInput(input);
  }

  return (
    <div>
      <input
        onChange={(e) => hdlSearch(e.target.value)}
        className="input input-bordered w-full max-w-xs" 
        type="text"
        placeholder="Search . . ."
      />
    </div>
  );
}
