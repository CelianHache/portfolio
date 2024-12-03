import { Box, Flex } from "@chakra-ui/react";
import { Provider } from "./components/ui/provider";
import AnimatedBackground from "./components/background/AnimatedBackground";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { FooterSummary } from "./components/footer/FooterSummary";
import { LegalMention } from "./components/footer/LegalMention";

function App() {
    return (
        <Provider>
            <AnimatedBackground>
                <Router>
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
                            position="sticky"
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
