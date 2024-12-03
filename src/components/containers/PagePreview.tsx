import { AspectRatio, Box, Card, Image } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { LightBlueGradient } from "./LightBlueGradient";
import { Button } from "../ui/button";

interface PagePreviewProps {
    title: string;
    src: string;
    content: string;
    to: string;
    reverse?: boolean;
}

export const PagePreview: React.FC<PropsWithChildren<PagePreviewProps>> = (
    props
) => {
    return (
        <LightBlueGradient>
            <Card.Root
                flexDirection="row"
                overflow="hidden"
                bgColor={"inherit"}
                border={"none"}
                color={"gray.900"}
            >
                <AspectRatio
                    w={"300px"}
                    maxW="30%"
                    ratio={16 / 9}
                    hidden={props.reverse}
                >
                    <Image objectFit="cover" src={props.src} alt={props.src} />
                </AspectRatio>
                <Box
                    p={5}
                    flex={1}
                    display={"flex"}
                    flexDir={"column"}
                    alignItems={"center"}
                >
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Body>{props.content}</Card.Body>
                    <Card.Footer>
                        <Button
                            asChild
                            bgColor={"blue.700"}
                            color={"white"}
                            _hover={{ bgColor: "blue.500" }}
                        >
                            <NavLink to={props.to}>Visit page</NavLink>
                        </Button>
                    </Card.Footer>
                </Box>
                <AspectRatio
                    w={"300px"}
                    maxW="30%"
                    ratio={16 / 9}
                    hidden={!props.reverse}
                >
                    <Image objectFit="cover" src={props.src} alt={props.src} />
                </AspectRatio>
            </Card.Root>
        </LightBlueGradient>
    );
};
