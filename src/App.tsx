import { Box, Flex } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import AnimatedBackground from "./components/background/AnimatedBackground";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { FooterSummary } from "./components/footer/FooterSummary";
import { LegalMention } from "./components/footer/LegalMention";
import { EngineeringCourse } from "./components/engineering/EngineeringCourse";
import { Projects } from "./components/engineering/Projects";
import { Productions } from "./components/engineering/Productions";
import ScrollToTop from "./components/utils/ScrollToTop";
import { Mobility } from "./components/mobility/Mobility";
import { PCE } from "./components/mobility/PCE";
import { LV2 } from "./components/mobility/LV2";
import { Sustainability } from "./components/sutainability/Sustainability";
import { Activities } from "./components/activities/Activities";
import { Career } from "./components/career/career";
import { Internship } from "./components/career/Internship";
import { PEP } from "./components/career/PEP";

function App() {
    return (
        <Provider>
            <AnimatedBackground>
                <Router basename="/portfolio/">
                    <ScrollToTop />
                    <Flex
                        direction="column"
                        minHeight="100vh"
                        scrollbarGutter={"stable"}
                    >
                        {/* Header */}
                        <Box
                            as="header"
                            p={5}
                            position="sticky"
                            top={0}
                            left={0}
                            right={0}
                            zIndex={100}
                            bg={"white"}
                            boxShadow={"sm"}
                        >
                            <Navbar />
                        </Box>

                        {/* Body */}
                        <Box as="main" flex="1" p={5}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/engineering"
                                    element={<EngineeringCourse />}
                                />
                                <Route
                                    path="/engineering/projects"
                                    element={<Projects />}
                                />
                                <Route
                                    path="/engineering/productions"
                                    element={<Productions />}
                                />
                                <Route
                                    path="/mobility"
                                    element={<Mobility />}
                                />
                                <Route path="/mobility/PCE" element={<PCE />} />
                                <Route path="/mobility/LV2" element={<LV2 />} />
                                <Route
                                    path="/sustainability"
                                    element={<Sustainability />}
                                />
                                <Route
                                    path="/activities"
                                    element={<Activities />}
                                />
                                <Route path="/career" element={<Career />} />
                                <Route
                                    path="/career/internship"
                                    element={<Internship />}
                                />
                                <Route path="/career/pep" element={<PEP />} />{" "}
                                <Route
                                    path="/legal_mention"
                                    element={<LegalMention />}
                                />
                                <Route path="*" element={<HomePage />} />
                            </Routes>
                        </Box>

                        {/* Footer */}
                        <Box
                            as="footer"
                            p={5}
                            bgColor={"gray.800"}
                            position={{ base: "initial", lg: "sticky" }}
                            bottom={0}
                            left={0}
                            right={0}
                        >
                            <FooterSummary />
                        </Box>

                        <Box as="footer" p={5} bgColor={"gray.800"}>
                            <Footer />
                        </Box>
                    </Flex>
                </Router>
            </AnimatedBackground>
        </Provider>
    );
}

export default App;
