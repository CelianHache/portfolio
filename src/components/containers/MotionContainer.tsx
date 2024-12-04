import { chakra } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Créez un Box animé avec motion.div
const MotionBox = chakra(motion.div);

export const MotionContainer: React.FC<PropsWithChildren<any>> = (props) => {
    // Créer un ref pour suivre l'élément
    const ref = useRef(null);

    // Utiliser useInView pour savoir si l'élément est visible dans la fenêtre
    const isInView = useInView(ref, { margin: "-50px" });

    return (
        <MotionBox
            ref={ref} // Ajoutez la référence à l'élément pour le suivi de la visibilité
            bgGradient={props.bgColor ? "none" : "to-br"}
            gradientFrom={props.bgColor ? "none" : "white"}
            gradientTo={props.bgColor ? "none" : "blue.50"}
            rounded={"md"}
            shadow={"sm"}
            initial={{ opacity: 0, scale: 0.8 }} // Initialement invisible et légèrement rétréci
            animate={{
                opacity: isInView ? 1 : 0, // Fait apparaître l'élément
                scale: isInView ? 1 : 0.8, // Agrandit l'élément lors de l'apparition
            }}
            transition={{
                opacity: { duration: 1, ease: "easeOut" }, // Animation fluide du fondu
                scale: { duration: 1, ease: "easeOut" }, // Agrandissement fluide
            }}
            {...props}
        >
            {props.children}
        </MotionBox>
    );
};
