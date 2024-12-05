import { Box, Card, CardFooter, Heading, Text, VStack } from "@chakra-ui/react";
import { SocialNetworks } from "../socials/SocialNetworks";
import { CVSection } from "../cv/CVSection";
import { RetryImage } from "./RetryImage";

export const ProfileContainer: React.FC = () => {
    return (
        <Card.Root
            bgGradient={"to-br"}
            gradientFrom={"white"}
            gradientTo={"blue.50"}
            minW={{ base: "100%", lg: "80%", xl: "500px" }}
            flex={1}
            rounded={"lg"}
            border={"none"}
            shadow={"sm"}
            position={{ base: "initial", xl: "sticky" }}
            top={24}
        >
            <Card.Title>
                <Heading
                    fontFamily={"Poppins"}
                    fontSize={"2xl"}
                    fontWeight={"semi-bold"}
                    textAlign={"center"}
                    color={"gray.900"}
                    pt={10}
                >
                    Célian Hache
                </Heading>
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
                        src={`${import.meta.env.BASE_URL}/profile.png`}
                        alt="Profile picture"
                        bgColor={"white"}
                        rounded={"50%"}
                        boxSize="250px"
                        p={2}
                        shadow={"xs"}
                    />
                    <Text
                        color={"gray.900"}
                        textAlign={"center"}
                        fontWeight="semibold"
                    >
                        Software Engineer Apprentice at ENSEEIHT and Collins
                        Aerospace
                    </Text>
                </Box>
            </Card.Body>
            <CardFooter>
                <VStack w={"100%"}>
                    <SocialNetworks alignItems="center" />
                    <CVSection />
                </VStack>
            </CardFooter>
        </Card.Root>
    );
};
