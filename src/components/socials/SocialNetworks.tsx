import { HStack, IconButton } from "@chakra-ui/react";
import { AtSign, Github, GithubIcon } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

interface SocialNetworks {
    classicTheme?: "white" | "gray.900";
    dark?: boolean;
    alignItems: "center" | "end" | "start";
}

export const SocialNetworks: React.FC<SocialNetworks> = (props) => {
    return (
        <HStack justifyContent={props.alignItems} flex={1}>
            <IconButton
                asChild
                bgColor={"transparent"}
                color={props.classicTheme ? props.classicTheme : "red.500"}
                _hover={{
                    bgColor: "red.500",
                    color: "white",
                }}
                rounded={"50%"}
            >
                <Link to="mailto:celian.hache@gmail.com" target="_blank">
                    <AtSign />
                </Link>
            </IconButton>
            <IconButton
                asChild
                bgColor={"transparent"}
                color={props.classicTheme ? props.classicTheme : "blue.500"}
                _hover={{
                    bgColor: "blue.500",
                    color: "white",
                }}
                rounded={"50%"}
            >
                <Link
                    to="https://www.linkedin.com/in/c%C3%A9lian-hache-2189a626a/"
                    target="_blank"
                >
                    <BsLinkedin />
                </Link>
            </IconButton>
            <IconButton
                asChild
                bgColor={"transparent"}
                color={props.classicTheme ? props.classicTheme : "gray.900"}
                _hover={{
                    bgColor: props.dark ? "white" : "gray.900",
                    color: props.dark ? "gray.900" : "white",
                }}
                rounded={"50%"}
            >
                <Link to="https://github.com/CelianHache" target="_blank">
                    <Github />
                </Link>
            </IconButton>
        </HStack>
    );
};
