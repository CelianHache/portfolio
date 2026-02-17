import { Badge, Box, Card, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { MotionContainer } from "./MotionContainer";
import { Button } from "../ui/button";
import { RetryImage } from "./RetryImage";
import { Clock, Building2, Calendar } from "lucide-react";

interface ImageCardProps {
    title: string;
    src: string;
    content?: string;
    organization?: string;
    dates?: string;
    to?: string;
    reverse?: boolean;
    navLabel?: string;
    asRedirect?: boolean;
    height?: string;
    duration: number;
}

const formatDuration = (hours: number): string => {
    if (hours < 1) return `${Math.round(hours * 60)} min`;
    if (hours === 1) return "1 hour";
    return `${hours} hours`;
};

export const EngagementImageCard: React.FC<PropsWithChildren<ImageCardProps>> = (props) => {
    const flexDir = useBreakpointValue({ base: "column", sm: "row" });

    return (
        <MotionContainer>
            <Card.Root
                display="flex"
                flexDirection={flexDir}
                overflow="hidden"
                bgColor="white"
                border="0px solid"
                color="gray.900"
                alignItems="stretch"
                h={props.height ? props.height : "auto"}
                transition="all 0.2s ease-in-out"
            >
                {/* Image gauche / haut */}
                {(flexDir === "column" || !props.reverse) && (
                    <Box
                        flexShrink={0}
                        maxW={{ base: "100%", sm: "45%" }}
                        overflow="hidden"
                        alignSelf="stretch"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${props.src}`}
                            alt={props.src}
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>
                )}

                {/* Contenu de la carte */}
                <Box
                    p={6}
                    flex={1}
                    display="flex"
                    flexDir="column"
                    justifyContent="space-between"
                >
                    <Box>
                        <Card.Title
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                            mb={3}
                        >
                            {props.title}
                        </Card.Title>

                        <HStack gap={4} mb={4} flexWrap="wrap">
                            {props.organization && (
                                <HStack gap={1} color="gray.600" fontSize="sm">
                                    <Building2 size={16} />
                                    <Text fontWeight="medium">{props.organization}</Text>
                                </HStack>
                            )}
                            {props.dates && (
                                <HStack gap={1} color="gray.600" fontSize="sm">
                                    <Calendar size={16} />
                                    <Text>{props.dates}</Text>
                                </HStack>
                            )}
                            <Badge
                                bg="blue.600"
                                color="white"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="sm"
                                fontWeight="semibold"
                                display="flex"
                                alignItems="center"
                                gap={1}
                            >
                                <Clock size={14} />
                                {formatDuration(props.duration)}
                            </Badge>
                        </HStack>

                        <Card.Body
                            hidden={props.content === undefined}
                            p={0}
                            color="gray.700"
                            lineHeight="tall"
                            textAlign="justify"
                        >
                            {props.content}
                        </Card.Body>
                    </Box>

                    <Card.Footer pt={4} px={0} pb={0}>
                        <Box w="100%" display="flex" justifyContent="center">
                            <Button
                                asChild
                                bgColor="blue.600"
                                color="white"
                                px={6}
                                borderRadius="lg"
                                fontWeight="semibold"
                                _hover={{ bgColor: "blue.500", transform: "scale(1.02)" }}
                                transition="all 0.2s"
                                hidden={props.to === undefined}
                            >
                                {props.asRedirect ? (
                                    <a
                                        href={props.to ?? ""}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {props.navLabel ?? "Visit page"}
                                    </a>
                                ) : (
                                    <NavLink to={props.to ?? ""}>
                                        {props.navLabel ?? "Visit page"}
                                    </NavLink>
                                )}
                            </Button>
                        </Box>
                    </Card.Footer>
                </Box>

                {/* Image droite / bas */}
                {flexDir === "row" && props.reverse && (
                    <Box
                        flexShrink={0}
                        maxW={{ base: "100%", sm: "45%" }}
                        overflow="hidden"
                        alignSelf="stretch"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${props.src}`}
                            alt={props.src}
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>
                )}
            </Card.Root>
        </MotionContainer>
    );
};
