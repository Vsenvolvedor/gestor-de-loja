import styled from 'styled-components'
import { USER_LOGIN } from '../../../api/user'
import  useFetch from '../../../Hooks/useFetch'
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

const MainLogin = () => {
  const {data, loading, error, request} = useFetch()
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
           {error ?  (<ErrorStyle>{error.message}</ErrorStyle>) : null}
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