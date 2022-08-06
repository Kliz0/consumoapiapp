import { Button, Text } from "@chakra-ui/react";
import React from "react";

export const AddCardButton = ({ onClick, disabled }) => {
  return (
    <Button
      fontWeight="normal"
      size="md"
      maxW={300}
      maxH={10}
      fontSize="lg"
      variant="outline"
      onClick={onClick}
      colorScheme="blue"
      disabled={disabled}
      m={2}
    >
      <Text fontWeight="black">Adicionar cartão</Text>
    </Button>
  );
};
