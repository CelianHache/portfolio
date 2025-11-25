import { Box, Heading } from "@chakra-ui/react";
import { WorkInProgress } from "../containers/WorkInProgress";

export const Mobility: React.FC = () => {
    return (
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
            <Box spaceY={5} w={{ base: "100%", lg: "80%" }}>
                <Heading
                    size={"5xl"}
                    fontWeight={"bold"}
                    textAlign={"left"}
                    fontFamily={"Poppins"}
                    py={5}
                >
                    International Mobility
                </Heading>
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
            </Box>
        </Box>
    );
};
