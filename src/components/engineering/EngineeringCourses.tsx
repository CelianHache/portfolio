import { Box, Heading } from "@chakra-ui/react";
import { Projects } from "./Projects";
import { Productions } from "./Productions";

export const EngineeringCourses: React.FC = () => {
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
                    Engineering courses
                </Heading>

                <Projects />
                <Productions />
            </Box>
        </Box>
    );
};
