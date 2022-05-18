import styled from "styled-components"
import { theme } from "../../../theme/theme"

const TitleStyle = styled.h2`
  font-size: 2rem;
  font-family: ${theme.fontFamily.second};
  font-weight: 400;
  color: ${theme.colors.color05};
  margin-bottom: 1.5rem;
`

const Title = ({children}:{children:string}) => {
  return (
    <TitleStyle>
      {children}
    </TitleStyle>
  )
}

export default Title