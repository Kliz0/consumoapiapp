import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

import { useFilterCarta } from "../../context/CartaProvider";
import { getCartasRequest } from "../../../../store/modules/cartas/actions/getCartas";
import { Card } from "./Card";
import { AddCardButton } from "./Buttons/AddCardButton";
import { addCartaRequest } from "../../../../store/modules/cartas/actions/addCarta";
import getRandomIntInclusive from "../../../../utils/getRandomIntInclusive";
import { ResetCardButton } from "./Buttons/ResetCardsButton";

export default function Cartas() {
  const dispatch = useDispatch();
  const [reset, setReset] = useState(false);

  let { nome, numeroCartas, selecionarNumeroCartas, selecionarPontos, pontos } =
    useFilterCarta();

  const { successPayload: cartas } = useSelector(
    (state) => state.cartas.getCartas
  );

  const { successPayload: cartaAdicionada } = useSelector(
    (state) => state.cartas.addCarta
  );

  let numeroAleatorio = getRandomIntInclusive(1, 100);

  const pontosAleatorios = () => {
    selecionarPontos(
      Array(8)
        .fill()
        .map(() => (Math.random() * 10).toFixed(0))
    );
  };

  useEffect(() => {
    dispatch(getCartasRequest(numeroAleatorio));
    setReset(false);
    pontosAleatorios();
  }, [dispatch, reset]);

  const paginasUtilizadas = [];

  if (paginasUtilizadas.includes(numeroAleatorio)) {
    return (numeroAleatorio = getRandomIntInclusive(1, 100));
  }

  const adicionarCarta = () => {
    dispatch(addCartaRequest(numeroAleatorio));
    paginasUtilizadas.push(numeroAleatorio);
    selecionarNumeroCartas(numeroCartas + 1);
  };

  const resetarCartas = () => {
    setReset(true);
    selecionarNumeroCartas(5);
  };

  return (
    <>
      {nome !== "" && (
        <Flex flexDir="column" alignItems="center">
          <Flex w="full" h="full" dir="row" flexWrap="wrap">
            {cartas?.map((x, i) => {
              return (
                <Card
                  id={x.id}
                  author={x.author}
                  url={x.download_url}
                  key={`key${x.id}`}
                  pontos={pontos[i]}
                />
              );
            })}
            {numeroCartas > 5 &&
              cartaAdicionada?.slice(0, numeroCartas - 5).map((x, i) => {
                return (
                  <Card
                    id={x.id}
                    author={x.author}
                    url={x.download_url}
                    key={`key${x.id}`}
                    pontos={pontos[i + 5]}
                  />
                );
              })}
          </Flex>
          <Flex flexDir="row">
            <AddCardButton
              onClick={adicionarCarta}
              disabled={numeroCartas >= 8}
            />
            <ResetCardButton onClick={resetarCartas} />
          </Flex>
        </Flex>
      )}
    </>
  );
}
