import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import ProductList from "./ProductList.jsx";

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [searchText, setSearchText] = useState('')

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    const result = await response.json();
    setData(result.products);
  };

  useEffect(() => {
    let sto = setTimeout(()=>{
      fetchData()
      console.log('useEffect start...')
      setSearchText(searchText)
    }, 1000)
    return()=>{
      console.log('useEffect end...')
      clearTimeout(sto)
    }
  }, [input]);

  return (
    <div className="flex flex-col gap-4 text-center py-4">
      <h1 className="text-xl font-semibold">Product Search</h1>
      <SearchBar setInput={setInput} searchText={searchText} setSearchText={setSearchText} />
      <ProductList data={data} id={data.id} />
    </div>
  );
}
