import { Flex } from "@chakra-ui/react";
import React from "react";
import { BorderRadius, BoxShadow } from "../../styles/theme";
import ActivityFooter from "./activity-footer.component";
import ActivityHeader from "./activity-header";

type Props = {
  children: any;
  title: string;
  subtitle: string;
  footerText: string;
  width: any;
};

const Activity: React.FC<Props> = ({
  children,
  title,
  subtitle,
  footerText,
  width,
}) => {
  return (
    <Flex
      _hover={{
        boxShadow: "0 0 10px 0 grey",
      }}
      justify="space-between"
      w={width}
      bgColor="white"
      mt={{ base: "1rem", md: "0" }}
      minH="12rem"
      borderRadius={BorderRadius}
      boxShadow={BoxShadow}
      flexDir="column"
    >
      <ActivityHeader title={title} subtitle={subtitle} />
      {children}
      <ActivityFooter text={footerText} />
    </Flex>
  );
};

export default Activity;
