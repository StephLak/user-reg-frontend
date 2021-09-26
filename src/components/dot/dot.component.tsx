import { Box } from "@chakra-ui/react";
import { COLORS } from "../../styles/theme";

const Dot = () => {
  return (
    <Box
      my="auto"
      mr="0.5rem"
      h="4px"
      w="4px"
      borderRadius="50%"
      bgColor={COLORS.PRIMARY_COLOR}
    />
  );
};

export default Dot;
