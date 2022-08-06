import React from "react";
import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

export const SelectedCardButton = ({
  active = false,
  onClick,
  children,
  ...rest
}) => {
  const bgColorActive = useColorModeValue("blue.50", "gray.700");
  const colorActive = useColorModeValue("blue.700", "blue.200");

  const borderColorNotActive = useColorModeValue("gray.300", "gray.600");
  const borderColorActive = useColorModeValue("blue.600", "blue.900");
  // Selecionando valores light e dark mode.

  return (
    <Box
      as="button"
      textAlign="left"
      w="full"
      px="4"
      py="3"
      borderWidth="thin"
      borderRadius="md"
      borderStyle="solid"
      borderColor={active ? borderColorActive : borderColorNotActive}
      bgColor={active ? bgColorActive : ""}
      color={active ? colorActive : ""}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Box>
  );
};
