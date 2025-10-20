import {
    Box,
    Flex,
    HoverCard,
} from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export const InlineNavbar: React.FC = () => {
    return (
        <Flex px={10} gap={10} justifyContent="flex-end" alignItems={"center"} flex={1}>

            <NavLink to="/" label="Welcome" />
            <Box position={"relative"}>
                <HoverCard.Root
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCard.Trigger asChild>
                        <NavLink
                            to="/engineering"
                            label="Engineering courses"
                        />
                    </HoverCard.Trigger>
                    <HoverCard.Content
                        width="100%"
                        bgColor={"white"}
                        backdropBlur={"5000px"}
                        p={5}
                        mt={2}
                        borderRadius="md"
                        position="absolute"
                        zIndex={10}
                        boxShadow="sm"
                    >
                        <NavLink
                            to="/engineering/projects"
                            label="Projects"
                        />
                        <NavLink
                            to="/engineering/productions"
                            label="Productions"
                        />
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
            <Box position={"relative"}>
                <HoverCard.Root
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCard.Trigger asChild>
                        <NavLink
                            to="/mobility"
                            label="International mobility"
                        />
                    </HoverCard.Trigger>
                    <HoverCard.Content
                        width="100%"
                        bgColor={"white"}
                        backdropBlur={"5000px"}
                        p={5}
                        mt={2}
                        borderRadius="md"
                        position="absolute"
                        zIndex={10}
                        boxShadow="sm"
                    >
                        <NavLink
                            to="/mobility/pce"
                            label="PCE"
                        />
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
            <NavLink
                to="/sustainability"
                label="Sustainability and civic engagement"
            />
            <NavLink
                to="/activities"
                label="Sport and other activities"
            />
            <Box position={"relative"}>
                <HoverCard.Root
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCard.Trigger asChild>
                        <NavLink
                            to="/career"
                            label="Career development"
                        />
                    </HoverCard.Trigger>
                    <HoverCard.Content
                        width="100%"
                        bgColor={"white"}
                        backdropBlur={"5000px"}
                        p={5}
                        mt={2}
                        borderRadius="md"
                        position="absolute"
                        zIndex={10}
                        boxShadow="sm"
                    >


                        <NavLink
                            to="/career/apprenticeship"
                            label="Apprenticeship"
                        />
                        <NavLink
                            to="/career/pep"
                            label="PEP"
                        />
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
        </Flex>
    );
};
