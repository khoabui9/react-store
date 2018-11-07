import styled from 'styled-components';

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
        height: 80%;
    }
`;


export const InfoSection = styled.section`
    width: 40%;
    height: 100%;
    position: absolute;
    padding: 0;
    right: 0;
    background-color: white;

    @media (max-width: 700px) {
        width: 100vw;
        height: 20%;
        bottom: 0;
        position: fixed;
        margin-top: 10vh;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding: 5%;

     @media (max-width: 700px) {
       height: 80%;
    }
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

export const addToCartBtn = styled.a`
    height: 10%;
`;




