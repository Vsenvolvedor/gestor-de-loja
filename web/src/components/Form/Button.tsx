import styled from 'styled-components'
import { theme } from '../../theme/theme'

interface ButtonProps {
  children: string;
  marginConfig?: string;
  widthConfig?: string
}

const Button = ({children, marginConfig, widthConfig}:ButtonProps) => {
  const ButtonStyle = styled.button`
    display: block;
    background-color: ${theme.colors.color04};
    font-size: 1.6rem;
    font-family: ${theme.fontFamily.first};
    color: ${theme.colors.color02};
    text-transform: uppercase;
    border-radius: .6rem;
    box-shadow: 2px 2px 4px rgba(0,0,0,.1);
    margin: ${marginConfig ? marginConfig : 0};
    padding: 1rem 3rem;
    width: ${widthConfig ? widthConfig : 'auto'};
    cursor: pointer;
    transition: .3s;
    &:hover {
      opacity: .8;
      box-shadow: 2px 2px 4px rgba(0,0,0,.2);
    }
  `
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  )
}

export default Button