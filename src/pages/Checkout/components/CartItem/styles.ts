import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  width: 100%;

  .product {
    width: 6.4rem;
    height: 6.4rem;
  }

  .actionBox {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
    }

    .actions {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;
    }
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 130%;
  }
`