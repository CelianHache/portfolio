import React from "react";
import { Heading, HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
import { InlineNavbar } from "./InlineNavbar";
import { DrawerNavbar } from "./DrawerNavbar";

const Navbar: React.FC = () => {
    const showDrawer = useBreakpointValue({ base: true, xl: false });

    return (
        <VStack alignItems={"center"}>
            <HStack w={"100%"}>
                <Heading size={"3xl"}>Portfolio.</Heading>
                {showDrawer ? <DrawerNavbar /> : <InlineNavbar />}
            </HStack>
        </VStack>
    );
};

export default Navbar;
