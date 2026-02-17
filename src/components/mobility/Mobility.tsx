import { Box, Heading, VStack } from "@chakra-ui/react";
import { ImageCard } from "../containers/ImageCard";

const certifications = [
    {
        title: "Cambridge English Assessment - B2",
        src: "./mobility/cambridge_logo.png",
        to: `${import.meta.env.BASE_URL}mobility/cambridge.pdf`,
        dates: "2021",
        content: "Achieved B2 level in English through the Cambridge English Assessment, demonstrating proficiency in reading, writing, listening, and speaking skills."
    }]

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

                    <VStack spaceY={5} align="stretch">
                        {certifications.map((certification, index) => (
                            <ImageCard
                                key={index}
                                src={certification.src}
                                title={certification.title}
                                content={certification.content}
                                to={certification.to}
                                footer_left={certification.dates}
                                reverse={index % 2 === 0}
                                asRedirect={true}
                                height="300px"
                            />
                        ))}
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
};
