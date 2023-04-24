import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Title = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 130%;
    color: ${props => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const Content = styled.div`
  background-color: blue;
  width: 52.6rem;
  height: 27rem;
  border-radius: 0.6rem 3.6rem;
  background-color: ${props => props.theme['background']};
  position: relative;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 0.7rem 3.7rem;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  .Info {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;

    div {
      display: flex;
      flex-direction: column;

      span,
      strong {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
      }

      strong {
        font-weight: 700;
      }
    }
  }
`

export const ImageAside = styled.div`
  display: flex;
  align-items: flex-end;
`
