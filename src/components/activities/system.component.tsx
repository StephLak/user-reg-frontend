import { Box, Flex } from "@chakra-ui/react";
import Dot from "../dot/dot.component";

const System = () => {
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
            AC:67:B2:65:03:D2
          </Box>
          <Box color="#333333" fontSize="xx-small">
            Jane Doe
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default System;
