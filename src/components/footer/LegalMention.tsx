import { Heading, Table, Text, VStack } from "@chakra-ui/react";
import { LightBlueGradient } from "../containers/LightBlueGradient";
import { NavLink } from "react-router-dom";
import { RetryImage } from "../containers/RetryImage";

export const LegalMention: React.FC = () => {
    const images = [
        {
            source: "https://unsplash.com/fr/photos/quatre-personnes-toutes-sur-des-ordinateurs-portables-deux-hommes-et-deux-femmes-ecoutent-une-personne-parler-lors-dune-reunion-du-conseil-dadministration-ZT5v0puBjZI",
            loc: "./career.jpg",
        },
        {
            source: "https://unsplash.com/fr/photos/personne-tenant-du-papier-blanc-pour-imprimante-WDCE0T4khsE",
            loc: "./engineering.jpg",
        },
        {
            source: "https://unsplash.com/fr/photos/avion-de-ligne-blanc-71j7r7u2wYE",
            loc: "./mobility.jpg",
        },
        {
            source: "https://unsplash.com/fr/photos/moulins-a-vent-sur-un-champ-vert-sous-un-ciel-blanc-pendant-la-journee-eIBTh5DXW9w",
            loc: "./sustainability.jpg",
        },
        {
            source: "",
            loc: "./activities.jpg",
        },
    ];
    return (
        <VStack gap={5} w={"100%"} textAlign={"left"}>
            <LightBlueGradient p={5} w={"100%"}>
                <Heading size={"3xl"}>Legal mention</Heading>
            </LightBlueGradient>
            <LightBlueGradient p={5} w={"100%"}>
                <Heading size={"lg"}>1. Legal informations</Heading>
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
            </LightBlueGradient>

            <LightBlueGradient p={5} w={"100%"}>
                <Heading size={"lg"}>2. Intellectual property</Heading>
                <Text>
                    The content of this website (texts, images, videos) is
                    protected by copyright. Any reproduction or distribution is
                    strictly prohibited without prior written consent.
                </Text>
            </LightBlueGradient>
            <LightBlueGradient p={5} w={"100%"}>
                <Heading size={"lg"}>3. Image credits</Heading>
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
                                Source
                            </Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {images.map((image, index) => (
                            <Table.Row key={index} bgColor={"transparent"}>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>
                                    <RetryImage
                                        src={image.loc}
                                        maxBlockSize={"100px"}
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <NavLink
                                        to={image.source}
                                        hidden={image.source === ""}
                                    >
                                        <Text
                                            color={"blue.600"}
                                            _hover={{ color: "blue.400" }}
                                        >
                                            Unsplash
                                        </Text>
                                    </NavLink>
                                    <Text hidden={image.source !== ""}>
                                        Célian Hache
                                    </Text>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </LightBlueGradient>
            <LightBlueGradient p={5} w={"100%"}>
                <Heading size={"lg"}>4. Hosting</Heading>
                <Text>This website is hosted by GitHub Pages.</Text>

                <NavLink to={"https://celianhache.github.io/portfolio"}>
                    <Text color={"blue.600"} _hover={{ color: "blue.400" }}>
                        https://celianhache.github.io/portfolio/
                    </Text>
                </NavLink>
            </LightBlueGradient>
        </VStack>
    );
};
