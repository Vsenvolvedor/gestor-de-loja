import styled from 'styled-components'
import { USER_CREATE } from '../../../api/user'
import useFetch from '../../../Hooks/useFetch'
import { useForm } from '../../../Hooks/useForm'
import { theme } from '../../../theme/theme'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import MainFormTitle from './MainFormTitle'
import MainLoginSectionStyle from './MainLoginSectionStyle'

const ErrorStyle = styled.p`
  font-size: 1.4rem;
  font-family: ${theme.fontFamily.second};
  color: #dd0000;
  margin-bottom: 1rem;
`

const MainCreate = () => {
  const {data,loading,error,request} = useFetch()
  const storeName = useForm()
  const username = useForm('username')
  const password = useForm()

  async function createSubmit(event:any) {
      event.preventDefault()
      if(
        storeName.validate(storeName.value) && 
        username.validate(username.value ) &&
        password.validate(password.value)
      ) {
      const { url, options } = USER_CREATE({
        storename: storeName.value,
        username: username.value,
        password: password.value
      })
      await request(url,options)
    }
  }

  return (
    <main>
      <MainLoginSectionStyle>
        <MainFormTitle>
          Cadastre-se
        </MainFormTitle>
        <form onSubmit={createSubmit}>
          <Input 
            label='Nome da Loja'
            id='store'
            {...storeName}
          />
          <Input 
            label='Nome de Usuário'
            id='user'
            {...username}
          />
          <Input 
            label='Senha'
            type='password'
            id='password'
            {...password}
          />
          {error ?  (<ErrorStyle>{error.message}</ErrorStyle>) : null}
          {loading ? 
          (
            <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%' disabled>
              cadastrando....
            </Button>
          ) 
          :
          (   
           <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%'>
             cadastrar
           </Button>
          )}
         
        </form>
      </MainLoginSectionStyle>
    </main>
  )
}

export default MainCreate