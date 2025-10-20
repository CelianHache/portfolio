import { Box, Heading, VStack } from "@chakra-ui/react";
import { ImageCard } from "../containers/ImageCard";
const experiences = [
    {
        company: "Collins Aerospace",
        role: "Apprentice Software Engineer",
        src: "./Apprenticeship/collins_aerospace.png",
        dates: "2024 - now",
        description:
            "Design and implementation of scalable, efficient software systems. System architecture and resolution of complex engineering problems. Collaboration with cross-functional teams to deliver features. Writing of clean, maintainable code and ensuring software quality.",
    },
    {
        company: "Collins Aerospace",
        role: "Apprentice Software Developer",
        src: "./Apprenticeship/collins_aerospace.png",
        dates: "2023 - 2024",
        description:
            "Responsibility for building responsive, user-friendly web applications using React and TypeScript. Collaboration with UI/UX teams for design integration. Integration of front-end components with back-end services. Optimization of application performance and ensuring cross-browser compatibility.",
    },
];

export const Apprenticeship: React.FC = () => {
    return (
        <Box spaceY={5}>
            {/* Titre principal */}
            <Heading
                textAlign={"left"}
                size={"xl"}
                fontWeight={"semibold"}
                fontFamily={"Poppins"}
                textTransform={"uppercase"}
            >
                Apprenticeship
            </Heading>

            <VStack align="stretch" spaceY={5}>
                {experiences.map((exp, index) => (
                    <ImageCard
                        title={exp.role}
                        content={exp.description}
                        src={exp.src}
                        key={index}
                        footer_left={exp.company}
                        footer_right={exp.dates}
                        reverse={index % 2 === 0}
                    />
                ))}
            </VStack>
        </Box>
    );
};
