import styled from "styled-components";
import { theme } from "../../theme/theme";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  margin: 0 3rem 3rem;
  border-radius: .4rem;
  position: relative;
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
      <div>
        {data.image === 'false' ? 'Sem Imagem' : data.image}
      </div>
      <div>
        <div>
          <h2>Nome:{data.name}</h2>
          <h2>Categoria:{data.categ}</h2>
        </div>
        <div>
          <h2>Valor unitário:{data.value}</h2>
          <h2>Em estoque:{data.quantity}</h2>
        </div>
      </div>
    </ItemWrapper>
  )
}

export default StoreProductItem