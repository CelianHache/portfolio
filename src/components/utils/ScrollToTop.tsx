import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [location]); // Only run this effect when the location changes (i.e., when the route changes)

    return null; // This component doesn't need to render anything
};

export default ScrollToTop;
