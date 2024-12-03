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
        <Flex px={10} gap={10} justifyContent="flex-end" flex={1}>
            <DrawerRoot open={openDrawer} onInteractOutside={onCloseDrawer}>
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <IconButton
                        variant={"outline"}
                        border={"none"}
                        backdropBlur={"1000px"}
                        bgColor={"transparent"}
                        color={"gray.900"}
                        onClick={onOpenDrawer}
                    >
                        <Menu />
                    </IconButton>
                </DrawerTrigger>
                <DrawerContent offset={4} rounded={"md"} bgColor={"gray.800"}>
                    <DrawerCloseTrigger onClick={onCloseDrawer} />
                    <DrawerHeader>
                        <DrawerTitle fontSize={"xl"}>Portfolio.</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack gap={6} align="start">
                            <NavLink
                                to="/"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
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
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    size={"md"}
                                >
                                    Engineering course
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/engineering/projects"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
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
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
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
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
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
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
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
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    size={"sm"}
                                >
                                    LV2
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    _hover={{ color: "blue.500" }}
                                    size={"md"}
                                >
                                    Career development
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career/internship"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
                                    size={"sm"}
                                >
                                    Internship
                                </Heading>
                            </NavLink>
                            <NavLink
                                to="/career/pep"
                                onClick={onCloseDrawer}
                                style={({ isActive }) => ({
                                    textDecoration: isActive
                                        ? "underline"
                                        : "none",
                                })}
                            >
                                <Heading
                                    p={3}
                                    _hover={{ color: "blue.500" }}
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
