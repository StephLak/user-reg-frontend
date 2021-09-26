import { Flex, Icon, Image, TabList, Tab, Text } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import DashboardLogoImage from "../../assets/images/dashboard-logo.png";
import { BoxShadow, COLORS } from "../../styles/theme";
import settingsIcon from "../../assets/icons/settings.png";

const SideBar = ({ data }: any) => {
  const sideBarWidth = "11rem";
  return (
    <Flex
      minW={sideBarWidth}
      w="16%"
      position="fixed"
      boxShadow={BoxShadow}
      zIndex={3}
      minH="100vh"
      bgColor="white"
    >
      <Flex
        h="3rem"
        flexDir="row"
        position="fixed"
        minW={sideBarWidth}
        w="16%"
        justify="center"
        align="center"
        boxShadow={BoxShadow}
      >
        <Image
          alt="logo"
          src={DashboardLogoImage}
          h="auto"
          minW="4rem"
          w="5rem"
        />
      </Flex>
      <TabList pt="6rem" w="100%">
        {data.map((tab: any, index: number) => (
          <Tab
            paddingInlineStart={0}
            paddingInlineEnd={0}
            color="blackAlpha.500"
            justifyContent="start"
            _focus={{
              boxShadow: "none",
            }}
            py="0.6rem"
            _selected={{
              borderColor: "none",
              color: "blackAlpha.900",
            }}
            key={index}
          >
            <Image
              w="1rem"
              h="1rem"
              src={tab.icon}
              color={COLORS.PRIMARY_COLOR}
              mx="1rem"
            />
            <Text fontSize="0.8rem">{tab.label}</Text>
            {tab.showIcon && (
              <Icon
                as={IoIosArrowForward}
                color="blackAlpha.500"
                ml="auto"
                mr="0.5rem"
              />
            )}
          </Tab>
        ))}
        <Tab
          mt="100%"
          color="blackAlpha.500"
          paddingInlineStart={0}
          paddingInlineEnd={0}
          justifyContent="start"
          _focus={{
            boxShadow: "none",
          }}
          py="1rem"
          _selected={{
            borderColor: "none",
            color: "blackAlpha.900",
          }}
        >
          <Image
            w="1rem"
            h="1rem"
            src={settingsIcon}
            color={COLORS.PRIMARY_COLOR}
            mx="1rem"
          />
          <Text fontSize="0.8rem">SETTINGS</Text>
        </Tab>
      </TabList>
    </Flex>
  );
};

export default SideBar;
