import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const generateRandomPosition = () => {
    return {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
    };
};

const generateRandomSize = () => {
    return `${Math.random() * 100 + 200}px`;
};

const generateRandomColor = () => {
    const colors = ["rgba(29, 109, 209, 0.4)", "rgba(88, 74, 208, 0.4)"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const generateRandomAnimation = () => {
    return keyframes`
    0% { transform: translate(0, 0); }
    25% { transform: translate(${Math.random() * 1000 - 500}px, ${
        Math.random() * 1000 - 500
    }px); }
    50% { transform: translate(${Math.random() * 1000 - 500}px, ${
        Math.random() * 1000 - 500
    }px); }
    75% { transform: translate(${Math.random() * 1000 - 500}px, ${
        Math.random() * 1000 - 500
    }px); }
    100% { transform: translate(0, 0); }
  `;
};

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
    const shapes = new Array(30).fill(null).map((_, index) => {
        const position = generateRandomPosition();
        const size = generateRandomSize();
        const color = generateRandomColor();
        const animation = generateRandomAnimation();
        const delay = Math.random();
        return (
            <Box
                key={index}
                position="absolute"
                top={position.top}
                left={position.left}
                width={size}
                height={size}
                borderRadius={Math.random() > 0.5 ? "50%" : "10%"}
                backgroundColor={color}
                animation={`${animation} ${
                    Math.random() * 15 + 20
                }s ease-in-out infinite ${delay}s`}
            />
        );
    });

    return (
        <Box
            position="relative"
            maxW="100vw"
            minH="100vh"
            bgColor="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {/* Animated Shapes */}
            <Box
                overflow={"hidden"}
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
            >
                {shapes}
            </Box>

            {/* Blur effect and children */}
            <Box
                position="fixed"
                top="0"
                left="0"
                width="100%"
                height="100%"
                overflow={"hidden"}
                backdropFilter="blur(50px)"
                zIndex={0}
                bgColor="rgba(255, 255, 255, 0.4)"
            />

            {/* Container for children */}
            <Box
                position="relative"
                zIndex={1}
                color="gray.700"
                textAlign="center"
                width="100%"
                h={"100%"}
            >
                {children}
            </Box>
        </Box>
    );
};

export default AnimatedBackground;
