import { useNavigate } from 'react-router-dom'
import { USER_CREATE, USER_LOGIN } from '../../../api/user'
import Error from '../../../Helpers/Error'
import useFetch from '../../../Hooks/useFetch'
import { useForm } from '../../../Hooks/useForm'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import MainFormTitle from './MainFormTitle'
import MainLoginSectionStyle from './MainLoginSectionStyle'

const MainCreate = () => {
  const navigate = useNavigate()
  const {loading,error,request}:any = useFetch()
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
      const {response}:any = await request(url,options)
      if(response.ok) {
        const { url, options } = USER_LOGIN({
          username: username.value,
          password: password.value
        })
        const {json}:any = await request(url,options)
        if(json) {
          const { token }:any = json
          window.localStorage.setItem('token', token)
          navigate('/store/geral')
        }
      }
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
          {error ? <Error error={error.message} /> : null}
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