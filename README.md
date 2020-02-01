### Solução
A Solução proposta foi a seguinte:

 - Criar uma pasta de componentes e criar um pasta de component chamada List de onde vamos importar o component. 
 
A estrutura de pastas ficou assim:
```
src
├── App.js
├── __tests__
│   ├── App.test.js
│   └── exercicios
│       ├── 1.test.js
│       ├── 2.test.js
│       ├── 3.test.js
│       └── 4.test.js
├── components
│   └── List
│       └── index.js
├── index.js
└── setupTests.js
```
E o Codigo no component List/index.js:

```
import React, { useState } from "react";

function List({ items }) {
  const [listItems, setListItem] = useState(items);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (!item) return;
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

```