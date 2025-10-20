import React from "react";
import {
    DrawerRoot,
    Flex,
    Heading,
    IconButton,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

export const DrawerNavbar: React.FC = () => {
    const {
        open: openDrawer,
        onOpen: onOpenDrawer,
        onClose: onCloseDrawer,
    } = useDisclosure();

    return (
        <Flex gap={10} justifyContent="flex-end" flex={1}>
            <DrawerRoot open={openDrawer} onInteractOutside={onCloseDrawer}>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <IconButton
                        variant={"outline"}
                        border={"none"}
                        bgColor={"transparent"}
                        color={"gray.900"}
                        onClick={onOpenDrawer}
                    >
                        <Menu />
                    </IconButton>
                </DrawerTrigger>
                <DrawerContent offset={1} rounded={"md"} bgColor={"gray.800"}>
                    <DrawerCloseTrigger onClick={onCloseDrawer} />
                    <DrawerHeader>
                        <DrawerTitle fontSize={"xl"} color={"white"}>
                            Portfolio.
                        </DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack gap={6} align="start">
                            <NavLink
                                to="/"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"md"}
                                >
                                    Welcome
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/engineering"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"md"}
                                >
                                    Engineering courses
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/engineering/projects"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    Projects
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/engineering/productions"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    Productions
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/mobility"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"md"}
                                >
                                    International mobility
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/mobility/pce"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    PCE
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/mobility/lv2"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    LV2
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/sustainability"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"md"}>
                                    Sustainability and civic engagement
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"md"}
                                >
                                    Career development
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career/apprenticeship"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    Apprenticeship
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career/pep"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline white"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    color={"white"}
                                    size={"sm"}
                                >
                                    PEP
                                </Heading>
                            </NavLink>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter />
                </DrawerContent>
            </DrawerRoot>
        </Flex>
    );
};
