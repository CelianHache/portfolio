import { VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <VStack color={"white"} w={"100%"}>
            <NavLink to="/legal_mention" color="white">
                Legal Mention
            </NavLink>

            {/* <NavLink to="/terms_of_use" color="white">
                Terms of use
            </NavLink> */}
        </VStack>
    );
};
