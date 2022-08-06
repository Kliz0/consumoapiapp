import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import { Header } from "./Header";
import { Container } from "./styles";

export const Layout = ({ children }) => {
  const containerTheme = useColorModeValue("light", "");

  return (
    <Container mode={containerTheme}>
      <Header />
      <Flex flex="1" overflow="hidden">
        <Flex direction="column" flex="1">
          <Box overflow="auto" flex="1">
            {children}
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};
