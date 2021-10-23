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
import Header from "../../components/header/header.component";
import Profile from "../../components/profile/profile";

const Home = () => (
  <>
    <Header />
    <Profile />
  </>
);

export default Home;
