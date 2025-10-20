import { VStack } from "@chakra-ui/react";
import { ImageCard } from "../containers/ImageCard";

export const CivicEngagement: React.FC = () => {

    const civicEngagements = [
        {
            organization: "Ingé+",
            role: "Mentor",
            src: "./Sustainability/logo_inge_plus.jpg",
            to: `${import.meta.env.BASE_URL}Sustainability/inge_plus.pdf`,
            dates: "2024 - 2025",
            description: "Mentoring students to promote equal opportunities, supporting them with their assignments, and answering their questions through regular exchanges by email, messages, and video calls."
        }]
    return (
        <VStack align="stretch" spaceY={5}>
            {civicEngagements.map((engagment, index) => (
                <ImageCard
                    title={engagment.role}
                    content={engagment.description}
                    src={engagment.src}
                    key={index}
                    footer_left={engagment.organization}
                    footer_right={engagment.dates}
                    to={engagment.to}
                    asRedirect={true}
                    navLabel="View certificate"
                />
            ))}
        </VStack>
    );
}