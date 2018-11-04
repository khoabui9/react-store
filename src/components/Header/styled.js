import styled from 'styled-components';

export const Logo = styled.h1`
  font-size: 1.6rem;
  padding: 0;
  left: 4vw;

   @media (min-width: 1500px) {
      font-size: calc(15px + 10 * (100vw - 320px) / 1120);
    }
`;

export const Cart = styled.h1`
  font-size: .9rem;
  font-weight: 400;
  margin-top: 20px;
  padding: 0;
  color: grey;
    @media (min-width: 1500px) {
      font-size: calc(15px + 10 * (100vw - 320px) / 1120);

    }
`;

