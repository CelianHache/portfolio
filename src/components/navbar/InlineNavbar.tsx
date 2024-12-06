import {
    Box,
    Flex,
    Heading,
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
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
                <HoverCardRoot
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCardTrigger asChild>
                        <NavLink
                            to="/engineering"
                            onClick={() => {}}
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            <Heading _hover={{ color: "blue.500" }} size={"md"}>
                                Engineering courses
                            </Heading>
                        </NavLink>
                    </HoverCardTrigger>
                    <HoverCardContent
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
                        <HoverCardArrow />

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
                    </HoverCardContent>
                </HoverCardRoot>
            </Box>
            <Box position={"relative"}>
                <HoverCardRoot
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCardTrigger asChild>
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
                    </HoverCardTrigger>
                    <HoverCardContent
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
                        <HoverCardArrow />

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
                    </HoverCardContent>
                </HoverCardRoot>
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
                <HoverCardRoot
                    positioning={{ placement: "bottom" }}
                    openDelay={0}
                    closeDelay={100}
                >
                    <HoverCardTrigger asChild>
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
                    </HoverCardTrigger>
                    <HoverCardContent
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
                        <HoverCardArrow />

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
                    </HoverCardContent>
                </HoverCardRoot>
            </Box>
        </Flex>
    );
};
