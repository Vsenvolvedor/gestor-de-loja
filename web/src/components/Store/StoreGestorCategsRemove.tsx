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
import Title from './css/Title'

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  border-radius: .4rem;
  width: 300px;
`

type Categs = {
  status: number,
  message: Array<string>
}

interface StoreGestorCategsRemoveProps {
  categs: Categs | null
}

const StoreGestorCategsRemove = ({categs}:StoreGestorCategsRemoveProps) => {
  const {loading, error, request }:any = useFetch()
  const [selectValue, setSelectValue] = React.useState<string | Array<string>>('')
  const [sucess, setSucess] = React.useState<boolean | string>(false)
 

  async function handleCategRemoveSubmit(e:any) {
    try {
      e.preventDefault()
      const token = getToken()
      if(!token) throw ''
      if(!selectValue) return false
      const { url, options } = CATEG_DELETE(token, selectValue)
  
      const { response, json }:any = await request(url,options)
      if(response.ok) {
        setSucess(json.message)
        setTimeout(() => {
          setSucess(false)
        }, 1500)
      } else return false
    } catch(err) {
      setSucess(false)
    } 
  }

  return (
    <div style={{height:'fit-content'}}>
      <Title>
        Remover categoria
      </Title>
      <FormStyle onSubmit={handleCategRemoveSubmit}>
        <Select 
          id='removeCategs'
          SelectedLabel='Selecione a categoria'
          options={categs && categs.message}
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
        {sucess && <Sucess message={sucess}/>}
      </FormStyle>
    </div>
  )
}

export default StoreGestorCategsRemove