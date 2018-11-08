import posed, { PoseGroup } from "react-pose";

const configMobileInfoSection= {
    default: {
        y: "0",
    },
    open: { 
        y: "40%",
        transition: { duration: 700 }
    },
    closed: { 
        y: "75%",
        transition: { duration: 700 }
    },
    
};

export const MobileInfoSection = posed.div(configMobileInfoSection);