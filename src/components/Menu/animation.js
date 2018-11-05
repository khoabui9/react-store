import posed, { PoseGroup } from "react-pose";

const configMobileMenu= {
    open: { 
        x: 0, 
        y: "10vh",
        transition: { duration: 700 }
    },
    closed: { 
        x: "-100vw" , 
        y: 0,
        transition: { duration: 700 }
    },
    
};

export const MobileMenu = posed.div(configMobileMenu);