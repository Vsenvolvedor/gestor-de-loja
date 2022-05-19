import React from 'react'
import styled from 'styled-components'
import { useForm } from '../../Hooks/useForm'
import { theme } from '../../theme/theme'
import Button from '../Form/Button'
import ImageInput from '../Form/ImageInput'
import Input from '../Form/Input'
import Select from '../Form/Select'
import Title from './css/Title'

const FormWrapper = styled.div`
  grid-column: 1/3;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  border-radius: .4rem;
  width: 100%;
  box-sizing: border-box;
`

const FlexInputs = styled.div`
  display: flex;
  gap: 3rem;
`

const GridInputs = styled.div`
  display: grid;
  grid-template-columns: .8fr 1fr;
  gap: 3rem;
`

const SpanCategs = styled.span`
  font-size: 1.2rem;
  font-family: ${theme.fontFamily.first};
  font-weight: bold;
  color:${theme.colors.color05};
  position: relative;
  cursor: pointer;
  &:hover {
    color:${theme.colors.color04};
  }
  &:hover::before {
    content: 'Remover';
    background-color: ${theme.colors.color02};
    border-radius: .4rem;
    position: absolute;
    padding: .5rem;
    top: -30px;
  }
  &::after {
    content: ',';
  }
`

type Categs = {
  status: number,
  message: Array<string>
}

interface StoreGestorCategsRemoveProps {
  categs: Categs | null
}

const StoreGestorProducts = ({categs}:StoreGestorCategsRemoveProps) => {
  const [categ, setCateg] = React.useState<Array<string>>([])
  const product = useForm()
  const productValue = useForm()
  const productQtd = useForm()

  async function handleCreateProductSubmit(e:any) {
    e.preventDefault()
  }

  function deleteItem({target}:any){
    const newCateg = categ.filter((item) => item !== target.innerText)
    setCateg(newCateg)
  }

  return (
    <FormWrapper>
      <Title>
        Adicionar Produto
      </Title>
      <FormStyle onSubmit={handleCreateProductSubmit}>
        <GridInputs>
          <div> 
            <Input 
              label='Nome'
              id='name'
              {...product}
            />
            <Select
              label='Categorias'
              id='categs'
              SelectedLabel='Selecione a categoria'
              options={categs && categs.message}
              setValue={setCateg}
              isValueArray={true}
            />
            {categ && categ.map((item,index) => {
              return (
                <SpanCategs 
                  key={index}
                  onClick={deleteItem}
                >
                  {item}
                </SpanCategs>
              )
            })}
          </div>
          <div>
            <FlexInputs>
              <Input 
                label='Valor unitário'
                type='number'
                id='unitvalue'
                {...productValue}
              />
              <Input 
                label='Quantidade em estoque'
                type='number'
                id='qtd'
                {...productQtd}
              />
            </FlexInputs>
            
            <ImageInput/>
          </div>
        </GridInputs>
        
        <Button
          marginConfig='1.5rem auto 0 auto'
          widthConfig='40%'
        >
          Adicionar
        </Button>
      </FormStyle>
    </FormWrapper>
  )
}

export default StoreGestorProducts