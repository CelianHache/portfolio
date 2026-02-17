import { VStack } from "@chakra-ui/react";
import { EngagementImageCard } from "../containers/EngagementImageCard";
import { EngagementStats } from "../containers/EngagementStats";

export const CivicEngagement: React.FC = () => {

    const civicEngagements = [
        {
            organization: "ENSEEIHT",
            role: "Digital Sciences Representative",
            src: "./sustainability/n7.png",
            dates: "February 14, 2026",
            duration: 8,
            description: "Represented the Digital Sciences department during the ENSEEIHT Open House. Facilitated technical discussions at the dedicated department booth, providing prospective students with detailed information on the curriculum, specialization tracks, and admission criteria."
        },
        {
            organization: "Cordées de la réussite",
            role: "Toulouse INP Student Ambassador",
            src: "./sustainability/cordees.png",
            dates: "January 31, 2026",
            duration: 7,
            description: "Managed an advisory booth at the Maison de l'Orientation in Bellefontaine. Provided high school students with expert insights into engineering curricula at ENSEEIHT and Toulouse INP, emphasizing academic requirements, career opportunities, and the accessibility of higher technical education."
        },
        {
            organization: "Cordées de la réussite",
            role: "Toulouse INP Student Ambassador",
            src: "./sustainability/cordees.png",
            dates: "January 21, 2026",
            duration: 3,
            description: "Represented Toulouse INP and ENSEEIHT at the Reynerie Orientation Forum. Managed an outreach booth to promote engineering education, providing high school students with expert guidance on academic pathways, admissions processes, and the professional prospects of an engineering career."
        },
        {
            organization: "Cordées de la réussite",
            role: "Host & Student Ambassador",
            src: "./sustainability/cordees.png",
            dates: "January 19, 2026",
            duration: 8,
            description: "Welcomed vocational high school students from Saint-Affrique to the ENSEEIHT campus. Facilitated immersive tours and managed an informational booth to showcase Toulouse INP's academic excellence and provide tailored guidance on engineering careers."
        },
        {
            organization: "Cordées de la réussite",
            role: "INP Student Representative",
            src: "./sustainability/cordees.png",
            dates: "November 27, 2025",
            duration: 5,
            description: "Represented Toulouse INP and ENSEEIHT at a dedicated exhibition stand to promote engineering pathways. Provided personalized guidance to high school students regarding academic orientation and the engineering student experience."
        },
        {
            organization: "ENSEEIHT Recruitment Presentation",
            role: "ENSEEIHT Student Ambassador",
            src: "./sustainability/n7.png",
            dates: "February 2026",
            duration: 5,
            description: "Led an orientation session at Paul Sabatier University specifically for Computer Science and Networking students from both IUT Blagnac and IUT Paul Sabatier. Detailed the competitive admission process, curriculum specializations, and career prospects in digital systems for IUT graduates."
        },
        {
            organization: "Ingé+",
            role: "Mentor",
            src: "./sustainability/logo_inge_plus.jpg",
            to: `${import.meta.env.BASE_URL}sustainability/inge_plus.pdf`,
            dates: "2024 - 2025",
            duration: 15,
            description: "Mentoring students to promote equal opportunities, supporting them with their assignments, and answering their questions through regular exchanges by email, messages, and video calls."
        },
    ]

    const totalHours = civicEngagements.reduce((sum, e) => sum + e.duration, 0);

    return (
        <VStack align="stretch" spaceY={5}>
            <EngagementStats
                totalHours={totalHours}
                threshold={40}
                engagementCount={civicEngagements.length}
            />
            {civicEngagements.map((engagement, index) => (
                <EngagementImageCard
                    title={engagement.role}
                    content={engagement.description}
                    src={engagement.src}
                    key={index}
                    organization={engagement.organization}
                    dates={engagement.dates}
                    duration={engagement.duration}
                    to={engagement.to}
                    asRedirect={true}
                    navLabel="View certificate"
                    reverse={index % 2 === 1}
                />
            ))}
        </VStack>
    );
}
