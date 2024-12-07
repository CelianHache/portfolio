import { Box, Heading } from "@chakra-ui/react";
import { ImageCard } from "../containers/ImageCard";

export const Activities: React.FC = () => {
    const activities = [
        {
            title: "Football",
            src: "./Activities/football.jpg",
            content:
                "A game of strategy and discipline. Team spirit on the field.",
        },
        {
            title: "Photography",
            src: "./Activities/photography.jpg",
            content: "Capturing moments. A focus on creativity and light.",
        },
        {
            title: "Video Games",
            src: "./Activities/video_games.jpg",
            content:
                "Immersion in virtual worlds. Challenges and achievements.",
        },
        {
            title: "Drone",
            src: "./Activities/drone.jpg",
            content:
                "Aerial views and exploration. New perspectives from above.",
        },
    ];

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
                    Sport and other activities
                </Heading>
                {activities.map((activity, index) => (
                    <ImageCard
                        key={index}
                        src={activity.src}
                        title={activity.title}
                        content={activity.content}
                        reverse={index % 2 === 0}
                    />
                ))}
            </Box>
        </Box>
    );
};
