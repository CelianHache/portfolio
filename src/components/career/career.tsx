import { Box, Heading } from "@chakra-ui/react";
import { PEP } from "./PEP";
import { Apprenticeship } from "./Apprenticeship";

export const Career: React.FC = () => {
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
                    Career development
                </Heading>
                <Apprenticeship />
                <PEP />
            </Box>
        </Box>
    );
};
