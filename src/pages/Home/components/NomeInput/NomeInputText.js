import React from "react";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useFilterCarta } from "../../context/CartaProvider";

export const NomeInputText = () => {
  const { selecionarNome } = useFilterCarta();

  const [value, setValue] = React.useState("");

  return (
    <>
      <Flex w="full" h="full" ml={3} placeContent="center" mt={3}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite um nome"
          size="md"
          maxW={180}
          mr={3}
          fontSize="lg"
        />
        <Button
          fontWeight="normal"
          size="md"
          maxW={100}
          maxH={10}
          fontSize="lg"
          variant="outline"
          onClick={() => selecionarNome(value)}
          colorScheme="blue"
        >
          <Text fontWeight="black">Ver cartas</Text>
        </Button>
      </Flex>
    </>
  );
};
