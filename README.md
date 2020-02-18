# Vamos do início! :sunglasses:

## Por que testar ?
Vou resumir com alguns comentários que peguei na comunidade :+1:

- ```"pra não ter que consertar bug em produção sexta à noite na correria quando você deveria estar tomando uma cerveja"``` :beer:

- ```"Testar prova para VOCÊ MESMO que o código produzido faz o que se espera que ela faça. ```

- ```"Pra saber onde eu começo e onde eu termino"```

- ```"[...] dar manutenção ou alterar o comportamento de determinado fluxo as vezes uma pequena mudança pode acabar quebrando em diversos lugares e com os testes você percebe na hora exatamente quais pontos  aquela alteração está influenciando"```

Em resumo, o teste te dá a segurança necessária pra realizar modificações futuras em aplicações além de guiar você do começo ao fim do desenvolvimento de um componente, fluxo de interação ou até mesmo um simples método de soma. :smile:

## O que testar ?
A ideia principal de um teste é sempre ver se o valor entregado por um recurso, função, componente, fluxo (ou qualquer _feature_) está entregando é o mesmo pensado e implementado!

Então por exemplo, se temos um recurso que recebe um _input_ e faz com que apareça um _modal_ na tela com esse _input_. Simulamos o valor a ser digitado no _input_ e simulamos o modal aparecendo e comparamos com o valor que aparece nele. 


## Como Testar ? 
- Iremos utilizar um _framework_ de testes: [_**JEST**_](https://jestjs.io/) que possuei várias ferramentas que nos ajudarão a escrever nossos testes de forma rápida, simples, e prática! :rocket:
  Também, utilizaremos uma biblioteca recomendada pela própria documentação do [**Reactjs**](https://pt-br.reactjs.org/): [_React-Testing-Library_](https://testing-library.com/docs/react-testing-library/intro) - Que é uma lib que facilita simular ações do usuário. :smiley:

Primeiro se cria o arquivo que vai conter os testes. Vamos criar um arquivo chamado `App.test.js`. 

E Dentro: 

```
import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("<App />", () => {
  it("renders without errors", () => {
    expect(render(<App />)).toBeTruthy();
    // o expect aqui não seria necessário
    // o metodo render já retorna um erro caso o render não funcione
  });
});
```

Temos palavras chaves aqui:
- **describe**: é um _syntax-sugar_ para escrever o contexto que a gente está escrevendo o teste. Nesse caso, eu escolhi deixar `<App />`;
- **it**: Palavra chave pra onde escreveremos o que está sendo testado e o teste em si dentro;
- **expect**: É o que compara um valor com o valor do _.toBe_;
- **toBe**: É o que compara um valor com o valor do _expect_;
- **render**: método disponível pela importação da biblioteca `"@testing-library/react"`;

De modo geral, testes são escritos nessa forma:

"espero que (valor) seja igual (valor)" => ```expect(true).toBe(true)```



O _Jest_ nos permite digitar `jest` na linha de comando do terminal e rodar como testes todos os arquivos quem possuem `.spec` ou `.test` no nome. Então por exemplo:
digamos que temos o seguinte arquivo: 
`App.test.js`

src/__tests__/
├── App.test.js

Quando usarmos o comando `jest`, o arquivo `App.test.js` será rodado. ![jestRun](./public/images/runningJestApp.png)
