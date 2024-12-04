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

interface Production {
    title: string;
    descriptions: string[];
    imageUrl: string;
    teamSize: number;
    duration: string;
    year: number;
    technologies: string[];
    roles: string[];
}

const productions: Production[] = [];

export const Productions = () => {
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
                Productions
            </Heading>
            <Text>Work in progress...</Text>
            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                }}
                gap={6}
            >
                {productions.map((production, index) => (
                    <MotionContainer
                        key={index}
                        borderRadius="lg"
                        overflow="hidden"
                        shadow="sm"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${
                                production.imageUrl
                            }`}
                            alt={production.title}
                            w="100%"
                            h={"280px"}
                            objectFit="cover"
                        />
                        <VStack align="start" p={4} gap={3}>
                            <Text fontWeight="bold" fontSize="xl">
                                {production.title}
                            </Text>
                            <Box>
                                {production.descriptions.map(
                                    (text, textIndex) => (
                                        <Text
                                            fontSize="sm"
                                            color="gray.600"
                                            textAlign="justify"
                                            key={textIndex}
                                        >
                                            {text}
                                        </Text>
                                    )
                                )}
                            </Box>
                            <Badge bgColor={"purple.700"}>
                                {production.teamSize} people
                            </Badge>
                            <Text fontSize="sm" color="gray.500">
                                Duration: {production.duration}
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                Year: {production.year}
                            </Text>
                            <HStack gap={2} mt={2}>
                                {production.technologies.map(
                                    (tech, techIndex) => (
                                        <TagRoot
                                            key={techIndex}
                                            bgColor={"gray.700"}
                                        >
                                            <TagLabel>{tech}</TagLabel>
                                        </TagRoot>
                                    )
                                )}
                            </HStack>
                            <HStack gap={2} mt={2}>
                                {production.roles.map((role, roleIndex) => (
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
