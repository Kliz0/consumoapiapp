import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Card = ({ url, author, id, pontos }) => {
  return (
    <Box
      flexDirection="column"
      overflow="hidden"
      borderRadius="sm"
      m={3}
      maxW={300}
    >
      <Image src={url} w={300} h={200} />
      <Text fontSize="1.3rem" fontWeight="semibold">
        Nome do Autor: {author}
      </Text>
      <Text fontSize="1.1rem" fontWeight="medium">
        Id: {id}
      </Text>
      <Text fontSize="1.1rem" fontWeight="medium">
        Pontos: {pontos}
      </Text>
    </Box>
  );
};
