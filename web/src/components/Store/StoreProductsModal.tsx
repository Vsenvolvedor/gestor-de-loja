import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'
import { CATEG_DATA } from '../../api/categ';
import { PRODUCT_UPDATE } from '../../api/store';
import { getToken } from '../../Helpers/getToken';
import Sucess from '../../Helpers/Sucess';
import useFetch from '../../Hooks/useFetch';
import { useForm } from '../../Hooks/useForm';
import { theme } from '../../theme/theme'
import Button from '../Form/Button';
import ImageInput from '../Form/ImageInput';
import Input from '../Form/Input';
import Select from '../Form/Select';
import XIcon from '../svgs/XIcon';
import Title from '../Styles/Title';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f49;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const Modal = styled.div`
  background-color: ${theme.colors.color02};
  padding: 1.5rem;
  border-radius: .4rem;
  position: relative;
  box-sizing: border-box;
`

const CloseBtn = styled.button`
  background-color: ${theme.colors.color04};
  padding: .5rem 1rem;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: .2s;
  &:hover {
    opacity: .8;
  }
`

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
  align-items: center;
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


interface StoreProductsModalProps {
  id:string;
  active:boolean;
  setModal: Dispatch<SetStateAction<boolean>>
  refresh: () => void
}

const StoreProductsModal = ({id,active,setModal,refresh}:StoreProductsModalProps) => {
  const {loading, request}:any = useFetch()
  const product = useForm()
  const productValue = useForm('number')
  const productQtd = useForm('number')
  const [categ, setCateg] = React.useState<Array<string>>([])
  const [fetchCategs, setFechCategs]:any = React.useState([])
  const [image, setImage] = React.useState<string>('')

  async function handleUpdateProductSubmit(e:any) {
    try {
      e.preventDefault()
      const token = getToken()
      if(!token) throw ''
      
      const body = {
        ID: id,
        name: product.value.toLowerCase(),
        value: productValue.value,
        qtd: productQtd.value,
        categ,
        image
      }
      const {url, options} = PRODUCT_UPDATE(body,token)
      await request(url,options)
      setModal(false)
      refresh()

    } catch(err) { 
      return false } 
  }

  function deleteItem({target}:any){
    const newCateg = categ.filter((item) => item !== target.innerText)
    setCateg(newCateg)
  }

  React.useEffect(() => {
    async function getCategs() {
      const token = getToken()
      if(!token) return false
      const { url, options} = CATEG_DATA(token)
      const response = await fetch(url, options)
      const json = await response.json()
      setFechCategs(json)
    }
    getCategs()
  }, [])

  if(!active) return null
  return (
    <ModalWrapper>
      <Modal>
        <FormWrapper onSubmit={handleUpdateProductSubmit}>
          <Title>
            Atualizar Produto
          </Title>
          <FormStyle>
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
                  options={fetchCategs && fetchCategs.message as Array<any>}
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

                <ImageInput
                  setImage={setImage}
                />
              </div>
            </GridInputs>
            
            {loading ? (
              <Button
                marginConfig='1.5rem auto 0 auto'
                widthConfig='40%'
                disabled
              >
                Atualizando...
              </Button>
            ):(
              <Button
                marginConfig='1.5rem auto 0 auto'
                widthConfig='40%'
              >
                Atualizar Produto
              </Button>
            )}
    
          </FormStyle>
        </FormWrapper>

        <CloseBtn onClick={() => setModal(false)}>
          <XIcon />
        </CloseBtn>
      </Modal>
    </ModalWrapper>
  )
}

export default StoreProductsModal