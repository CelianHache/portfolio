import { Heading } from "@chakra-ui/react";
import { Projects } from "./Projects";
import { Productions } from "./Productions";

export const EngineeringCourse: React.FC = () => {
    return (
        <>
            <Heading>Engineering course</Heading>
            <Projects></Projects>
            <Productions></Productions>
        </>
    );
};
