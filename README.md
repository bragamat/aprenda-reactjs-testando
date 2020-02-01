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
import React from "react";

function List({ items }) {
  return (
    <ul>{items && items.map(item => <li key={item.key}>{item.name}</li>)}</ul>
  );
}

export default List;
```