import styled from 'styled-components'
import lojaImage from '../../../assets/loja.jpg'
import { theme } from '../../../theme/theme'
import { SectionStyle }from './SectionStyle'

const PStyle = styled.p`
  font-size: 1.8rem;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  width: 300px;
  margin-bottom: 1.5rem;
`

const ImgStyle = styled.img`
  width: 320px;
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
      <ImgStyle src={lojaImage} alt='Desenho de loja'/>
    </SectionStyle>
  )
}

export default MainSectionAbout