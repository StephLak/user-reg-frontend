import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../styles/theme";

type Props = {
  title: string;
  subtitle: string;
};

const ActivityHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Flex
      flexDir="column"
      pl="1rem"
      h="2.2rem"
      w="100%"
      bgColor={COLORS.PRIMARY_COLOR}
      borderRadius="5px 5px 0 0"
    >
      <Box color="white" fontSize="xs" fontWeight="semibold">
        {title}
      </Box>
      <Box color="white" fontSize="xx-small">
        {subtitle}
      </Box>
    </Flex>
  );
};

export default ActivityHeader;
