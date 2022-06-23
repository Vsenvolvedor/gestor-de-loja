import styled, { keyframes } from "styled-components"

export const animeLeft = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

export const ManagerMenu = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`