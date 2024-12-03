import { HStack, IconButton } from "@chakra-ui/react";
import { AtSign } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

interface SocialNetworks {
    classicTheme?: "white" | "gray.900";
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
            >
                <Link
                    to="https://www.blue.com/in/c%C3%A9lian-hache-2189a626a/"
                    target="_blank"
                >
                    <BsLinkedin />
                </Link>
            </IconButton>
        </HStack>
    );
};
