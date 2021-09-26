import { Flex } from "@chakra-ui/react";
import Activity from "./activity.component";
import Customer from "./customer.component";
import Payment from "./payment.component";
import System from "./system.component";

const Activities = () => {
  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      mt={{ base: "0.5rem", md: "0.8rem" }}
      justify="space-between"
    >
      <Activity
        title="Recent Customers"
        subtitle="Most Recent List of Customers"
        width={{ base: "100%", sm: "80%", md: "33%", lg: "30%" }}
        footerText="All Customers"
      >
        <Flex flexDir="column" mb="auto">
          <Customer />
          <Customer />
          <Customer />
        </Flex>
      </Activity>

      <Activity
        title="Successful Payment"
        subtitle="Most Recent List Of Successful Payments"
        width={{ base: "100%", sm: "80%", md: "35%" }}
        footerText="All Payment"
      >
        <Flex flexDir="column" mb="auto">
          <Payment />
          <Payment />
          <Payment />
        </Flex>
      </Activity>

      <Activity
        title="Installed System"
        subtitle="Most Recent Completed Installtions"
        width={{ base: "100%", sm: "80%", md: "30%" }}
        footerText="All Details"
      >
        <Flex flexDir="column" mb="auto">
          <System />
          <System />
          <System />
        </Flex>
      </Activity>
    </Flex>
  );
};

export default Activities;
