import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 75vw;
    height: 100%;
    position: absolute;
    padding: 60px;
    margin: 0;
    background-color:white;

    @media (max-width: 700px) {
        width: 100vw;
        padding: 5px;
    }
`;

export const CartList = styled.ul`
    width: 100%;
    padding: 0;
    margin: 0;
    height: 100%;
    list-style: none;
    @media (max-width: 700px) {
    }
`;

export const CartListItem = styled.li`
    width: 100%;
    padding: 0;
    margin: 0;
    position:relative;
    display: inline-flex;
    @media (max-width: 700px) {
    }
`;

export const ItemDiv = styled.div`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    @media (max-width: 700px) {
    }
`;

export const ItemImageDiv = styled.div`
    width: 15%;
    padding: 0;
    margin: 0;
    @media (max-width: 700px) {
        width: 25%;
    }
`;

export const ItemImage = styled.img`
    width: 100%;
    @media (max-width: 700px) {
    }
`;

export const ItemInfoDiv = styled.div`
    top: 0;
    width: 85%;
    height: 100%;
    padding: 10px;
    margin: 0;
    right: 0;
    position: absolute;
    display:inline-flex;
    @media (max-width: 700px) {
        padding: 0;
        width: 73%;
    }
`;

export const MainInfo = styled.div`
    width: 40%;
    @media (max-width: 700px) {
    }
`;

export const UnitsInfo = styled.div`
    width: 30%;
    @media (max-width: 700px) {
    }
`;

export const PriceInfo = styled.div`
    width: 20%;
    @media (max-width: 700px) {
    }
`;

export const RemoveItem = styled.div`
    width: 10%;
    font-size: 18px;
    font-weight: 600;   
    @media (max-width: 700px) {
    }
`;

export const RemoveItemBtn = styled.a`
    
    @media (max-width: 700px) {
    }
`;




