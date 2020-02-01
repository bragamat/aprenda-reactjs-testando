import React from "react";

import { List } from "./components";
import { listaItens } from "./mocks/listItems";
function App() {
  return (
    <div>
      <List items={listaItens} />
    </div>
  );
}

export default App;
