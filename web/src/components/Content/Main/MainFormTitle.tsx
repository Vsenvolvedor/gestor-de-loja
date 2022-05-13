import styled from "styled-components"
import { theme } from "../../../theme/theme"

const H1Styled = styled.h1`
  font-size: 2.4rem;
  font-family: ${theme.fontFamily.second};
  font-weight: 400;
  color: ${theme.colors.color05};
  margin-bottom: 1.5rem;
  text-align: center;
`

interface MainFormTitleProps {
  children: string
}

const MainFormTitle = ({children}:MainFormTitleProps) => {
  return (
    <H1Styled>
      {children}
    </H1Styled>
  )
}

export default MainFormTitle