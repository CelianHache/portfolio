import { Box, Heading } from "@chakra-ui/react";
import { Projects } from "./Projects";
import { Productions } from "./Productions";

export const EngineeringCourse: React.FC = () => {
    return (
        <Box spaceY={5}>
            <Heading
                size={"3xl"}
                fontWeight={"semi-bold"}
                letterSpacing={"wider"}
                textTransform={"uppercase"}
                textAlign={"center"}
            >
                Engineering course
            </Heading>

            {/* <MotionContainer
                p={5}
                w={"100%"}
                bgColor={"transparent"}
                blur={"50px"}
            > */}
            <Projects />
            {/* </MotionContainer> */}

            {/* <MotionContainer p={5} bgColor={"transparent"} blur={"50px"}> */}
            <Productions />
            {/* </MotionContainer> */}
        </Box>
    );
};
