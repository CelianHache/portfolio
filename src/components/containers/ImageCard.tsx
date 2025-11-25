import { Box, Card, Text, useBreakpointValue } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { MotionContainer } from "./MotionContainer";
import { Button } from "../ui/button";
import { RetryImage } from "./RetryImage";

interface ImageCardProps {
    title: string;
    src: string;
    content?: string;
    footer_left?: string;
    footer_right?: string;
    to?: string;
    reverse?: boolean;
    navLabel?: string;
    asRedirect?: boolean;
    height?: string;
}

export const ImageCard: React.FC<PropsWithChildren<ImageCardProps>> = (props) => {
    // breakpoint responsive : colonne si < 900px
    const flexDir = useBreakpointValue({ base: "column", sm: "row" });

    return (
        <MotionContainer>
            <Card.Root
                display="flex"
                flexDirection={flexDir}
                overflow="hidden"
                bgColor="inherit"
                border="none"
                color="gray.900"
                alignItems="stretch"
                h={props.height ? props.height : "auto"}
            >
                {/* Image gauche / haut */}
                {(flexDir === "column" || !props.reverse) && (
                    <Box
                        flexShrink={0}
                        maxW={{ base: "100%", sm: "55%" }}
                        overflow="hidden"
                        alignSelf="stretch"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${props.src}`}
                            alt={props.src}
                            style={{
                                height: "100%",
                                width: "auto",
                                display: "block",
                            }}
                        />
                    </Box>
                )}

                {/* Contenu de la carte */}
                <Box
                    p={5}
                    flex={1}
                    display="flex"
                    flexDir="column"
                    justifyContent="space-between"
                    textAlign={"justify"}
                >
                    <Box>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Header
                            w="100%"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Text>{props.footer_left}</Text>
                            <Text>{props.footer_right}</Text>
                        </Card.Header>
                        <Card.Body hidden={props.content === undefined}>
                            {props.content}
                        </Card.Body>
                    </Box>

                    <Card.Footer>
                        <Box w="100%" display="flex" justifyContent="center">
                            <Button
                                asChild
                                bgColor="blue.700"
                                color="white"
                                _hover={{ bgColor: "blue.500" }}
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
                        maxW={{ base: "100%", sm: "55%" }}
                        overflow="hidden"
                        alignSelf="stretch"
                    >
                        <RetryImage
                            src={`${import.meta.env.BASE_URL}${props.src}`}
                            alt={props.src}
                            style={{
                                height: "100%",
                                width: "auto",
                                display: "block",
                            }}
                        />
                    </Box>
                )}
            </Card.Root>
        </MotionContainer>
    );
};
