import React from 'react'
import styled from 'styled-components'
import { CATEG_CREATE } from '../../api/categ'
import Error from '../../Helpers/Error'
import { getToken } from '../../Helpers/getToken'
import Sucess from '../../Helpers/Sucess'
import useFetch from '../../Hooks/useFetch'
import { useForm } from '../../Hooks/useForm'
import { theme } from '../../theme/theme'
import Button from '../Form/Button'
import Input from '../Form/Input'
import Title from './css/Title'

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.color01};
  padding: 1.5rem;
  border-radius: .4rem;
  width: 300px;
`

const StoreGestorCategsAdd = ({update}:{update: () => void}) => {
  const { loading, error, request }:any = useFetch()
  const [sucess, setSucess] = React.useState<boolean | string>(false)
  const categAdd = useForm()

  async function handleCategAddSubmit(e:any) {
    try {
      e.preventDefault()
      const token = getToken()
      if(!token) throw ''
      if(!categAdd.value.length) throw ''
      const { url, options } = CATEG_CREATE(token,{
        name: categAdd.value
      })
  
      const {response, json}:any = await request(url,options)
      if(response.ok) {
        setSucess(json.message)
        setTimeout(() => {
          setSucess(false)
          update()
        }, 1000)
      } else return false
    } catch(err) {
      setSucess(false)
    } 
  }

  return (
    <div style={{height:'fit-content'}}>
      <Title>
        Adicionar categoria
      </Title>
      <FormStyle onSubmit={handleCategAddSubmit}>
        <Input 
          id='categAdd'
          {...categAdd}
        />
        {error && <Error error={error.message} />}
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
        {sucess && <Sucess message={sucess}/>}
      </FormStyle>
    </div>
  )
}

export default StoreGestorCategsAdd