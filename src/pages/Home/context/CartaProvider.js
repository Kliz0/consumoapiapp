import React, { createContext, useContext, useState } from "react";

// Criação context de cartas
const FilterContext = createContext({
  carta: "",
  nome: "",
  numeroCartas: 0,
  selecionarCarta: () => null,
  selecionarNome: () => null,
  selecionarNumeroCartas: () => null,
});

const CartaProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [carta, setCarta] = useState("");
  const [numeroCartas, setNumeroCartas] = useState(5);

  const selecionarNome = (nome) => {
    setNome(nome);
  };

  const selecionarCarta = (carta) => {
    setCarta(carta);
  };

  const selecionarNumeroCartas = (numeroCartas) => {
    setNumeroCartas(numeroCartas);
  };

  return (
    <FilterContext.Provider
      value={{
        nome,
        carta,
        numeroCartas,
        selecionarNome,
        selecionarCarta,
        selecionarNumeroCartas,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterCarta = () => useContext(FilterContext);

export default CartaProvider;
