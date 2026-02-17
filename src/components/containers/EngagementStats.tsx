import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Clock, Target, TrendingUp } from "lucide-react";

interface EngagementStatsProps {
    totalHours: number;
    threshold?: number;
    engagementCount: number;
}

export const EngagementStats: React.FC<EngagementStatsProps> = ({
    totalHours,
    threshold = 40,
    engagementCount,
}) => {
    const percentage = Math.min((totalHours / threshold) * 100, 100);
    const isComplete = totalHours >= threshold;

    return (
        <Box
            bg="white"
            borderRadius="xl"
            p={6}
            mb={6}
            boxShadow="sm"
            border="1px solid"
            borderColor="gray.200"
        >
            <HStack justify="space-between" align="flex-start" flexWrap="wrap" gap={4}>
                <VStack align="flex-start" gap={1}>
                    <HStack gap={2} color="gray.600" fontSize="sm">
                        <Target size={18} />
                        <Text fontWeight="medium">Civic Engagement Progress</Text>
                    </HStack>
                    <HStack gap={6} flexWrap="wrap">
                        <HStack gap={2}>
                            <Clock size={20} color="#2563eb" />
                            <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                                {totalHours}h
                            </Text>
                            <Text fontSize="lg" color="gray.500">
                                / {threshold}h
                            </Text>
                        </HStack>
                        <HStack gap={2} color="gray.600">
                            <TrendingUp size={18} />
                            <Text fontSize="sm">
                                {engagementCount} engagement{engagementCount > 1 ? "s" : ""}
                            </Text>
                        </HStack>
                    </HStack>
                </VStack>

                <Box
                    bg={isComplete ? "green.100" : "blue.50"}
                    px={4}
                    py={2}
                    borderRadius="full"
                >
                    <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={isComplete ? "green.700" : "blue.700"}
                    >
                        {isComplete ? "Goal reached!" : `${Math.round(percentage)}% completed`}
                    </Text>
                </Box>
            </HStack>

            <Box mt={4}>
                <Box
                    w="100%"
                    h={3}
                    bg="gray.200"
                    borderRadius="full"
                    overflow="hidden"
                >
                    <Box
                        h="100%"
                        w={`${percentage}%`}
                        bg={isComplete ? "green.500" : "blue.600"}
                        borderRadius="full"
                        transition="width 0.5s ease-in-out"
                    />
                </Box>
                <HStack justify="space-between" mt={2}>
                    <Text fontSize="xs" color="gray.500">0h</Text>
                    <Text fontSize="xs" color="gray.500">{threshold}h goal</Text>
                </HStack>
            </Box>
        </Box>
    );
};
