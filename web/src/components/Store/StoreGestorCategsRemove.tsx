import React from 'react'
import styled from 'styled-components'
import { CATEG_DELETE } from '../../api/categ'
import Error from '../../Helpers/Error'
import { getToken } from '../../Helpers/getToken'
import Sucess from '../../Helpers/Sucess'
import useFetch from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { theme } from '../../theme/theme'
import Button from '../Form/Button'
import Select from '../Form/Select'
import {TitleStyle} from '../Styles/Title'

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  border-radius: .4rem;
  width: 300px;
`

type OptionsType = {
  name: string
} 
  
interface StoreGestorCategsRemoveProps {
  categs: Array<OptionsType>;
  update: () => void;
}

type Sucess = {
  status: boolean;
  message: string;
}

const StoreGestorCategsRemove = ({categs, update}:StoreGestorCategsRemoveProps) => {
  const {loading, error, request }:any = useFetch()
  const [selectValue, setSelectValue] = React.useState<string>('')
  const [sucess, setSucess] = React.useState<Sucess>({
    status: false,
    message: ''
  })

  async function handleCategRemoveSubmit(e:any) {
    try {
      e.preventDefault()
      const token = getToken()
      if(!token) throw ''
      if(!selectValue) return false
      const { url, options } = CATEG_DELETE(token, selectValue)
  
      const { response, json }:any = await request(url,options)
      if(response.ok) {
        setSucess({...sucess, message:json.message})
        setTimeout(() => {
          setSucess({...sucess, status:false})
          update()
        }, 1000)
      } else return false
    } catch(err) {
      setSucess({...sucess, status:false})
    } 
  }
  console.log(categs)

  return (
    <div style={{height:'fit-content'}}>
      <TitleStyle>
        Remover categoria
      </TitleStyle>
      <FormStyle onSubmit={handleCategRemoveSubmit}>
        <Select 
          id='removeCategs'
          SelectedLabel='Selecione a categoria'
          options={categs && categs}
          setValue={setSelectValue}
        />
     
        {error && <Error error={error.message} />}
        {
          loading ? (
          <Button 
            marginConfig='1rem auto 0 auto'
            widthConfig='200px'
            disabled
          >
            Removendo...
          </Button>
          ): (
          <Button 
            marginConfig='1rem auto 0 auto'
            widthConfig='200px'
          >
            Remover
          </Button>
          )
        }
        {sucess.status && <Sucess message={sucess.message}/>}
      </FormStyle>
    </div>
  )
}

export default StoreGestorCategsRemove