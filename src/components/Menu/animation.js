import posed, { PoseGroup } from "react-pose";

const configMobileMenu= {
    open: { x: 0, y: "10vh" },
    closed: { x: 0 , y: "-100vh" }
};

export const MobileMenu = posed.div(configMobileMenu);