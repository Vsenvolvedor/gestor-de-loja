import styled from "styled-components"
import { theme } from "../theme/theme"

const SucessMessage = styled.p`
  font-size: 1.8rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  text-align: center;
  margin-top: 1rem;
`

const Sucess = ({message}:{message:string|boolean}) => {
  return (
    <SucessMessage>
      {message}
    </SucessMessage>
  )
}

export default Sucess