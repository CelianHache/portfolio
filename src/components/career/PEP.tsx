import { Box, Grid, Heading } from "@chakra-ui/react";
import { MotionContainer } from "../containers/MotionContainer";
import { YoutubePlayer } from "./YoutubePlayer";
import { ProfileContainer } from "../containers/ProfileContainer";

export const PEP: React.FC = () => {
    const mentors: Array<any> = [
        {
            name: "Olivier Lafourcade",
            description:
                "Senior Software Engineer at Collins Aerospace. DevSecOps and tools.",
            linkedin: "https://www.linkedin.com/in/olafourcade/",
        },
        {
            name: "Anthony Deniau",
            description:
                "Software Engineer at Collins Aerospace + Freelance developer.",
            linkedin: "https://www.linkedin.com/in/anthonydeniau/",
        },
        {
            name: "Mathieu Dingudart",
            description: "iOS Developer subcontractor at Collins Aerospace.",
            linkedin: "https://www.linkedin.com/in/mathieu-dinguidart/",
        },
    ];

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
                Professional evolution plan
            </Heading>
            <MotionContainer
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                p={5}
                pb={10}
            >
                <Heading
                    textAlign={"left"}
                    color={"gray.800"}
                    size={"md"}
                    fontFamily={"Poppins"}
                    w={"100%"}
                    p={5}
                >
                    Elevator pitch
                </Heading>
                <YoutubePlayer />
            </MotionContainer>
            <MotionContainer
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                p={5}
                pb={10}
            >
                <Heading
                    textAlign={"left"}
                    color={"gray.800"}
                    size={"md"}
                    fontFamily={"Poppins"}
                    w={"100%"}
                    p={5}
                >
                    References
                </Heading>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        xl: "repeat(3, 1fr)",
                    }}
                    gap={6}
                    width={"100%"}
                >
                    {mentors.map((mentor, index) => (
                        <ProfileContainer
                            key={index}
                            name={mentor.name}
                            description={mentor.description}
                            src={mentor.src}
                            alignItems="center"
                            linkedin={mentor.linkedin}
                        />
                    ))}
                </Grid>
            </MotionContainer>
        </Box>
    );
};
