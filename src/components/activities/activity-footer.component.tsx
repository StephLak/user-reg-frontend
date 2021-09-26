import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../styles/theme";

type Props = {
  text: string;
};

const ActivityFooter: React.FC<Props> = ({ text }) => {
  return (
    <Flex
      pl="1rem"
      h="1.2rem"
      bgColor="rgba(30, 178, 166, 0.25)"
      w="100%"
      align="center"
      justify="center"
      borderRadius="0 0 5px 5px"
    >
      <Box color={COLORS.PRIMARY_COLOR} fontSize="xs">
        {text}
      </Box>
    </Flex>
  );
};

export default ActivityFooter;
