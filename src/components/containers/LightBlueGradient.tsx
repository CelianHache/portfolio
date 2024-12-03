import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const LightBlueGradient: React.FC<PropsWithChildren<any>> = (props) => {
    return (
        <Box
            {...props}
            bgGradient={"to-br"}
            gradientFrom={"white"}
            gradientTo={"blue.50"}
            rounded={"md"}
            shadow={"sm"}
        >
            {props.children}
        </Box>
    );
};
