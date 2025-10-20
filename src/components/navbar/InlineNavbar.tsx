import {
    Box,
    Flex,
    Heading,
    HoverCard,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const InlineNavbar: React.FC = () => {
    return (
        <Flex px={10} gap={10} justifyContent="flex-end" flex={1}>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? "blue.500" : "gray.900",
                    textDecoration: isActive ? "underline" : "none",
                })}
            >
                <Heading _hover={{ color: "blue.500" }} size={"md"}>
                    Welcome
                </Heading>
            </NavLink>
            <Box position={"relative"}>
                <HoverCard.Root
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCard.Trigger asChild>
                        <NavLink
                            to="/engineering"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading _hover={{ color: "blue.500" }} size={"md"}>
                                Engineering courses
                            </Heading>
                        </NavLink>
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
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                textWrap={"nowrap"}
                                wordBreak={""}
                                wordWrap={""}
                                textAlign={"left"}
                            >
                                Projects
                            </Heading>
                        </NavLink>
                        <NavLink
                            to="/engineering/productions"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                textWrap={"nowrap"}
                                wordBreak={""}
                                wordWrap={""}
                                textAlign={"left"}
                            >
                                Productions
                            </Heading>
                        </NavLink>
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
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading _hover={{ color: "blue.500" }} size={"md"}>
                                International mobility
                            </Heading>
                        </NavLink>
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
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                textWrap={"nowrap"}
                                wordBreak={""}
                                wordWrap={""}
                                textAlign={"left"}
                            >
                                PCE
                            </Heading>
                        </NavLink>
                        <NavLink
                            to="/mobility/lv2"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                textWrap={"nowrap"}
                                wordBreak={""}
                                wordWrap={""}
                                textAlign={"left"}
                            >
                                LV2
                            </Heading>
                        </NavLink>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
            <NavLink
                to="/sustainability"
                style={({ isActive }) => ({
                    color: isActive ? "blue.500" : "gray.900",
                    textDecoration: isActive ? "underline" : "none",
                })}
            >
                <Heading _hover={{ color: "blue.500" }} size={"md"}>
                    Sustainability and civic engagement
                </Heading>
            </NavLink>
            <NavLink
                to="/activities"
                style={({ isActive }) => ({
                    color: isActive ? "blue.500" : "gray.900",
                    textDecoration: isActive ? "underline" : "none",
                })}
            >
                <Heading _hover={{ color: "blue.500" }} size={"md"}>
                    Sport and other activities
                </Heading>
            </NavLink>
            <Box position={"relative"}>
                <HoverCard.Root
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCard.Trigger asChild>
                        <NavLink
                            to="/career"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading _hover={{ color: "blue.500" }} size={"md"}>
                                Career development
                            </Heading>
                        </NavLink>
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
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                whiteSpace={"nowrap"}
                                overflow={"hidden"}
                                textOverflow={"ellipsis"}
                                textAlign={"left"}
                            >
                                Apprenticeship
                            </Heading>
                        </NavLink>
                        <NavLink
                            to="/career/pep"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading
                                _hover={{ color: "blue.500" }}
                                size={"sm"}
                                textWrap={"nowrap"}
                                wordBreak={""}
                                wordWrap={""}
                                textAlign={"left"}
                            >
                                PEP
                            </Heading>
                        </NavLink>
                    </HoverCard.Content>
                </HoverCard.Root>
            </Box>
        </Flex>
    );
};
