import { Box, Heading, Table, Text, VStack } from "@chakra-ui/react";
import { MotionContainer } from "../containers/MotionContainer";
import { NavLink } from "react-router-dom";
import { RetryImage } from "../containers/RetryImage";

export const LegalMention: React.FC = () => {
    const images = [
        {
            source: "https://unsplash.com/fr/photos/quatre-personnes-toutes-sur-des-ordinateurs-portables-deux-hommes-et-deux-femmes-ecoutent-une-personne-parler-lors-dune-reunion-du-conseil-dadministration-ZT5v0puBjZI",
            loc: "./Tabs/career.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "https://unsplash.com/fr/photos/personne-tenant-du-papier-blanc-pour-imprimante-WDCE0T4khsE",
            loc: "./Tabs/engineering.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "https://unsplash.com/fr/photos/avion-de-ligne-blanc-71j7r7u2wYE",
            loc: "./Tabs/mobility.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "https://unsplash.com/fr/photos/moulins-a-vent-sur-un-champ-vert-sous-un-ciel-blanc-pendant-la-journee-eIBTh5DXW9w",
            loc: "./Tabs/sustainability.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "https://unsplash.com/fr/photos/interface-utilisateur-graphique-YO5q_7BN7kQ",
            loc: "./Projects/air_conditioner.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "https://unsplash.com/fr/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU",
            loc: "./Projects/banking_app.jpg",
            licence_link: "https://unsplash.com/fr/licence",
            licence: "Unsplash",
        },
        {
            source: "",
            loc: "./Tabs/activities.jpg",
            licence_link: "",
            licence: "Célian Hache (All rights reserved)",
        },
    ];
    return (
        <VStack gap={5} w={"100%"} textAlign={"left"}>
            <MotionContainer p={5} w={"100%"}>
                <Heading size={"3xl"}>Legal mention</Heading>
            </MotionContainer>
            <MotionContainer p={5} w={"100%"}>
                <Heading size={"lg"}>1. Legal informations</Heading>
                <Box p={5}>
                    <Text>This website is published by Célian Hache.</Text>
                    <Text>Location : 31300 Toulouse (France)</Text>
                    <Text>
                        Contact :{" "}
                        <NavLink
                            color="blue.500"
                            to="mailto:celian.hache@gmail.com"
                        >
                            celian.hache@gmail.com
                        </NavLink>
                    </Text>
                </Box>
            </MotionContainer>
            <MotionContainer p={5} w={"100%"}>
                <Heading size={"lg"}>2. Intellectual property</Heading>
                <Box p={5}>
                    <Text>
                        The content of this website (texts, images, videos) is
                        protected by copyright. Any reproduction or distribution
                        is strictly prohibited without prior written consent.
                    </Text>
                    <Text mt={3}>
                        The background design was inspired by the website of
                        Dylan Latapie.
                    </Text>
                    <NavLink to="https://dylan.latapie.ovh/">
                        <Text color="blue.500">Dylan Latapie's website</Text>
                    </NavLink>
                </Box>
            </MotionContainer>
            <MotionContainer p={5} w={"100%"}>
                <Heading size={"lg"}>3. Image credits</Heading>
                <Box p={5}>
                    <Table.Root>
                        <Table.Header>
                            <Table.Row bgColor={"transparent"}>
                                <Table.ColumnHeader color={"black"}>
                                    Index
                                </Table.ColumnHeader>
                                <Table.ColumnHeader color={"black"}>
                                    Image
                                </Table.ColumnHeader>
                                <Table.ColumnHeader color={"black"}>
                                    License
                                </Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {images.map((image, index) => (
                                <Table.Row key={index} bgColor={"transparent"}>
                                    <Table.Cell>{index + 1}</Table.Cell>
                                    <Table.Cell>
                                        <NavLink
                                            to={image.source}
                                            hidden={image.source === ""}
                                        >
                                            <RetryImage
                                                src={image.loc}
                                                maxBlockSize={"100px"}
                                            />
                                        </NavLink>
                                        {image.source === "" && (
                                            <a href={image.loc} target="_blank">
                                                <RetryImage
                                                    src={image.loc}
                                                    maxBlockSize={"100px"}
                                                />
                                            </a>
                                        )}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <NavLink
                                            hidden={image.licence_link === ""}
                                            to={image.licence_link}
                                        >
                                            <Text
                                                color={"blue.600"}
                                                _hover={{ color: "blue.400" }}
                                            >
                                                {image.licence}
                                            </Text>
                                        </NavLink>
                                        <Text
                                            hidden={image.licence_link !== ""}
                                        >
                                            {image.licence}
                                        </Text>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Root>
                </Box>
            </MotionContainer>
            <MotionContainer p={5} w={"100%"}>
                <Heading size={"lg"}>4. Hosting</Heading>
                <Box p={5}>
                    <Text>This website is hosted by GitHub Pages.</Text>

                    <NavLink to={"https://celianhache.github.io/portfolio"}>
                        <Text color={"blue.600"} _hover={{ color: "blue.400" }}>
                            https://celianhache.github.io/portfolio/
                        </Text>
                    </NavLink>
                </Box>
            </MotionContainer>
        </VStack>
    );
};
