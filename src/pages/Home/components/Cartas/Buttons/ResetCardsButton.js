import { Button, Text } from "@chakra-ui/react";
import React from "react";

export const ResetCardButton = ({ onClick }) => {
  return (
    <Button
      fontWeight="normal"
      size="md"
      maxW={300}
      maxH={10}
      fontSize="lg"
      variant="outline"
      onClick={onClick}
      colorScheme="red"
      m={2}
    >
      <Text fontWeight="black">Resetar</Text>
    </Button>
  );
};
