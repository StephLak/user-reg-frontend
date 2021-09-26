import { Box, Flex, Icon } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

const Customer = () => {
  return (
    <Flex
      align="center"
      borderBottom="1px solid lightgrey"
      pb="0.3rem"
      mx="1rem"
    >
      <Flex flexDir="column">
        <Box fontSize="xs">Jane Doe</Box>
        <Flex>
          <Box color="#333333" fontSize="xx-small" my="0.1rem">
            Janeisadoe@yahoo.com
          </Box>
          <Box ml="7%" fontSize="xx-small" color="#1EB2A6">
            07123456789
          </Box>
        </Flex>
      </Flex>
      <Icon as={IoIosArrowForward} color="blackAlpha.500" ml="auto" />
    </Flex>
  );
};

export default Customer;
