import { Heading, Text } from "@chakra-ui/react";
import { MotionContainer } from "./MotionContainer";

export const WorkInProgress: React.FC = () => {
    return (
        <MotionContainer
            p={20}
            bgColor={"transparent"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            backdropBlur={"1000px"}
            flexDir={"column"}
            shadow={"md"}
        >
            <Heading
                color={"gray.800"}
                size={"3xl"}
                fontFamily={"Poppins"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Exciting things are on the way!
            </Heading>
            <Text
                fontFamily={"Poppins"}
                textAlign={"center"}
                fontWeight={"normal"}
                mt={4}
            >
                We’re currently improving our website to bring you a better
                experience.
            </Text>{" "}
            <Text
                fontFamily={"Poppins"}
                textAlign={"center"}
                fontWeight={"normal"}
                mt={4}
            >
                Please check back soon for updates.
            </Text>{" "}
            <Text
                fontFamily={"Poppins"}
                textAlign={"center"}
                fontWeight={"normal"}
                mt={4}
            >
                Thank you for your patience and support!
            </Text>
        </MotionContainer>
    );
};
