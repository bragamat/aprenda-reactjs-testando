import React, { useState } from "react";

function List({ items }) {
  const [listItems, setListItem] = useState(items);
  const [item, setItem] = useState("");

  const addItem = () => {
    setListItem([...listItems, { key: Math.random(4), name: item }]);
    setItem("");
  };

  const removeItem = key => {
    const newList = listItems.filter(item => item.key !== key);

    setListItem(newList);
  };

  return (
    <>
      <ul>
        {listItems &&
          listItems.map(item => (
            <li key={item.key}>
              {item.name}
              <button
                data-testid={`delete-button-${item.key}`}
                onClick={() => removeItem(item.key)}
              >
                remover
              </button>
            </li>
          ))}
      </ul>
      <input type="text" value={item} onChange={e => setItem(e.target.value)} />
      <button data-testid="add-item" onClick={addItem}>
        Adicionar item
      </button>
    </>
  );
}

export default List;
