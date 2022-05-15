import styled from 'styled-components'
import { theme } from '../theme/theme'

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55vh;
  font-size: 8rem;
  font-family: ${theme.fontFamily.first};
  color: ${theme.colors.color05};
  text-align: center;
`

const DestP = styled.p`
  font-weight: bold;
  color: ${theme.colors.color03};
  text-transform: uppercase;
`

const Error404 = () => {
  return (
    <DivWrapper>
      <div>
        <DestP>
          Error 404
        </DestP>
        <p>
          Página não encontrada
        </p>
      </div>
    </DivWrapper>
  )
}

export default Error404