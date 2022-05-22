import React from 'react'
import styled from 'styled-components'
import { VictoryPie } from 'victory'
import { theme } from '../../theme/theme'

const InfoBox = styled.div`
  background-color: ${theme.colors.color01};
  border-radius: .4rem;
  width: fit-content;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  margin-bottom: 3rem;
  & h2:nth-child(2) {
    margin: 1rem 0;
  }
`

const InfoItems = styled.h2`
  font-size: 2.4rem;
  font-weight: 400;
  font-family: ${theme.fontFamily.first};
  color: ${theme.colors.color05};
`

const InfoDest = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

type DataProps = {
  status:number,
  message: Array<any> 
}

type ItemsProps = {
  value:number;
  quantity: number;
}

const StoreGeralInfo = ({data}:{data:DataProps | null}) => {
  const [cadastrados, setCadastrados] = React.useState(0)
  const [mediaPreco, setMediaPreco] = React.useState(0)
  const [estoqueTotal, setEstoqueTotal] = React.useState(0)

  function getMediaPreco(total:number) {
    const produtos = data?.message
    if(!produtos) return 
    let media = produtos.reduce((acc:number, item:ItemsProps) => {
      acc += item.value
      return acc
    }, 0)

    media = Math.floor(media / total)

    setMediaPreco(media)
  }

  function getCadastrados() {
    const produtos = data?.message
    if(!produtos) return 
    setCadastrados(produtos.length)
    getMediaPreco(produtos.length)
  }

  function getEstoqueTotal() {
    const produtos = data?.message
    if(!produtos) return 
    const estoque = produtos.reduce((acc:number, item:ItemsProps) => {
      acc += item.quantity
      return acc
    }, 0)

    setEstoqueTotal(estoque)
  }

  React.useEffect(() => {
    if(!data) return
    getCadastrados()
    getEstoqueTotal()
  }, [])

  return (
    <>
      <InfoBox>
        <InfoItems>
          Cadastrados: <InfoDest>{cadastrados ? cadastrados : 0}</InfoDest>
        </InfoItems>
        <InfoItems>
          Media de preço: <InfoDest>R$ {mediaPreco ? mediaPreco : 0}</InfoDest>
        </InfoItems>
        <InfoItems>
          Estoque Total: <InfoDest>{estoqueTotal ? estoqueTotal : 0}</InfoDest>
        </InfoItems>
      </InfoBox>
      <InfoBox>
        <VictoryPie
          style={{
            labels: {
              fontSize: 18,
              fontWeight: 'bold'
            }
          }}
          colorScale={[theme.colors.color05,theme.colors.color04,theme.colors.color03]}
          data={[
            { x: "Cadastrados", y: cadastrados || 0 },
            { x: "Media/Preço", y: mediaPreco || 0},
            { x: "Estoque/Total", y: estoqueTotal || 0 }
          ]}
          padding={{top:35,bottom:0,left:0,right:0}}
          width={550}
          height={300}
        />
      </InfoBox>
    </>
    
  )
}

export default StoreGeralInfo