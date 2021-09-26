import { Flex, Image } from "@chakra-ui/react";
import { BoxShadow } from "../../styles/theme";
import emailIcon from "../../assets/icons/email.png";
import avatarIcon from "../../assets/icons/avatar.png";
import notificationIcon from "../../assets/icons/notification.png";

const Header = () => {
  const sideBarWidth = "11rem";
  return (
    <Flex
      ml={sideBarWidth}
      h="3rem"
      flexDir="row"
      justify="space-between"
      position="fixed"
      w="87%"
      boxShadow={BoxShadow}
      zIndex={1}
      align="center"
      bgColor="white"
    >
      <Flex
        ml="auto"
        mr={{ base: "35%", sm: "25%", md: "15%", lg: "10%" }}
        align="center"
      >
        <Image alt="email" src={emailIcon} h="1.1rem" mr="1rem" w="1.1rem" />
        <Image
          alt="notification"
          src={notificationIcon}
          h="1.1rem"
          mr="2.5rem"
          w="1.1rem"
        />
        <Image
          alt="avatar"
          src={avatarIcon}
          h="1.5rem"
          minW="1rem"
          w="1.5rem"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
