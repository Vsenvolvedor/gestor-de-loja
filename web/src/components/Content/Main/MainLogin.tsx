import { useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../../api/user'
import Error from '../../../Helpers/Error'
import  useFetch from '../../../Hooks/useFetch'
import { useForm } from '../../../Hooks/useForm'
import Button from '../../Form/Button'
import Input from '../../Form/Input'
import MainFormTitle from './MainFormTitle'
import MainLoginSectionStyle from '../../Styles/MainLoginSectionStyle'

const MainLogin = () => {
  const navigate = useNavigate()
  const {loading, error, request}:any = useFetch()
  const username = useForm()
  const password = useForm()

  async function loginSubmit(event:any) {
      event.preventDefault()
      if( 
        username.validate(username.value ) &&
        password.validate(password.value)
      ) {
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

  return (
    <main>
      <MainLoginSectionStyle>
        <MainFormTitle>
          Login
        </MainFormTitle>
        <form onSubmit={loginSubmit}>
          <Input 
            label='Usuário'
            id='user'
            {...username}
          />
          <Input 
            label='Senha'
            type='password'
            id='password'
            {...password}
          />
          {error && <Error error={error.message} />}
          {loading ? 
            (
              <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%' disabled>
                logando....
              </Button>
            ) 
            :
            (   
            <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%'>
              login
            </Button>
          )}

        </form>
      </MainLoginSectionStyle>
    </main>
  )
}

export default MainLogin