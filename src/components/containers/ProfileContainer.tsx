import { Box, Card, CardFooter, Image, Text, VStack } from "@chakra-ui/react";
import { SocialNetworks } from "../socials/SocialNetworks";
import { CVSection } from "../cv/CVSection";

export const ProfileContainer: React.FC = () => {
    return (
        <Card.Root
            bgGradient={"to-br"}
            gradientFrom={"white"}
            gradientTo={"blue.50"}
            minW={{ base: "100%", lg: "80%", xl: "500px" }}
            flex={1}
            p={5}
            rounded={"lg"}
            border={"none"}
            shadow={"sm"}
            position={{ base: "initial", xl: "sticky" }}
            top={24}
        >
            <Card.Title textAlign={"center"} color={"gray.900"}>
                Célian Hache
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
                    <Image
                        src="./profile.png"
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
