import { VStack, Button, HStack } from "@chakra-ui/react";

export interface CVSectionProps {
    cv_en?: string;
    cv_fr?: string;
}

export const CVSection: React.FC<CVSectionProps> = (props) => {
    return (
        <VStack gap={8} align="stretch" p={5} w={"100%"}>
            <HStack justifyContent="center" gap={5}>
                <Button
                    bgColor={"blue.700"}
                    color={"white"}
                    _hover={{ bgColor: "blue.500" }}
                    rounded={"md"}
                    hidden={props.cv_fr === undefined}
                >
                    <a href={props.cv_fr} target="_blank">
                        Resume (fr)
                    </a>
                </Button>
                <Button
                    bgColor={"blue.700"}
                    color={"white"}
                    _hover={{ bgColor: "blue.500" }}
                    rounded={"md"}
                    hidden={props.cv_en === undefined}
                >
                    <a href={props.cv_en} target="_blank">
                        Resume (en)
                    </a>
                </Button>
            </HStack>
        </VStack>
    );
};
