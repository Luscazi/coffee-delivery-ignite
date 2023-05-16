import styled from "styled-components";

import BackgroundHome from './../../assets/Background-home.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9.4rem;
`

export const BackgroundHeader = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${BackgroundHome});
  width: 100%;
  height: 54.4rem;
`

export const Header = styled.div`
  margin: 9.4rem 0 3.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7.7rem;
  z-index: 1;
`

export const Information = styled.div`

  display: flex;
  flex-direction: column;
  gap: 6.6rem;
  .text {
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 4.8rem;
      line-height: 130%;
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 130%;
    }
  }
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: 42% 62%;
  gap: 2rem 4rem;
  max-width: 56.7rem;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  span {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 130%;
  }
`

type ContainerRoundedIconProps = { color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple' }

export const ContainerRoundedIcon = styled.div<ContainerRoundedIconProps>`
  background-color: ${props => props.theme[props.color]};
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 5.4rem;
  margin-bottom: 15.7rem;

`

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5.2rem 3.2rem;
`