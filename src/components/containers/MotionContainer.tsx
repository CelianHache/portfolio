import { chakra } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MotionBox = chakra(motion.div);

export const MotionContainer: React.FC<PropsWithChildren<any>> = (props) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <MotionBox
            ref={ref}
            bgGradient={props.bgColor ? "none" : "to-br"}
            gradientFrom={props.bgColor ? "none" : "white"}
            gradientTo={props.bgColor ? "none" : "blue.50"}
            rounded={"md"}
            shadow={"sm"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
            }}
            transition={{
                opacity: { duration: 1, ease: "easeOut" },
                scale: { duration: 1, ease: "easeOut" },
            }}
            {...props}
        >
            {props.children}
        </MotionBox>
    );
};
