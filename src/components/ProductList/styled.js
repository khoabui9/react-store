import styled from 'styled-components';

export const SuperTextContainer = styled.div`
    padding: 1rem;
    margin-top: 15vh;
    padding-right: 5vw;
    text-align: right;
    border-top: solid 1px;
    border-bottom: solid 1px;

    @media (max-width: 700px) {
        width: 100vw;
    }
`;


export const SuperText = styled.h1`
    font-weight: 600;
    font-size: calc(20px + 40 * (100vw - 320px) / 1120);
    line-height: 2.5rem;
`;

export const SmallerText = styled(SuperText)`
    font-weight: 400; 
    font-size: calc(20px + 30 * (100vw - 320px) / 1120);
    color: orangered;
`;

export const ProductListContainer = styled.div`
    width: 75vw;
    right: 0;
    height: 100%;
    position: absolute;
    padding: 0;
    margin-top: 1vh;

    @media (max-width: 700px) {
        width: 100vw;
    }
`;

export const ProductUl = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

