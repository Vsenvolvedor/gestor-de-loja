import styled, { keyframes } from "styled-components"
import { theme } from "../../../theme/theme"

const animeLeft = keyframes`
  to {
    opacity: initial;
    transform: initial;
  }
`

const MainLoginSectionStyle = styled.section`
  display: block;
  background-color: ${theme.colors.color01};
  padding: 1.5rem 3rem;
  margin: 6rem auto;
  width: 300px;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards ease-out;
`

export default MainLoginSectionStyle