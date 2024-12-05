import { Box, Heading } from "@chakra-ui/react";
import { WorkInProgress } from "../containers/WorkInProgress";

export const LV2: React.FC = () => {
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
                LV2
            </Heading>

            <WorkInProgress />
        </Box>
    );
};
