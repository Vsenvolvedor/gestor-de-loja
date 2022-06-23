import styled, { keyframes } from "styled-components"
import { theme } from "../../theme/theme"

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
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0,0,0,.2);
  margin: 6rem auto;
  max-width: 400px;
  transform: translateX(-30px);
  opacity: 0;
  animation: ${animeLeft} .5s forwards ease-out;
`

export default MainLoginSectionStyle