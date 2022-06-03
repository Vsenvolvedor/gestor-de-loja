import styled from "styled-components"
import { theme } from "../theme/theme"

const ErrorStyle = styled.p`
  font-size: 1.4rem;
  font-family: ${theme.fontFamily.second};
  color: #dd0000;
  margin-bottom: 1rem;
`

const Error = ({error}:{error:string}) => {
  return (
    <ErrorStyle>
      {error}
    </ErrorStyle>
  )
}

export default Error