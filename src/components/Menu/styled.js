import styled from 'styled-components';
import { MobileMenu } from "./animation"

export const StyledMenu = styled(MobileMenu)`
    background-color: transparent;
    position: fixed;
    transform: translate(-100vw);

    @media (max-width: 700px) {
        width: 100vw;
        height: 100vh;
        background-color: white;
        z-index: 99;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    transform: translate(5vw,30vh);

     @media (max-width: 700px) {
        transform: translate(5vw,10vh);
    }
`;
