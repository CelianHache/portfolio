import { HStack, Text } from "@chakra-ui/react";
import { SocialNetworks } from "../socials/SocialNetworks";

export const FooterSummary: React.FC = () => {
    return (
        <HStack color={"white"} w={"100%"} justifyContent={"start"}>
            <Text>Copyright © 2024 - All rights reserved</Text>
            <SocialNetworks alignItems="end" classicTheme="white" />
        </HStack>
    );
};
