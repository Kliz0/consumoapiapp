import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NomeInputText } from "./NomeInputText";

import { useFilterCarta } from "../../context/CartaProvider";

export default function NomeInput() {
  const { nome } = useFilterCarta();

  return (
    <Flex w="full" h="full">
      {nome === "" && <NomeInputText />}
      {nome !== "" && (
        <Text
          textAlign="right"
          w="full"
          mr={3}
          fontSize="1.3rem"
          fontWeight="bold"
        >
          Olá, {nome}
        </Text>
      )}
    </Flex>
  );
}
