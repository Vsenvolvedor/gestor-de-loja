import styled from 'styled-components'
import { theme } from '../../../theme/theme'
import  { SectionStyle, H2Style } from '../../Styles/SectionStyle'
import appImage from '../../../assets/appimg.jpg'

const itemsLi = ['Organize seus produtos','Fácil de usar','Adicione foto','Customize categorias']

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 2.4rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-bottom: 1.5rem;
  list-style: none;
  &::before {
    content: '';
    display: block;
    background-color: ${theme.colors.color04};
    border-radius: 4px;
    width: 30px;
    height: 4px;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`

const ImgStyled = styled.img`
  box-shadow: 0 0 0 2px ${theme.colors.color05};
  border-radius: 2px;
  width: 450px;
`

const MainSectionControl = () => {

  return (
    <>
      <H2Style>
        Tenha maior controle
      </H2Style>
      <SectionStyle>
        <ImgStyled src={appImage} alt='Desenho do aplicativo'/>
        <ul>
          {itemsLi.map((item, index) => {
            return (
              <LiStyled key={index}>
                {item}
              </LiStyled>
            )
          })}
        </ul>
      </SectionStyle>
    </>

  )
}

export default MainSectionControl