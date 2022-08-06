import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import CartaProvider from "./context/CartaProvider";

export default function Home() {
  return (
    <CartaProvider>
      <Flex height="100%">
        <Text>bbb</Text>
      </Flex>
    </CartaProvider>
  );
}
