import React, { useState } from "react";

function List({ items }) {
  const [listItems, setListItem] = useState(items);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (!item) return;
    setListItem([...listItems, { key: Math.random(4), name: item }]);
    setItem("");
  };

  return (
    <>
      <ul>
        {listItems &&
          listItems.map(item => <li key={item.key}>{item.name}</li>)}
      </ul>
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button data-testid="add-item" onClick={addItem}>
        Adicionar item
      </button>
    </>
  );
}

export default List;
