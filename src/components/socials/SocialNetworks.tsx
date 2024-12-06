import { HStack, IconButton } from "@chakra-ui/react";
import { AtSign, Github } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export interface SocialNetworksProps {
    classicTheme?: "white" | "gray.900";
    dark?: boolean;
    alignItems: "center" | "end" | "start";
    linkedin?: string;
    email?: string;
    github?: string;
}

export const SocialNetworks: React.FC<SocialNetworksProps> = (props) => {
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
                hidden={props.email === undefined}
            >
                <Link to={`mailto:${props.email}`} target="_blank">
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
                hidden={props.linkedin === undefined}
            >
                <Link to={props.linkedin || ""} target="_blank">
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
                hidden={props.github === undefined}
            >
                <Link to={props.github || ""} target="_blank">
                    <Github />
                </Link>
            </IconButton>
        </HStack>
    );
};
