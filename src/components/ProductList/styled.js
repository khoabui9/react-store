import styled from 'styled-components';

export const ProductListContainer = styled.div`
    width: 75vw;
    right: 0
    height: 100%;
    position: absolute;
    padding: 0;
    margin-top: 15vh;

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

