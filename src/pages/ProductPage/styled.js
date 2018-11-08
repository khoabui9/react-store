import styled from 'styled-components';
import { MobileInfoSection } from "./animation"

export const Container = styled.div`
    width: 75vw;
    right: 0;
    height: 100%;
    position: absolute;
    padding: 0;
    margin-top: 20vh;

    @media (max-width: 700px) {
        width: 100vw;
    }
`;

export const ImageSection = styled.section`
    width: 60%;
    height: 100%;
    position: absolute;
    padding: 0;

    @media (max-width: 700px) {
        width: 100vw;
    }
`;


export const InfoSection = styled(MobileInfoSection)`
    width: 40%;
    height: 100%;
    position: absolute;
    padding: 0;
    right: 0;
    background-color: white;

    @media (max-width: 700px) {
        width: 100vw;
        margin-top: 100px;
        bottom: 0;
        position: fixed;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding: 5%;
`;

export const Image = styled.img`
    width: 100% ;
`;

export const InfoContainer = styled.div`
    width: 100%;
    padding: 5%;
`;

export const TitleContainer = styled.div`
    height: 20%;
`;

export const PriceContainer = styled.div`
    height: 10%;
`;

export const AddToCartBtnContainer = styled.a`
`;

export const AddToCartBtn = styled.div`
    width: 100%;
    height: 45px;
    background-color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .6rem;
`;

export const AddToCartText = styled.p`
    height: 50%;
    color: white;
    margin: 0;
`;

export const OpenDeBanOi = styled.div`
    margin: .4rem;
    height: 5px;
    width: 20%;
    background-color: grey;
    transform: translate(190%, -20px);
    
    @media (min-width: 700px) {
        display: none;
    }
`;



