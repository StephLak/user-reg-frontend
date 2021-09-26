import { Flex, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";

import dashboardIcon from "../../assets/icons/dashboard.png";
import accessoriesIcon from "../../assets/icons/accessories.png";
import crmIcon from "../../assets/icons/crm.png";
import deviceIcon from "../../assets/icons/device.png";
import inventoryIcon from "../../assets/icons/inventory.png";
import paymentIcon from "../../assets/icons/payment.png";
import requestIcon from "../../assets/icons/request.png";
import ticketIcon from "../../assets/icons/ticket.png";
import { COLORS } from "../../styles/theme";
import SideBar from "../../components/sidebar/side-bar.component";
import Header from "../../components/header/header.component";
import Dashboard from "../../components/dashboard/dashboard.component";

const Home = () => {
  const DataTabs = ({ data }: any) => {
    const sideBarWidth = "11rem";

    return (
      <Tabs orientation="vertical" isLazy bgColor={COLORS.BACKGROUND_COLOR}>
        <SideBar data={tabData} />
        <Flex w="100vw" minH="100vh" flexDir="column" overflowX="scroll">
          <Header />
          <Flex ml={sideBarWidth} flexDir="column" mr="0.5rem" pt="4rem">
            <TabPanels>
              {data.map((tab: any, index: number) => (
                <TabPanel
                  minH="80vh"
                  w="100%"
                  px={{ base: 4, lg: 12 }}
                  key={index}
                >
                  {tab.children}
                </TabPanel>
              ))}
            </TabPanels>
          </Flex>
        </Flex>
      </Tabs>
    );
  };

  // 2. Create an array of data
  const tabData = [
    {
      label: "Dashboard",
      children: <Dashboard />,
      icon: dashboardIcon,
      showIcon: false,
    },
    {
      label: "Inventory",
      // children: <TrainingsComponent />,
      icon: inventoryIcon,
      showIcon: true,
    },
    {
      label: "Accessories",
      // children: <EventsComponent />,
      icon: accessoriesIcon,
      showIcon: true,
    },
    {
      label: "CRM",
      // children: <TransactionsComponent />,
      icon: crmIcon,
      showIcon: false,
    },
    {
      label: "Service Request",
      // children: <UsersComponent />,
      icon: requestIcon,
      showIcon: false,
    },
    {
      label: "Device",
      // children: <CategoriesComponent />,
      icon: deviceIcon,
      showIcon: false,
    },
    {
      label: "Payment History",
      // children: <CategoriesComponent />,
      icon: paymentIcon,
      showIcon: true,
    },
    {
      label: "Ticket",
      // children: <CategoriesComponent />,
      icon: ticketIcon,
      showIcon: true,
    },
  ];

  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />;
};

export default Home;
