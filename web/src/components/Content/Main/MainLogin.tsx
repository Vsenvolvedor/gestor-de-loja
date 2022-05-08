import Button from '../../Form/Button'
import Input from '../../Form/Input'
import MainFormTitle from './MainFormTitle'
import MainLoginSectionStyle from './MainLoginSectionStyle'

const MainLogin = () => {
  return (
    <main>
      <MainLoginSectionStyle>
        <MainFormTitle>
          Login
        </MainFormTitle>
        <form>
          <Input 
            label='Usuário'
            id='user'
          />
          <Input 
            label='Senha'
            type='password'
            id='password'
          />
          <Button marginConfig='1.5rem auto 0 auto' widthConfig='60%'>
            entrar
          </Button>
        </form>
      </MainLoginSectionStyle>
    </main>
  )
}

export default MainLogin