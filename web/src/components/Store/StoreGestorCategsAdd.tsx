import React from 'react'
import styled from 'styled-components'
import { CATEG_CREATE } from '../../api/categ'
import ErrorComponent from '../../Helpers/Error'
import { getToken } from '../../Helpers/getToken'
import Sucess from '../../Helpers/Sucess'
import useFetch from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { theme } from '../../theme/theme'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { TitleStyle } from '../Styles/Title'

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  border-radius: .4rem;
  width: 300px;
`

type Sucess = {
  status: boolean;
  message: string;
}

const StoreGestorCategsAdd = ({update}:{update: () => void}) => {
  const { loading, error, setError, request }:any = useFetch()
  const [sucess, setSucess] = React.useState<Sucess>({
    status: false,
    message: ''
  })
  const categAdd = useForm()

  async function handleCategAddSubmit(e:any) {
    try {
      e.preventDefault()
      const token = getToken()
      if(!token) throw new Error('Token Inválido');
      if(categAdd?.value.startsWith(' ')) throw new Error('Categoria Inválida');
      const { url, options } = CATEG_CREATE(token,{
        name: categAdd.value
      })
  
      const {response, json}:any = await request(url,options)
      if(response.ok) {
        setSucess(json.message)
        setTimeout(() => {
          setSucess({...sucess, status:false})
          update()
        }, 1000)
      } else return false
    } catch(err:any) {
      setError({message:err.message})
      setTimeout(() => setError(null), 1000)
    } 
  }

  return (
    <div style={{height:'fit-content'}}>
      <TitleStyle>
        Adicionar categoria
      </TitleStyle>
      <FormStyle onSubmit={handleCategAddSubmit}>
        <Input 
          id='categAdd'
          {...categAdd}
        />
        {error && <ErrorComponent error={error.message} />}
        {
          loading ? (
          <Button 
            marginConfig='1rem auto 0 auto'
            widthConfig='200px'
            disabled
          >
            Adicionando...
          </Button>
          ): (
          <Button 
            marginConfig='1rem auto 0 auto'
            widthConfig='200px'
          >
            Adicionar
          </Button>
          )
        }
        {sucess.status && <Sucess message={sucess.message}/>}
      </FormStyle>
    </div>
  )
}

export default StoreGestorCategsAdd