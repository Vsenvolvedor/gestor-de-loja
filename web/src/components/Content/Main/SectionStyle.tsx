import styled, { keyframes } from 'styled-components'
import { theme } from '../../../theme/theme'

const animeDown = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

export const SectionStyle = styled.section`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 3rem;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeDown} .5s forwards ease-out;
`

export const H2Style = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-family: ${theme.fontFamily.second};
  font-weight: 400;
  color: ${theme.colors.color05};
  text-align: center;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeDown} .5s forwards ease-out;
  &::before {
    content: "";
    background-color: ${theme.colors.color05};
    display: block;
    margin-right: 1rem;
    width: 36%;
    height: 2px;
  } 
  &::after {
    content: "";
    background-color: ${theme.colors.color05};
    display: block;
    margin-left: 1rem;
    width: 36%;
    height: 2px;
  }
`
