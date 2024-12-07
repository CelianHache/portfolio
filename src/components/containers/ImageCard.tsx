import { Box, Card, Text } from "@chakra-ui/react";
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
}

export const ImageCard: React.FC<PropsWithChildren<ImageCardProps>> = (
    props
) => {
    return (
        <MotionContainer>
            <Card.Root
                flexDirection="row"
                overflow="hidden"
                bgColor={"inherit"}
                border={"none"}
                color={"gray.900"}
            >
                {/* Image container */}
                <Box
                    position="relative"
                    width="30%"
                    overflow="hidden"
                    hidden={props.reverse}
                >
                    <RetryImage
                        objectFit="cover"
                        objectPosition={"center"}
                        src={`${import.meta.env.BASE_URL}${props.src}`}
                        alt={props.src}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>

                {/* Card content */}
                <Box
                    p={5}
                    flex={1}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Header
                        w={"100%"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDir={"row"}
                    >
                        <Text>{props.footer_left}</Text>
                        <Text>{props.footer_right}</Text>
                    </Card.Header>
                    <Card.Body hidden={props.content === undefined}>
                        {props.content}
                    </Card.Body>
                    <Card.Footer>
                        <Box w="100%" display="flex" justifyContent="center">
                            <Button
                                asChild
                                bgColor={"blue.700"}
                                color={"white"}
                                _hover={{ bgColor: "blue.500" }}
                                hidden={props.to === undefined}
                            >
                                <NavLink to={props.to ? props.to : ""}>
                                    Visit page
                                </NavLink>
                            </Button>
                        </Box>
                    </Card.Footer>
                </Box>
                {/* Image container */}
                <Box
                    position="relative"
                    width="30%"
                    overflow="hidden"
                    hidden={!props.reverse}
                >
                    <RetryImage
                        objectFit="cover"
                        objectPosition={"center"}
                        src={`${import.meta.env.BASE_URL}${props.src}`}
                        alt={props.src}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>
            </Card.Root>
        </MotionContainer>
    );
};
