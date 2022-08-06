import { Flex } from "@chakra-ui/react";
import React from "react";
import Cartas from "./components/Cartas";
import NomeInput from "./components/NomeInput";

import CartaProvider from "./context/CartaProvider";

export default function Home() {
  return (
    <CartaProvider>
      <Flex w="full" h="full" direction="column">
        <NomeInput />
        <Cartas />
      </Flex>
    </CartaProvider>
  );
}
