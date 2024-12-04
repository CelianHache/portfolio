import {
    Grid,
    Text,
    Badge,
    VStack,
    HStack,
    TagRoot,
    TagLabel,
    Heading,
    Box,
} from "@chakra-ui/react";
import { MotionContainer } from "../containers/MotionContainer";
import { RetryImage } from "../containers/RetryImage";

interface Project {
    title: string;
    descriptions: string[];
    imageUrl: string;
    teamSize: number;
    duration: string;
    year: number;
    technologies: string[];
    roles: string[];
}

const projects: Project[] = [
    {
        title: "Air Conditioner Control App",
        descriptions: [
            "Development of a modern application to manage and monitor a connected air conditioner, ensuring user comfort and energy efficiency.",
            "- Real-time indoor and outdoor temperature display.",
            "- Tracking of power consumption with insightful analytics.",
            "- Remote control features for adjusting temperature and modes.",
        ],
        imageUrl: "./Projects/air_conditioner.jpg",
        teamSize: 4,
        duration: "1 month",
        year: 2023,
        technologies: ["React Native", "Python", "MQTT"],
        roles: ["Developer", "Product Owner"],
    },
    {
        title: "Bank Management System",
        descriptions: [
            "Development of a desktop application for managing a bank's operations. The system supports CRUD operations for branches, accounts, clients, and employees.",
            "The app features a user-friendly interface and ensures data consistency and security.",
            "- Handle customer accounts and transactions.",
            "- Employee management and role assignments.",
        ],
        imageUrl: "./Projects/banking_app.jpg",
        teamSize: 3,
        duration: "1 month",
        year: 2023,
        technologies: ["Java", "JavaFX", "SQL"],
        roles: ["Developer"],
    },
];

export const Projects = () => {
    return (
        <Box spaceY={5}>
            <Heading
                textAlign={"left"}
                color={"gray.800"}
                size={"xl"}
                fontWeight={"semi-bold"}
                letterSpacing={"wider"}
                textTransform={"uppercase"}
            >
                Projects
            </Heading>
            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                gap={5}
            >
                {projects.map((project, index) => (
                    <MotionContainer
                        key={index}
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="sm"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${
                                project.imageUrl
                            }`}
                            alt={project.title}
                            w="100%"
                            h={"280px"}
                            objectFit="cover"
                        />
                        <VStack align="start" p={4} gap={3}>
                            <Text fontWeight="bold" fontSize="xl">
                                {project.title}
                            </Text>
                            <Box>
                                {project.descriptions.map((text, textIndex) => (
                                    <Text
                                        fontSize="sm"
                                        color="gray.600"
                                        textAlign="justify"
                                        key={textIndex}
                                    >
                                        {text}
                                    </Text>
                                ))}
                            </Box>
                            <Badge bgColor={"purple.700"}>
                                {project.teamSize} people
                            </Badge>
                            <Text fontSize="sm" color="gray.500">
                                Duration: {project.duration}
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                Year: {project.year}
                            </Text>
                            <HStack gap={2} mt={2}>
                                {project.technologies.map((tech, techIndex) => (
                                    <TagRoot
                                        key={techIndex}
                                        bgColor={"gray.700"}
                                    >
                                        <TagLabel>{tech}</TagLabel>
                                    </TagRoot>
                                ))}
                            </HStack>
                            <HStack gap={2} mt={2}>
                                {project.roles.map((role, roleIndex) => (
                                    <TagRoot
                                        key={roleIndex}
                                        bgColor={"blue.700"}
                                    >
                                        <TagLabel>{role}</TagLabel>
                                    </TagRoot>
                                ))}
                            </HStack>
                        </VStack>
                    </MotionContainer>
                ))}
            </Grid>
        </Box>
    );
};
