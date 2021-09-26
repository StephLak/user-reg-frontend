import { Box, Flex } from "@chakra-ui/react";
import Activities from "../activities/activities.component";
import Appointments from "../appointments/appointments.component";
import Statistics from "../statistics/statistics.component";

const Dashboard = () => {
  return (
    <Flex flexDir="column" w="100%" mr="3rem">
      <Box color="#526A98" fontWeight="bold" fontSize="medium">
        Dashboard
      </Box>
      <Statistics />
      <Box color="#526A98" fontWeight="semibold" fontSize="small">
        Activities
      </Box>
      <Activities />
      <Box mt="2rem" color="#526A98" fontWeight="semibold" fontSize="small">
        Upcoming Appointments(5)
      </Box>
      <Appointments />
    </Flex>
  );
};

export default Dashboard;
