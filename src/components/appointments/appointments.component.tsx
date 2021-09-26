import { Box, Flex, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { BorderRadius, BoxShadow, COLORS } from "../../styles/theme";

type Appointment = {
  customerName: string;
  type: string;
  date: string;
  person: string;
  status: string;
  action: string;
};

const Appointments = () => {
  const TABLESTYLE = {
    size: "md",
    fontSize: "0.7rem",
    w: "unset",
  };

  const appointMent: Appointment = {
    customerName: "Jane Doe",
    type: "Installation",
    date: "2021-05-20  12:25 PM",
    person: "John Doe - 08123456789",
    status: "Waiting to confirm",
    action: "Details",
  };

  const data: Appointment[] = [
    appointMent,
    appointMent,
    appointMent,
    appointMent,
  ];
  return (
    <Flex
      flexDir="column"
      mb="2rem"
      boxShadow={BoxShadow}
      borderRadius={BorderRadius}
      bgColor="white"
      minH="18.5rem"
      mt="1rem"
    >
      <Flex mx="1.5rem" my="0.5rem" align="center" justify="space-between">
        <Box color={COLORS.PRIMARY_COLOR} fontSize="sm" fontWeight="semibold">
          Pending Installation Request
        </Box>
        <Box color={COLORS.PRIMARY_COLOR} fontSize="xs" fontWeight="md">
          View All
        </Box>
      </Flex>
      <Table {...TABLESTYLE}>
        <Thead bgColor={COLORS.PRIMARY_COLOR}>
          <Tr>
            <Th textTransform="capitalize" color="white">
              Customer Name
            </Th>
            <Th textTransform="capitalize" color="white">
              Request Type
            </Th>
            <Th textTransform="capitalize" color="white">
              Request Date
            </Th>
            <Th textTransform="capitalize" color="white">
              Contact Person
            </Th>
            <Th textTransform="capitalize" color="white">
              Status
            </Th>
            <Th textTransform="capitalize" color="white">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((appointment: Appointment, index: number) => {
            return (
              <Tr key={index}>
                <Td>{appointment?.customerName}</Td>
                <Td>{appointment?.type}</Td>
                <Td>{appointment?.date}</Td>
                <Td>{appointment?.person}</Td>
                <Td>{appointment?.status}</Td>
                <Td>{appointment?.action}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default Appointments;
