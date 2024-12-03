import { VStack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CVSection: React.FC = () => {
    return (
        <VStack gap={8} align="stretch" p={5} w={"100%"}>
            <HStack justifyContent="center" gap={5}>
                <Button
                    asChild
                    bgColor={"blue.700"}
                    color={"white"}
                    _hover={{ bgColor: "blue.500" }}
                    rounded={"md"}
                >
                    <Link to="/cv/CV_fr.pdf" target="_blank">
                        Resume (fr)
                    </Link>
                </Button>
                <Button
                    asChild
                    bgColor={"blue.700"}
                    color={"white"}
                    _hover={{ bgColor: "blue.500" }}
                    rounded={"md"}
                >
                    <Link to="/cv/CV_en.pdf" target="_blank">
                        Resume (en)
                    </Link>
                </Button>
            </HStack>
        </VStack>
    );
};
