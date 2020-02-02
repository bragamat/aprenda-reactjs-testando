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

Com isso, resolvemos o erro de importação/exportação, porém outro erro foi retornado:
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

Se analisarmos a mensagem do erro diz:

`O valor recebido precisa ser um elemento HTML ou um Elemento SVG`

E faz sentido, certo ?
Nosso componente por enquanto retorna só _null_, mas deveria retornar algum HTML. Vamos refatorar nosso componente React adicionando um HTML qualquer.

```
import React from "react";

function List() {
  return <div></div>;
}

export default List;
```
O Erro agora é:

```
 ● Lista com items › renderiza uma <ul />

    expect(received).toBeInTheDocument()

    received value must be an HTMLElement or an SVGElement.
    Received has value: null

       9 |     const { container, getByRole } = render(<List />);
      10 |
    > 11 |     expect(container.querySelector("ul")).toBeInTheDocument();
```
Dá pra perceber que na verdade o teste espera receber uma tag [ul](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/ul).
Vamos de fazer mais uma alteração mínima só pra fazer nosso teste passar.
Nosso componente vai ficar assim:
```
import React from "react";

function List() {
  return <ul><ul>;
}

export default List;
```
E o erro agora é:
```
● Lista com items › deve renderizar 5 <li /> com conteudo especifico

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 0
```

Era pra estar renderizando na tela 5 tags [li](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/li). Mais uma vez, vamos fazer modificações mínimas no nosso component só o suficiente pra passar esse teste.

```
function List() {
  return (
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}

```

O novo erro: 

```
● Lista com items › deve renderizar 5 <li /> com conteudo especifico

      Unable to find an element with the text: /Item/
      This could be because the text is broken up by multiple elements. 
    In this case, you can provide a function for your text matcher to make your matcher
    more flexible.

    <body>
      <div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </body>

      18 |     );
      19 |     expect(container.querySelectorAll("li").length).toBe(listaItens.length);
    > 20 |     expect(getAllByText(/Item/).length).toBe(listaItens.length);
         |            ^
      21 |     expect(queryByText("Item seis")).not.toBeInTheDocument();
      22 |   });
      23 | });
```

Quer dizer que nenhum elemento que contem o texto "Item" foi encontrado