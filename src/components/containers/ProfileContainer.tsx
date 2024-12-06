import { Box, Card, CardFooter, Text, VStack } from "@chakra-ui/react";
import { SocialNetworks, SocialNetworksProps } from "../socials/SocialNetworks";
import { CVSection, CVSectionProps } from "../cv/CVSection";
import { RetryImage } from "./RetryImage";

interface ProfileContainerProps extends CVSectionProps, SocialNetworksProps {
    name: string;
    src?: string;
    description: string;
}

export const ProfileContainer: React.FC<ProfileContainerProps> = (props) => {
    return (
        <Card.Root
            bgGradient={"to-br"}
            gradientFrom={"white"}
            gradientTo={"blue.50"}
            minW={{ base: "100%", lg: "80%", xl: "300px" }}
            flex={1}
            rounded={"lg"}
            border={"none"}
            shadow={"sm"}
            position={{ base: "initial", xl: "sticky" }}
            top={24}
        >
            <Card.Title
                fontFamily={"Poppins"}
                fontSize={"2xl"}
                fontWeight={"semi-bold"}
                textAlign={"center"}
                color={"gray.900"}
                pt={10}
            >
                {props.name}
            </Card.Title>
            <Card.Body>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    display={"flex"}
                    w={"100%"}
                    h={"100%"}
                    flexDir={"column"}
                    gap={5}
                >
                    <RetryImage
                        objectFit="cover"
                        src={
                            props.src
                                ? `${import.meta.env.BASE_URL}/${props.src}`
                                : undefined
                        }
                        alt="Profile picture"
                        bgColor={"white"}
                        rounded={"50%"}
                        boxSize="250px"
                        p={2}
                        shadow={"xs"}
                        hidden={props.src === undefined}
                    />
                    <Text
                        color={"gray.900"}
                        textAlign={"center"}
                        fontWeight="semibold"
                    >
                        {props.description}
                    </Text>
                </Box>
            </Card.Body>
            <CardFooter>
                <VStack w={"100%"}>
                    <SocialNetworks
                        alignItems="center"
                        email={props.email}
                        linkedin={props.linkedin}
                        github={props.github}
                    />
                    <CVSection cv_en={props.cv_en} cv_fr={props.cv_fr} />
                </VStack>
            </CardFooter>
        </Card.Root>
    );
};
