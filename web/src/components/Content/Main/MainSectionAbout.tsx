import styled from 'styled-components'
import lojaImage from '../../../assets/loja.jpg'
import { theme } from '../../../theme/theme'
import { SectionStyle }from '../../Styles/SectionStyle'

const PStyle = styled.p`
  font-size: 2.4rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  max-width: 400px;
  margin-bottom: 1.5rem;
  @media (max-width: 960px) {
    max-width: 500px;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`

const ImgStyle = styled.img`
  min-width: 200px;
`

const MainSectionAbout = () => {
  return (
    <SectionStyle>
      <div>
        <PStyle>
          Tenha maior controle sobre seus produtos.
        </PStyle>
        <PStyle>
          A gestoja ajuda a você a organizar sua loja.
        </PStyle>
      </div>
      <div>
        <ImgStyle src={lojaImage} alt='Desenho de loja'/>
      </div>
    </SectionStyle>
  )
}

export default MainSectionAbout