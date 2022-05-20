import styled from "styled-components";
import { theme } from "../../theme/theme";

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  margin: 0 3rem 3rem;
  border-radius: .4rem;
  position: relative;
  width: 90%;
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: ${theme.fontFamily.second};
  color: ${theme.colors.color05};
  margin-bottom: 1rem;
  & span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  width: 100%;
  height: 120px;
  font-size: 1.4rem;
  font-family: ${theme.fontFamily.first};
  text-transform: uppercase;
  background-color: ${theme.colors.color03};
  color: ${theme.colors.color01};
`

type ProductData = {
  ID: number;
  image: string;
  name: string;
  categ: string;
  quantity: number;
  value: number
}

const StoreProductItem = ({data}:{data:ProductData}) => {
  console.log(data)
  if(!data) return null
  return (
    <ItemWrapper id={data.ID.toString()}>
      <ImageWrapper>
        {data.image === 'false' ? 'Sem Imagem' : data.image}
      </ImageWrapper>
      <FlexDiv>
        <div>
          <Title><span>Nome:</span> {data.name}</Title>
          <Title><span>Categoria:</span> {data.categ.length ? data.categ : 'Sem categorias'}</Title>
        </div>
        <div>
          <Title><span>Valor unitário:</span> {data.value}</Title>
          <Title><span>Em estoque:</span> {data.quantity}</Title>
        </div>
      </FlexDiv>
    </ItemWrapper>
  )
}

export default StoreProductItem