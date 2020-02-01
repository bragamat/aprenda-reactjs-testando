import React from "react";
import { render } from "@testing-library/react";

import List from "../../components/List";

describe("Lista com items", () => {
  it("renderiza uma <ul />", () => {
    const { container, getByRole } = render(<List />);

    expect(container.querySelector("ul")).toBeInTheDocument();
    expect(getByRole("list")).toBeTruthy();
  });

  it("deve renderizar 5 <li /> com conteudo especifico", () => {
    const listaItens = [
      { key: Math.random(4), name: "Item um" },
      { key: Math.random(4), name: "Item dois" },
      { key: Math.random(4), name: "Item tres" },
      { key: Math.random(4), name: "Item quatro" },
      { key: Math.random(4), name: "Item cinco" }
    ];
    const { container, getAllByText, queryByText } = render(
      <List items={listaItens} />
    );
    expect(container.querySelectorAll("li").length).toBe(listaItens.length);
    expect(getAllByText(/Item/).length).toBe(listaItens.length);
    expect(queryByText("Item seis")).not.toBeInTheDocument();
  });
});
