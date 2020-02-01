import React from "react";
import { render, fireEvent } from "@testing-library/react";

import List from "../../components/List";
import { listaItens } from "../../mocks/listaItens";

describe("Lista", () => {
  it("Remove um item da lista", () => {
    const itemParaDeletar = {
      key: Math.random(4),
      name: "Item a ser deletado"
    };
    listaItens.push(itemParaDeletar);

    const { getByText, getByTestId, getAllByRole } = render(
      <List items={listaItens} />
    );
    const itemDeletado = getByText(itemParaDeletar.name);
    const button = getByTestId(`delete-button-${itemParaDeletar.key}`);

    fireEvent.click(button);

    expect(button).toHaveTextContent("remover");
    expect(itemDeletado).not.toBeInTheDocument();
    expect(getAllByRole("listitem").length).toBe(listaItens.length - 1);
    expect(getByText(listaItens[0].name)).toBeInTheDocument();
  });
});
