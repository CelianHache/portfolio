import React from "react";
import {
    BlockquoteContent,
    BlockquoteRoot,
    Box,
    Heading,
} from "@chakra-ui/react";
import { MotionContainer } from "./containers/MotionContainer";
import { ImageCard } from "./containers/ImageCard";
import { ProfileContainer } from "./containers/ProfileContainer";
import { YoutubePlayer } from "./career/YoutubePlayer";

const HomePage: React.FC = () => {
    const pages = [
        {
            content:
                "Showcase of technical and creative projects, prototypes, and practical applications developed during the courses.",
            src: "./Tabs/engineering.jpg",
            title: "Engineering courses",
            to: "/engineering",
        },
        {
            content:
                "Overview of international mobility options, including PCE and second language coursess",
            src: "./Tabs/mobility.jpg",
            title: "International mobility",
            to: "/mobility",
        },
        {
            content:
                "Projects and initiatives focused on sustainability and civic responsibility.",
            src: "./Tabs/sustainability.jpg",
            title: "Sustainability and civic engagement",
            to: "/sustainability",
        },
        {
            content: "Explore sports, arts, and extracurricular activities.",
            src: "./Tabs/activities.jpg",
            title: "Sport and other activities",
            to: "/activities",
        },
        {
            content:
                "Resources and opportunities for professional growth and career planning.",
            src: "./Tabs/career.jpg",
            title: "Career development",
            to: "/career",
        },
    ];
    return (
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
            <Box
                w={{ base: "100%", lg: "80%" }}
                position={"relative"}
                alignItems={{ base: "center", xl: "start" }}
                display={"flex"}
                flexDir={{ base: "column", xl: "row" }}
                gap={5}
            >
                <ProfileContainer
                    description="Apprentice Software Engineer at ENSEEIHT and Collins Aerospace"
                    name="Célian Hache"
                    src="profile.png"
                    alignItems="center"
                    cv_fr="./cv/CV_fr.jpg"
                    cv_en="./cv/CV_en.jpg"
                    email="celian.hache@gmail.com"
                    linkedin="https://www.linkedin.com/in/c%C3%A9lian-hache-2189a626a/"
                    github="https://github.com/CelianHache"
                />
                <Box
                    flex={3}
                    spaceY={5}
                    w={{ base: "100%", lg: "80%", xl: "auto" }}
                >
                    <MotionContainer p={5}>
                        <BlockquoteRoot>
                            <BlockquoteContent textAlign={"justify"}>
                                I am a computer science student at ENSEEIHT in
                                Toulouse, with a solid foundation from the MPSI
                                preparatory program and a specialization in
                                computer science from Blagnac IUT. As a Software
                                Engineering Apprentice at Collins Aerospace, I
                                gained hands-on experience in tool development
                                and DevSecOps practices.
                            </BlockquoteContent>
                        </BlockquoteRoot>
                    </MotionContainer>
                    {pages.map((page, index) => (
                        <ImageCard
                            key={index}
                            content={page.content}
                            src={page.src}
                            title={page.title}
                            to={page.to}
                            reverse={index % 2 === 0}
                        />
                    ))}
                    <MotionContainer
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flexDir={"column"}
                        p={5}
                    >
                        <Heading
                            textAlign={"left"}
                            color={"gray.800"}
                            size={"md"}
                            fontFamily={"Poppins"}
                            w={"100%"}
                            p={5}
                        >
                            Elevator pitch
                        </Heading>
                        <YoutubePlayer />
                    </MotionContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
