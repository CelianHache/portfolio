import { HStack, Text } from "@chakra-ui/react";
import { SocialNetworks } from "../socials/SocialNetworks";

export const FooterSummary: React.FC = () => {
    return (
        <HStack color={"white"} w={"100%"} justifyContent={"start"}>
            <Text fontSize={"xs"}>Copyright © 2024 - All rights reserved</Text>
            <SocialNetworks
                alignItems="end"
                classicTheme="white"
                dark
                email="celian.hache@gmail.com"
                linkedin="https://www.linkedin.com/in/c%C3%A9lian-hache-2189a626a/"
                github="https://github.com/CelianHache"
            />
        </HStack>
    );
};
