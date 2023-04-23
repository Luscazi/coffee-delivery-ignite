import styled from "styled-components";

export const CatalogContainer = styled.div`
  width: 25.6rem;
  height: 31rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  background-color: ${props => props.theme['base-card']};
  border-radius: 0.6rem 3.6rem;
`

export const TypesBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`

export const Types = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme['yellow-light']};
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  span {
    color: ${props => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
  }
`

export const Title = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
`

export const Description = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  line-height: 130%;
  color: ${props => props.theme['base-label']};
`

export const Value = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.3rem;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 130%;

    strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2.4rem;
      line-height: 130%;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 0.6rem;
  background-color: ${props => props.theme['purple-dark']};
  transition: background-color 0.1s ease-in-out;

  :hover {
    background-color: ${props => props.theme['purple']};
  }

  img {
    width: 2.2rem;
  }

  cursor: pointer;
`
