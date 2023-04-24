import styled from "styled-components";

export const ContainerValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .total-items{
    display: flex;
    justify-content: space-between;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
    }
  }
  .tax-delivery{
    display: flex;
    justify-content: space-between;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 130%;
    }
  }
  .total{
    display: flex;
    justify-content: space-between;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 130%;
    }
  }
`