import { Box, Heading } from "@chakra-ui/react";
import { PCE } from "./PCE";
import { LV2 } from "./LV2";

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

                <PCE />
                <LV2 />
            </Box>
        </Box>
    );
};
