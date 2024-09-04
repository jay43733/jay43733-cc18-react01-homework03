import React from "react";

export default function ProductList(props) {
  const { data, id } = props;

  return (
    <ul className="menu bg-base-200 flex gap-6 p-6">
      {data.map((item, id) => (
        <li key={id}>
          {item.title} | {item.category} | ${item.price}
        </li>
      ))}
    </ul>
  );
}
