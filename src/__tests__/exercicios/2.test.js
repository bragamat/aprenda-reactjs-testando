import React from "react";
import { render, fireEvent } from "@testing-library/react";

import List from "../../components/List";
import { listaItens } from "../../mocks/listaItens";

describe("Lista", () => {
  it("adiciona um item na lista", () => {
    const { getByRole, getByTestId, getAllByRole } = render(
      <List items={listaItens} />
    );
    const input = getByRole("textbox");
    const button = getByTestId("add-item");
    const value = "input qualquer";
    const itensAntes = getAllByRole("listitem").length;

    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);

    expect(button).toHaveTextContent("Adicionar item");
    expect(getAllByRole("listitem").length).toBe(itensAntes + 1);
  });

  it("valor do input fica vazio quando add item", () => {
    const { getByRole, getByTestId } = render(<List items={listaItens} />);
    const input = getByRole("textbox");
    const button = getByTestId("add-item");
    const value = "input qualquer";

    fireEvent.change(input, { target: { value } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
