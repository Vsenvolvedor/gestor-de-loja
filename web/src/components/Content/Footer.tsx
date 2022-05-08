import styled from "styled-components"
import { theme } from "../../theme/theme"

const FooterStyle = styled.footer`
  background-color: ${theme.colors.color01};
  font-size: 1.2rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0,0,0,.2)
`

const Footer = () => {
  return (
    <FooterStyle>
      Gestoja, alguns direitos reservados
    </FooterStyle>
  )
}

export default Footer