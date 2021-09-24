import { Box, Flex, Image, Text } from "@chakra-ui/react";
import BgImage from "../../assets/images/bg.png";
import LogoImage from "../../assets/images/logo.png";
import LockImage from "../../assets/images/lock.png";
import SideBarSmallRectangle from "../sidebar-small-rectangles/sidebar-small-rectangle";
import { BorderRadius, BoxShadow, COLORS } from "../../styles/theme";

type Props = {
  title: string;
  subtitle: string;
  children: any;
};

const AuthLayout: React.FC<Props> = ({ children, title, subtitle }) => {
  const customTextStyle = {
    fontSize: "12px",
    color: "#384C74",
  };
  return (
    <Flex minW="100vw" minH="100vh" bgColor={COLORS.BACKGROUND_COLOR}>
      <Flex
        w="23%"
        flexDir="column"
        bg={`url(${BgImage})`}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          px="7%"
          py="10%"
          h="100%"
          flexDir="column"
          justify="space-between"
        >
          <Image src={LogoImage} w="5rem" />
          <Flex flexDir="column">
            <Text
              color="#18B2D2"
              textTransform="uppercase"
              fontSize="15px"
              fontWeight="700"
            >
              Our Solution
            </Text>
            <Text
              mt="0.5rem"
              color="#384C74"
              fontSize="15px"
              fontWeight="light"
            >
              Our solution provides low-cost, carbon-free on demand power for
              households and small business across Nigeria.
            </Text>
            <Flex mt="1rem">
              <SideBarSmallRectangle bgColor="#18B2D2" />
              <SideBarSmallRectangle bgColor="white" />
              <SideBarSmallRectangle bgColor="white" />
            </Flex>
          </Flex>
          <Flex w="100%" justify="space-between">
            <Text style={customTextStyle}>Privacy Policy</Text>
            <Text style={customTextStyle}>Terms & Conditions</Text>
            <Text style={customTextStyle}>Faqs</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="77%" align="center" justify="center">
        <Flex
          flexDir="column"
          minH="20rem"
          w="45%"
          bgColor="white"
          borderRadius={BorderRadius}
          boxShadow={BoxShadow}
        >
          <Box
            h="0.5rem"
            w="100%"
            bgColor={COLORS.PRIMARY_COLOR}
            borderRadius="5px 5px 0 0"
          />
          <Flex flexDir="column" w="100%" h="98%" px="10%" pt="2rem">
            <Flex h="3rem" align="center">
              <Image src={LockImage} w="3rem" h="3rem" />
              <Flex flexDir="column" ml="0.6rem">
                <Box fontSize="15px">{title}</Box>
                <Box mt="0.05rem" color="#384C74" fontSize="12px">
                  {subtitle}
                </Box>
              </Flex>
            </Flex>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AuthLayout;
