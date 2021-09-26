import { Box, Flex } from "@chakra-ui/react";
import Dot from "../dot/dot.component";

const Payment = () => {
  return (
    <Flex
      align="center"
      borderBottom="1px solid lightgrey"
      pt="0.3rem"
      pb="0.3rem"
      mx="1rem"
    >
      <Flex>
        <Dot />
        <Flex flexDir="column">
          <Box color="#333333" fontSize="xx-small" my="0.1rem">
            Auto deposit - Fri, 26th Mar, 2021 11:58:01 GMT+1
          </Box>
          <Box color="#333333" fontSize="xx-small">
            Payment ID: 1616756086354
          </Box>
        </Flex>
      </Flex>
      <Box ml="auto" fontSize="xx-small" color="#1EB2A6">
        #100,000.00
      </Box>
    </Flex>
  );
};

export default Payment;
