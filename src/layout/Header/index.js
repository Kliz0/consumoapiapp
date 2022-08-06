import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
export const Header = () => {
  const headerColor = useColorModeValue("white", "gray.900");
  const iconsColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex
      as="nav"
      px="4"
      py="3"
      position="sticky"
      zIndex="0"
      top="0"
      w="full"
      bgColor={headerColor}
      borderBottom="1px solid rgb(0 0 0 / 7%)"
    >
      <Flex
        w={{ lg: "100%" }}
        alignItems="center"
        justifyContent="flex-end"
        pr={{ base: "0", lg: "10" }}
      >
        <Flex color={iconsColor}>
          <ColorModeSwitcher />
        </Flex>
      </Flex>
    </Flex>
  );
};
