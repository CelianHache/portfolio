import { Box, Heading } from "@chakra-ui/react";
import { WorkInProgress } from "../containers/WorkInProgress";

export const PCE: React.FC = () => {
    return (
        <Box spaceY={5}>
            <Heading
                textAlign={"left"}
                color={"gray.800"}
                size={"xl"}
                fontWeight={"semi-bold"}
                fontFamily={"Poppins"}
                textTransform={"uppercase"}
            >
                Professional communication and english
            </Heading>

            <WorkInProgress />
        </Box>
    );
};
