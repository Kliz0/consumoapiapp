import React, { createContext, useContext, useState } from "react";

// Criação context de cartas
const FilterContext = createContext({
  nome: "",
  numeroCartas: 0,
  pontos: [],
  selecionarNome: () => null,
  selecionarNumeroCartas: () => null,
  selecionarPontos: () => null,
});

const CartaProvider = ({ children }) => {
  const [nome, setNome] = useState("");
  const [numeroCartas, setNumeroCartas] = useState(5);
  const [pontos, setPontos] = useState([]);

  const selecionarNome = (nome) => {
    setNome(nome);
  };

  const selecionarNumeroCartas = (numeroCartas) => {
    setNumeroCartas(numeroCartas);
  };

  const selecionarPontos = (pontos) => {
    setPontos(pontos);
  };

  return (
    <FilterContext.Provider
      value={{
        nome,
        numeroCartas,
        pontos,
        selecionarNome,
        selecionarNumeroCartas,
        selecionarPontos,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterCarta = () => useContext(FilterContext);

export default CartaProvider;
