import { Box, Flex, Image } from "@chakra-ui/react";
import { BoxShadow } from "../../styles/theme";
import CircleImage from "../../assets/images/circle.png";

type Stat = {
  id: number;
  title: string;
};

const Statistics = () => {
  const data: Stat[] = [
    {
      id: 1,
      title: "Total Customer",
    },
    {
      id: 2,
      title: "Paid Invoices",
    },
    {
      id: 3,
      title: "Due Invoices",
    },
    {
      id: 4,
      title: "Pending Request",
    },
    {
      id: 5,
      title: "Monitoring Device",
    },
  ];
  return (
    <Flex flexWrap="wrap" mt={{ base: "0.5rem", md: "0.8rem" }}>
      {data.map((stat: Stat) => {
        return (
          <Box
            key={stat?.id}
            w={{ base: "98%", sm: "46%", md: "30%", lg: "18.5%" }}
            h={{ base: "4rem", sm: "5rem" }}
            mx={{ base: "0.7%", sm: "2%", md: "1.5%", lg: "0.7%" }}
            borderRadius="5px"
            mb={{ base: "1rem", sm: "1.5rem", md: "2rem" }}
            _hover={{
              boxShadow: "0 0 10px 0 grey",
            }}
            bgColor="white"
            boxShadow={BoxShadow}
          >
            <Flex h="100%" w="100%" pl="7%" align="center">
              <Image
                alt="notification"
                src={CircleImage}
                h="2.3rem"
                mr="0.5rem"
                w="2.3rem"
              />
              <Flex flexDir="column">
                <Box fontWeight="bold">10</Box>
                <Box color="#384C74" fontSize="0.5rem">
                  {stat?.title}
                </Box>
              </Flex>
            </Flex>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Statistics;
