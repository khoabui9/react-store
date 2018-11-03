import styled from 'styled-components';

export const Item = styled.li`
   width: 45%;
   overflow: hidden;
   position: relative;
   margin-right: 5%;
   line-height: 2rem;

   @media (max-width: 700px) {
        width: 100vw;
        padding: 2%;
        margin: 0;

    }
`;

export const ImageContainer = styled.div`
    height: 80%;
    overflow: hidden;
    margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
    height: 10%;
`;

export const PriceContainer = styled.div`
    height: 10%;
`;

export const Image = styled.img`
    width: 100%  
`;

