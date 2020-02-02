:exclamation: Não podemos esquecer que estaremos utilizando Técnicas de TDD. De modo resumido, escrevemos _**primeiro o teste**_, escrevemos _**código suficiente**_ pra fazer o teste passar e **_depois_ refatoramos**.

Então vamos ao primeiro teste (src/__ tests__ /1.teste.js_)

O primeiro erro é o seguinte:
- `Cannot find module '../../components/List' from '1.test.js'`

Que indica que não consegue achar o componente que está sendo importado na linha _4_ do arquivo _1.teste.js_. 
- `import List from "../../components/List";`

Pra resolver esse problema podemos simplesmente criar um componente no caminho que o teste esta tentando importar e exportar.

Então na pasta `src/` criamos a pasta `components`, dentro de components criamos a pasta do componente: `List` e dentro criamos o arquivo `index.js` onde escreveremos o código.

A estrutura de pastas fica assim:
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
  return null;
}

export default List;
```

Com isso resolvemos o erro de importação/exportação, porém outro erro foi retornado.
```
Lista com items
    ✕ renderiza uma <ul /> (8ms)
    ✕ deve renderizar 5 <li /> com conteudo especifico (4ms)

  ● Lista com items › renderiza uma <ul />

    expect(received).toBeInTheDocument()

    received value must be an HTMLElement or an SVGElement.
    Received has value: null

       9 |     const { container, getByRole } = render(<List />);
      10 |
    > 11 |     expect(container.querySelector("ul")).toBeInTheDocument();
         |                                           ^
      12 |     expect(getByRole("list")).toBeTruthy();
      13 |   });
      ```