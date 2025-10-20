import { Heading } from "@chakra-ui/react";
import { NavLink as ReactNavLink, useLocation } from "react-router-dom";
import React from "react";

interface NavLinkProps {
    to: string;
    label: string;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ to, label, ...props }, ref) => {
        const location = useLocation();
        const isActive =
            location.pathname === to || location.pathname.startsWith(`${to}/`);

        return (
            <ReactNavLink to={to} ref={ref} {...props}>
                <Heading
                    _hover={{ color: "blue.500" }}
                    fontWeight={isActive ? "bolder" : "inherit"}
                    size="md"
                >
                    {label}
                </Heading>
            </ReactNavLink>
        );
    }
);

NavLink.displayName = "NavLink";
