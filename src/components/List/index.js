import React from "react";

function List({ items }) {
  return (
    <ul>{items && items.map(item => <li key={item.key}>{item.name}</li>)}</ul>
  );
}

export default List;
